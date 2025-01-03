import { Badge } from "@/components/ui/badge";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Clean Design",
    description:
      "Embrace simplicity with a clutter-free interface. Focus on what matters most without unnecessary distractions.",
  },
  {
    title: "Essential Tools",
    description:
      "Get exactly what you need, nothing more. Carefully selected features that streamline your workflow.",
  },
  {
    title: "Fast & Light",
    description:
      "Experience lightning-fast performance with our lightweight design. No bloat, just pure efficiency.",
  },
  {
    title: "Custom Flow",
    description:
      "Adapt the system to your way of working. Simple customization options that don't overwhelm.",
  },
  {
    title: "Focus Mode",
    description:
      "Concentrate on one task at a time. Clean workspace design that promotes productivity and clarity.",
  },
  {
    title: "Thoughtful Details",
    description:
      "Every element serves a purpose. Carefully crafted interface with intention behind every feature.",
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
      <p className="font-medium text-muted-foreground mt-2 text-sm">
        {description}
      </p>
    </div>
  );
};

export function Features() {
  return (
    <div className="pt-14 pb-20 w-screen flex items-center justify-center px-4 sm:px-36 md:px-48 lg:px-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;
