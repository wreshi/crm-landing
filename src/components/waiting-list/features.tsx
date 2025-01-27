import { Badge } from "@/components/ui/badge";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Focused Design",
    description:
      "A sleek, LinkedIn-focused interface that eliminates distractions, keeping you productive and efficient.",
  },
  {
    title: "Profile Data",
    description:
      "Extract and refresh LinkedIn profile details anytime—company info, connections, posts, and more, all in one place.",
  },
  {
    title: "Post Analysis",
    description:
      "Uncover key insights from LinkedIn posts—engagement metrics, trends, and performance, fast and efficiently.",
  },
  {
    title: "Lead Summarization",
    description:
      "Get summaries on every lead and profile you want. No more wasting time on manual data entry and lookup.",
  },
  {
    title: "DMs Analysis",
    description:
      "Analyze and manage LinkedIn direct messages with ease, ensuring no opportunity slips through the cracks.",
  },
  {
    title: "Smart Suggestions",
    description:
      "Get actionable advice and tailored recommendations based on LinkedIn data to optimize your outreach strategy.",
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
