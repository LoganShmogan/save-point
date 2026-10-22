// Shared by the home page overview and the full /services page

import { starters } from "@/app/pricing/packages";
import { priceToNumber } from "@/app/shared/seo";

export type ServiceInfo = {
  id: string;
  title: string;
  summary: string;
  intro: string[];
  examples: string[];
  goodFit: string[];
  image: string;
  alt: string;
  // Starting price for a custom-built project in this service
  customFrom: string;
  // Matching ready-made package from app/pricing/packages.ts, if there is one
  starterId?: string;
};

export const services: ServiceInfo[] = [
  {
    id: "automation",
    title: "Automation & AI",
    summary:
      "Hand the repetitive jobs to software. We automate data entry, reminders, reports and admin so your team can get on with the real work.",
    intro: [
      "Most businesses lose hours every week copying information between systems, chasing paperwork and doing the same small jobs over and over. Automation takes those jobs off your plate and does them the same way, every time.",
      "Where it genuinely helps, we add AI: reading emails and documents, sorting enquiries, drafting replies or summarising data. Always with a person able to check and override what it does.",
    ],
    examples: [
      "Invoices and quotes created and sent automatically",
      "Booking confirmations, reminders and follow-ups",
      "Data synced between your POS, accounting, CRM and spreadsheets",
      "Daily or weekly reports built and emailed for you",
      "AI that sorts incoming emails, forms and documents",
      "Sensors and smart devices (IoT) that trigger actions on their own",
    ],
    goodFit: [
      "Your team re-types the same information into more than one place",
      "Jobs get missed because they rely on someone remembering",
      "You want answers from your data without building reports by hand",
    ],
    image: "/brand/hourglass.png",
    alt: "Pixel-art hourglass, representing time saved by automation",
    customFrom: "$599",
    starterId: "automation-starter",
  },
  {
    id: "kiosks",
    title: "Kiosks & Self-Service",
    summary:
      "Touchscreen kiosks for check-ins, ordering, sign-ups and information, connected straight into the systems you already run.",
    intro: [
      "A well-built kiosk lets customers, visitors and staff serve themselves, freeing up your front counter and cutting down on queues and paperwork.",
      "We handle the whole thing: choosing the hardware, building the software, locking it down so it only does its job, and connecting it to your bookings, stock, POS or staff systems so nothing has to be entered twice.",
    ],
    examples: [
      "Visitor and staff sign-in kiosks",
      "Self-service ordering and payment points",
      "Check-in kiosks for appointments and events",
      "Information and wayfinding screens",
      "Staff time clocks and job tracking stations",
      "Digital signage that updates itself from your data",
    ],
    goodFit: [
      "Your front desk is busy with simple, repeatable requests",
      "You still use paper sign-in sheets or forms",
      "You want customers to order or check in without waiting",
    ],
    image: "/brand/finger.png",
    alt: "Pixel-art hand pointer pressing a button, representing touchscreen kiosks",
    customFrom: "$1,750",
    starterId: "kiosk-starter",
  },
  {
    id: "software",
    title: "Apps & Custom Software",
    summary:
      "Software built around the way you work: dashboards, staff apps, databases, CRM and POS systems that fit instead of forcing workarounds.",
    intro: [
      "Off-the-shelf software is built for everyone, which often means it fits no one perfectly. We build applications shaped around your actual workflow, so your team spends less time fighting their tools.",
      "That can be a mobile app for staff in the field, an internal dashboard for managers, or a complete system that replaces several half-working ones.",
    ],
    examples: [
      "Staff and field-service apps for phones and tablets",
      "Customer management (CRM) and job tracking systems",
      "Point of sale (POS) and stock management",
      "Internal dashboards and reporting tools",
      "Databases that replace a pile of spreadsheets",
      "Upgrades to software you already rely on",
    ],
    goodFit: [
      "Your business runs on spreadsheets that have outgrown themselves",
      "Your current software forces awkward workarounds",
      "You have an idea for an app and need someone to build it with you",
    ],
    image: "/brand/lightbulb.png",
    alt: "Pixel-art lightbulb, representing custom software ideas",
    customFrom: "$1,250",
  },
  {
    id: "websites",
    title: "Websites & Web Apps",
    summary:
      "Fast, readable websites and online tools that work on any device, and plug into your bookings, payments and back office.",
    intro: [
      "Your website is often the first thing a customer sees. We build sites that load quickly, are easy to read at any age, and are simple for you to keep up to date.",
      "Because we build the rest of your systems too, your website doesn't have to stand alone. Enquiries, bookings and orders can flow straight into the tools your team already uses.",
    ],
    examples: [
      "Business websites and landing pages",
      "Online booking and enquiry forms",
      "Customer portals and logins",
      "Online stores and payments",
      "Web apps that run in the browser on any device",
      "Search-friendly setup so customers can find you",
    ],
    goodFit: [
      "You don't have a website, or it's slow and out of date",
      "Enquiries from your website get lost in an inbox",
      "You want customers to book, order or log in online",
    ],
    image: "/brand/coin.png",
    alt: "Pixel-art gold coin, representing websites and web apps for business",
    customFrom: "$600",
    starterId: "website-starter",
  },
  {
    id: "integrations",
    title: "Connected Systems",
    summary:
      "The glue between everything. We connect your apps, devices, kiosks and websites so information flows on its own.",
    intro: [
      "This is where Save Point gets its name. Every system we build is designed to talk to the others, and to the tools you already pay for.",
      "We connect software through APIs, link devices and sensors to your apps, and set up one place to see what's happening across your business. When one part changes, everything else stays in step.",
    ],
    examples: [
      "Linking your accounting, CRM, POS and booking tools",
      "Connecting smart devices and sensors to your software",
      "Single dashboards that pull from several systems",
      "Custom APIs so your systems can share data safely",
      "Moving data out of old systems into new ones",
      "Documentation so your systems keep working without us",
    ],
    goodFit: [
      "You use several tools that don't talk to each other",
      "You can't see the full picture without opening five apps",
      "You're replacing an old system and need your data to come with you",
    ],
    image: "/brand/blocks-logo.png",
    alt: "Save Point blocks logo: coloured pixel blocks fitting together, representing connected systems",
    customFrom: "$500",
  },
];

// Cheapest way in: the ready-made starter or the custom "from" price
export const lowestPrice = (service: ServiceInfo) => {
  const starter = starters.find((s) => s.id === service.starterId);
  if (starter && priceToNumber(starter.price) < priceToNumber(service.customFrom)) {
    return starter.price;
  }
  return service.customFrom;
};
