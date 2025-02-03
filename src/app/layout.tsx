import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/waiting-list/header";
import { Footer } from "@/components/waiting-list/footer";

export const metadata: Metadata = {
  title: {
    default: `Asend${process.env.NODE_ENV === "development" ? " | Dev" : ""}`,
    template: `%s | Asend${
      process.env.NODE_ENV === "development" ? " | Dev" : ""
    }`,
  },
  description:
    "Asend is the ultimate full-stack LinkedIn client acquisition tool, designed to streamline lead generation, outreach, and sales automation.",
  metadataBase: new URL("https://ascendifyr.in"),
  keywords: [
    "LinkedIn automation",
    "client acquisition",
    "Ascendifyr",
    "Asend Labs",
    "lead generation",
    "sales automation",
    "outreach tool",
    "B2B sales",
    "LinkedIn CRM",
    "AI-powered outreach",
    "LinkedIn growth",
    "business development",
    "Fullstack linkedin tool",
    "LinkedIn Sales tools",
  ],
  openGraph: {
    title: "Asend – The Fullstack LinkedIn Client Acquisition Tool",
    description:
      "Fullstack LinkedIn CRM, close high-quality leads, and scale your business with Asend.",
    url: "https://ascendifyr.in",
    siteName: "Asend",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Asend - LinkedIn Client Acquisition Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asend – The fullstack LinkedIn Client Acquisition Tool",
    description:
      "Asend is a fullstack LinkedIn client acquisition tool, designed to streamline lead generation, outreach, and sales automation.",
    images: ["/twitter-image.webp"],
  },
  alternates: {
    canonical: "https://ascendifyr.in",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + ""}>
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
