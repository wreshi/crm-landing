import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Asend CRM services, including lead management, sales pipeline management, AI tools, and app integrations.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-10 lg:py-16 max-w-4xl mx-auto">
        <div className="grid gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Privacy Policy for Asend
            </h1>
            <p className="text-gray-600">Last updated: May 01, 2024</p>
          </div>

          <p className="text-gray-700">
            Asend ("Asend," "we," "us," or "our") is committed to protecting
            your privacy. This Privacy Policy explains our practices regarding
            the collection, use, and sharing of information when you access or
            use our CRM services, including but not limited to our lead
            management, sales pipeline management, AI tools, and app
            integrations.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-800">
                A. Personal Information
              </h3>
              <p className="text-gray-700">
                We may collect personally identifiable information, including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Contact Details:</strong> Name, email, phone number,
                  address.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and
                  other credentials.
                </li>
                <li>
                  <strong>Billing Information:</strong> Payment details for
                  purchasing plans.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-800">
                B. Usage Data
              </h3>
              <p className="text-gray-700">
                Data collected automatically when using Asend, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Log Data:</strong> IP addresses, browser type, and OS.
                </li>
                <li>
                  <strong>Device Information:</strong> Device identifiers,
                  model, and network.
                </li>
                <li>
                  <strong>Activity Information:</strong> Pages visited, time
                  spent, interactions with features.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-800">
                C. Data from Third-party Integrations
              </h3>
              <p className="text-gray-700">
                Asend allows integration with third-party applications (e.g.,
                Google Calendar, LinkedIn). With user consent, we collect and
                use data from these integrations to enhance service
                functionality.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-800">
                D. Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Improve Service:</strong> Track usage, remember
                  preferences.
                </li>
                <li>
                  <strong>Analytics:</strong> Understand how users interact with
                  Asend.
                </li>
                <li>
                  <strong>Advertising:</strong> Show relevant ads (where
                  applicable).
                </li>
              </ul>
              <p className="text-gray-700">
                You can control cookies via your browser settings; however,
                opting out may affect certain functionalities of Asend.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Service Provision and Enhancement:</strong> To operate
                Asend, facilitate lead management, sales tracking, and customize
                the user experience.
              </li>
              <li>
                <strong>Communication and Updates:</strong> Send notifications
                and marketing content with consent.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Comply with legal
                obligations, such as responding to lawful requests.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Sharing of Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>With Service Providers:</strong> Third-party vendors
                assisting with payment processing, data analysis, and service
                hosting.
              </li>
              <li>
                <strong>For Business Transfers:</strong> If Asend undergoes a
                merger, acquisition, or sale, user information may be
                transferred to the new entity.
              </li>
              <li>
                <strong>With User Consent:</strong> Information may be shared
                for any additional purpose with explicit consent.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Your Data Protection Rights
            </h2>
            <p className="text-gray-700">
              Access, correction, deletion, and portability rights regarding
              personal data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Security of Information
            </h2>
            <p className="text-gray-700">
              We strive to use industry-standard practices to protect your data,
              though no online transmission is fully secure. Users should
              exercise caution when sharing sensitive information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Asend does not knowingly collect data from individuals under 13.
              If we learn of such collection, we will delete the information
              promptly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Changes to Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy to reflect changes in laws or our
              practices. Major updates will be communicated via email or in-app
              notifications.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have questions regarding this policy, email us at{" "}
              <a
                href="mailto:support@ascendifyr.in"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                support@ascendifyr.in
              </a>{" "}
              or visit our support page at{" "}
              <a
                href="https://ascendifyr.in/support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://ascendifyr.in/support
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};