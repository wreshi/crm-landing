"use server";
import { createSubmissionSchema } from "@/schema/submissions.schema";
import { z } from "zod";
import { db } from "@/database";
import { submissionsTable } from "@/database/schema";
import { ulid } from "ulid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

type CreateSubmissionResponse = {
  success: boolean;
  message: string;
  code: 'EXISTING' | 'SUCCESS' | 'ERROR';
};

export default async function createSubmission({
  email,
}: z.infer<typeof createSubmissionSchema>): Promise<CreateSubmissionResponse> {
  const alreadyExists = await db.query.submissionsTable.findFirst({
    where: eq(submissionsTable.email, email),
  });
  if (alreadyExists) {
    return {
      success: false,
      code: 'EXISTING',
      message: "You are already in the waiting list",
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
      code: 'ERROR',
      message: "Something went wrong",
    };
  }
  const submissionId = btoa("signed_up_to_waitlist");
  (await cookies()).set("waitlist", "true", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return {
    success: true,
    message: "Submission created successfully",
    code: 'SUCCESS',
  };
}
