"use server";
import { createSubmissionSchema } from "@/schema/submissions.schema";
import { z } from "zod";

export default async function createSubmission({
  email,
}: z.infer<typeof createSubmissionSchema>) {
  return `test@ email: ${email}`;
}
