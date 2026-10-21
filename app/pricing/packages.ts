// Ready-made starter packages: fixed price, set up from our pre-built
// templates rather than developed from scratch. Warranty lengths here are
// also listed on the legal page (section 4.2), so keep the two in step.

export type StarterPackage = {
  id: string;
  name: string;
  price: string;
  turnaround: string;
  description: string;
  includes: string[];
};

export const starters: StarterPackage[] = [
  {
    id: "automation-starter",
    name: "Automation Starter",
    price: "$599",
    turnaround: "Live in about 1 week",
    description:
      "Pick three ready-made automations from our library and we'll set them up on the tools you already use.",
    includes: [
      "3 pre-built automations of your choice",
      "Invoice reminders, booking confirmations, form-to-spreadsheet and more",
      "Connected to up to 2 of your existing tools",
      "Plain-English guide to how it all works",
      "1 month warranty",
    ],
  },
  {
    id: "website-starter",
    name: "Website Starter",
    price: "$349",
    turnaround: "Live in about 1 to 2 weeks",
    description:
      "A ready-made, mobile-friendly website template, styled with your logo, colours and words.",
    includes: [
      "Up to 5 pages from our pre-built templates",
      "Your branding, photos and content added for you",
      "Contact or booking form sent straight to your inbox",
      "Search-friendly setup so customers can find you",
      "1 month warranty",
    ],
  },
  {
    id: "kiosk-starter",
    name: "Kiosk Starter",
    price: "$1,499",
    turnaround: "Live in about 2 weeks",
    description:
      "Our ready-made sign-in and check-in kiosk, set up on a tablet and stand and branded for your business.",
    includes: [
      "Pre-built visitor, staff or customer check-in app",
      "Branded with your logo and questions",
      "Records saved to a spreadsheet or your existing system",
      "Locked down so it only does its job",
      "Hardware supplied at cost, or use your own",
      "3 months warranty",
    ],
  },
  {
    id: "business-bundle",
    name: "Business Starter Bundle",
    price: "$2,099",
    turnaround: "Live in about 3 weeks",
    description:
      "All three starters together, connected to each other, for less than buying them separately.",
    includes: [
      "Automation Starter, Website Starter and Kiosk Starter",
      "Website forms and kiosk check-ins feed your automations",
      "One setup, one handover, one point of contact",
      "Save $348 on buying separately",
      "3 months warranty",
    ],
  },
];
