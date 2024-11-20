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

export function WaitingListForm() {
  const form = useForm<z.infer<typeof createSubmissionSchema>>({
    resolver: zodResolver(createSubmissionSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof createSubmissionSchema>) {
    const res = await createSubmission(data);
    toast.info(res);
  }

  return (
    <div className="flex items-center justify-center w-screen pb-0 md:pb-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col md:flex-row gap-2">
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
            >
              Join Waitlist
            </RainbowButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
