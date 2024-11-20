"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createSubmissionSchema } from "@/schema/submissions.schema";
import createSubmission from "@/server/submissions";
import { RainbowButton } from "../ui/rainbow-button";
import { useEffect, useState } from "react";
import { Check, CheckCircle, Loader } from "lucide-react";

export function WaitingListForm({
  submissionId,
}: {
  submissionId: string | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [submissionIdCookie, setSubmissionIdCookie] = useState(
    submissionId ?? ""
  );
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (submissionIdCookie) {
      // Any additional logic for an existing submissionId
    }
  }, [submissionIdCookie]);

  const form = useForm<z.infer<typeof createSubmissionSchema>>({
    resolver: zodResolver(createSubmissionSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof createSubmissionSchema>) {
    setLoading(true);
    try {
      const res = await createSubmission(data);
      if (!res.success) {
        toast.error(res.message);
        return;
      }
      setIsSuccess(true);
    } catch (error) {
      toast.error("Internal server error");
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  // Show success message
  if (isSuccess) {
    return (
      <div className="flex items-center justify-center w-screen pb-10 -pt-10">
        <div className="border border-border text-green-600 px-4 py-3 rounded-full shadow-lg flex items-center bg-green-50">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium text-sm">
              You're now signed up for the waitlist! We'll be in touch soon.
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Show already signed up message
  if (submissionIdCookie) {
    return (
      <div className="flex items-center justify-center w-screen pb-10 -pt-10">
        <div className="border border-border text-orange-600 px-4 py-3 rounded-full shadow-lg flex items-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium text-sm">
              You're already signed up for the waitlist!
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-screen pb-0 md:pb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="h-9 w-80"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <RainbowButton
              className="h-9 px-3 text-sm rounded-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Join Waitlist"
              )}
            </RainbowButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
