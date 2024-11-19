import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Asend",
  description: "The revolutionary crm",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
