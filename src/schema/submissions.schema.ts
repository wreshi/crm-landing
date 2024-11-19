import z from "zod";

export const createSubmissionSchema = z.object({
  email: z.string().email(),
});
