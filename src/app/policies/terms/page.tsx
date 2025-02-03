import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Asend CRM services, including lead management, sales pipeline management, AI tools, and app integrations.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="py-10 px-4 md:px-16 lg:px-72 flex flex-col gap-20">
      <section id="terms-and-conditions" className="grid gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Terms and Conditions (T&C) for Asend
          </h1>
          <p className="text-sm text-gray-600">Last updated: May 01, 2024</p>
        </div>

        <div className="space-y-6">
          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By using Asend, you agree to these terms. If you do not agree, you
              may not access or use our services.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Account Creation and Responsibilities
            </h2>
            <div className="space-y-3">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">
                  A. User Eligibility
                </h3>
                <p className="text-gray-700">
                  Users must be at least 18 years old or have parental consent
                  to create an account.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">
                  B. Account Security
                </h3>
                <p className="text-gray-700">
                  Login credentials should be kept confidential, and Asend
                  should be notified of unauthorized access.
                </p>
              </div>
            </div>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Permissible Use of Asend
            </h2>
            <p className="text-gray-700">
              Intended for business use, with restrictions on unauthorized
              activities such as spamming and uploading malware.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-700">
              All content on Asend is owned by us or our affiliates.
              Unauthorized copying or distribution is prohibited.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              5. User-Generated Content
            </h2>
            <p className="text-gray-700">
              Users are responsible for the content they upload, and Asend
              reserves the right to moderate content violating these T&C.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Third-party Integrations and Services
            </h2>
            <p className="text-gray-700">
              Users acknowledge Asend is not liable for issues arising from
              third-party integrations.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Data Privacy and Security
            </h2>
            <p className="text-gray-700">
              Asend processes data according to our Privacy Policy, with
              security measures in place but without guarantees of complete
              security.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              8. Disclaimers and Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Asend is provided "as is" with limitations on liability for
              indirect damages.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              9. Termination of Access
            </h2>
            <p className="text-gray-700">
              Asend may suspend or terminate access for violations or misuse,
              with notice provided.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              10. Governing Law
            </h2>
            <p className="text-gray-700">
              These T&C are governed by the laws of India.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              11. Changes to T&C
            </h2>
            <p className="text-gray-700">
              We may update these T&C, and continued use of Asend indicates
              acceptance of revised terms.
            </p>
          </article>

          <article className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              12. Contact Information
            </h2>
            <p className="text-gray-700">
              For questions regarding these T&C, reach us at{" "}
              <Link
                href="mailto:support@ascendifyr.in"
                className="text-blue-600 hover:text-blue-800"
              >
                support@ascendifyr.in
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

