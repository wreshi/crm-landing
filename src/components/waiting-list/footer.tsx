import React from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Linkedin, LucideIcon, Twitter } from "lucide-react";

interface FooterLinkProps {
  href: string;
  title: string;
}

interface FooterSocialLinkProps {
  href: string;
  icon: LucideIcon;
}

const FooterLink = (props: FooterLinkProps) => {
  return (
    <Link
      className="text-muted-foreground hover:text-primary hover:underline underline-offset-[3px]"
      href={props.href}
    >
      {props.title}
    </Link>
  );
};

const FooterSocialLink = (props: FooterSocialLinkProps) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
    >
      <props.icon className="size-[17px]" />
    </Link>
  );
};

const footerSocialLinks: FooterSocialLinkProps[] = [
  {
    href: "https://twitter.com/asendlabs",
    icon: Twitter,
  },
  { href: "https://linkedin.com/company/asendlabs", icon: Linkedin },
  {
    href: "https://github.com/asendlabs",
    icon: Github,
  },
];

const footerLinks: FooterLinkProps[] = [
  {
    href: "/policies/privacy",
    title: "Privacy Policy",
  },
  {
    href: "/policies/terms",
    title: "Terms and Conditions",
  },
  {
    href: "/policies/refund",
    title: "Refund Policy",
  },
];

export function Footer() {
  return (
    <section className="py-5 border-t border-border w-screen flex flex-col md:flex-row items-center justify-between sm:px-20 md:px-30 lg:px-40 px-10 text-xs md:text-sm">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <span className="mr-3">© Asend Labs | 2024-2025</span>
        {footerLinks.map((link, index) => (
          <FooterLink key={index} {...link} />
        ))}
      </div>
      <div className="flex items-center gap-4 mt-5 md:mt-0">
        {footerSocialLinks.map((link, index) => (
          <FooterSocialLink key={index} {...link} />
        ))}
      </div>
    </section>
  );
}
