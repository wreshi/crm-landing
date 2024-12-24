"use server";
import { createSubmissionSchema } from "@/schema/submissions.schema";
import { z } from "zod";
import { db } from "@/database";
import { submissionsTable } from "@/database/schema";
import { ulid } from "ulid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { loops } from "@/lib/loops";

type CreateSubmissionResponse = {
  success: boolean;
  message: string;
  code: "EXISTING" | "SUCCESS" | "ERROR";
};

export default async function createSubmission({
  email,
}: z.infer<typeof createSubmissionSchema>): Promise<CreateSubmissionResponse> {
  const alreadyExists = await db.query.submissionsTable.findFirst({
    where: eq(submissionsTable.email, email),
  });
  if (alreadyExists) {
    return {
      success: true,
      code: "SUCCESS",
      message: "Already in the waiting list, no need to sign up again",
    };
  }
  const createdSubmission = await db
    .insert(submissionsTable)
    .values({
      id: ulid(),
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();
  if (!createdSubmission) {
    return {
      success: false,
      code: "ERROR",
      message: "Something went wrong",
    };
  }
  const contactProperties = {
    userId: createdSubmission[0].id,
    source: "waitlist-signup",
  };
  const resp = await loops.createContact(
    createdSubmission[0].email,
    contactProperties
  );
  if (!resp.success) {
    return {
      success: false,
      code: "ERROR",
      message: "Something went wrong",
    };
  }
  (await cookies()).set("waitlist", "true", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return {
    success: true,
    message: "Submission created successfully",
    code: "SUCCESS",
  };
}
