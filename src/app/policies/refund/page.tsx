import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for Asend CRM services, including lead management, sales pipeline management, AI tools, and app integrations.",
};

export default function RefundPolicyPage() {
  return (
    <main className="py-10 px-4 md:px-16 lg:px-72 flex flex-col gap-20">
      <section id="refund-policy" className="grid gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Refund Policy for Asend
          </h1>
          <p className="text-sm text-gray-600">Last updated: May 01, 2024</p>
        </div>

        <div className="space-y-6">
          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Eligibility for Refunds
            </h2>
            <p className="text-gray-700">
              Users may request a refund within 14 days of purchasing an annual
              plan, with restrictions on extensive usage.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Refund Request Process
            </h2>
            <p className="text-gray-700">
              Email{" "}
              <a
                href="mailto:refunds@ascendifyr.in"
                className="text-blue-600 hover:text-blue-800"
              >
                refunds@ascendifyr.in
              </a>{" "}
              for a refund request. Processing time is typically 7-14 business
              days.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Partial Refunds
            </h2>
            <p className="text-gray-700">
              Prorated refunds may be available mid-term or in special
              circumstances.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Non-refundable Charges
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>One-time fees for setup or customization.</li>
              <li>
                Monthly subscription fees, with cancellations only affecting
                future charges.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Subscription Cancellations
            </h2>
            <p className="text-gray-700">
              Users can cancel subscriptions at any time; access continues until
              the end of the current billing cycle.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Amendments to Refund Policy
            </h2>
            <p className="text-gray-700">
              Asend reserves the right to amend this Refund Policy. Continued
              use indicates acceptance of changes.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Contact Us
            </h2>
            <p className="text-gray-700">
              For questions regarding this Refund Policy, email{" "}
              <a
                href="mailto:refunds@ascendifyr.in"
                className="text-blue-600 hover:text-blue-800"
              >
                refunds@ascendifyr.in
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};