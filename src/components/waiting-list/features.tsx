import { Badge } from "@/components/ui/badge";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Sales AI",
    description:
      "Talk to your CRM like a team member. Get instant insights, automate tasks, and let AI help you close more deals.",
  },
  {
    title: "Sales Predictions",
    description:
      "Know where your deals are headed. Get simple forecasts based on your sales data without the complexity.",
  },
  {
    title: "Built for you",
    description:
      "Whether you're a solopreneur or a small business, Asend is designed with simplcity in mind. Without any fuss.",
  },
  {
    title: "Custom Pipeline",
    description:
      "Create a sales pipeline that matches how you actually work. No forced workflows, just your process digitized.",
  },
  {
    title: "Manage your team",
    description:
      "Keep your team aligned and deals moving. Simple team management without the overhead.",
  },
  {
    title: "Opinionated design",
    description:
      "A clean, focused interface that helps you get things done. We chose simplicity over endless customization and 90s web design.",
  },
];

const FeatureCard = ({ title, description }: Feature) => {
  return (
    <div className="flex flex-col items-start py-4 px-2">
      <Badge
        variant="outline"
        className="text-orange-500 rounded-full py-1 text-base font-medium px-3 w-full flex items-center justify-center"
      >
        {title}
      </Badge>
      <p className="font-medium text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
};

export function Features() {
  return (
    <div className="py-10 pb-16 w-screen flex items-center justify-center px-4 sm:px-36 md:px-48 lg:px-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;
