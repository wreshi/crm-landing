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
  description: "The revolutionary CRM",
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
          defaultTheme="light"
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
