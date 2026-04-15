import Link from "next/link";
import {ArrowRight, CheckCircle2} from "lucide-react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import {Button} from "./ui/button";

const steps = [
  {
    step: "Step 1",
    title: "Choose your yacht",
    points: [
      "Browse verified yachts by destination and capacity",
      "Check photos, amenities, and pricing",
      "Shortlist the best match for your group",
      "Pick your preferred travel date",
    ],
  },
  {
    step: "Step 2",
    title: "Customize your trip",
    points: [
      "Select trip duration and departure marina",
      "Add extras like chef, drinks, or water toys",
      "Share route preferences and special requests",
      "Get a clear final quote instantly",
    ],
  },
  {
    step: "Step 3",
    title: "Confirm your booking",
    points: [
      "Approve itinerary and booking details",
      "Secure your date with online payment",
      "Receive confirmation and boarding instructions",
      "Get support from our team before departure",
    ],
  },
  {
    step: "Step 4",
    title: "Board and enjoy",
    points: [
      "Meet your captain and crew at the marina",
      "Board your yacht with everything prepared",
      "Sail, swim, and relax on your planned route",
      "Enjoy concierge support throughout the journey",
    ],
  },
];

function HowItBook() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <MaxWidthWrapper>
        <div className="relative">
          <div className="flex flex-col gap-6 border-b border-border/80 pb-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center rounded-md border border-border/80 bg-background px-3 py-1 text-xs font-medium uppercase text-muted-foreground">
                How To Book
              </span>
              <h2 className="section_heading">
                Book your yacht in 4 simple steps
              </h2>
              <p className="section_subheading">
                A fast booking flow designed for yacht charters, from yacht
                selection to boarding day.
              </p>
            </div>

            <Button
              asChild
              size="sm"
              className="uppercase tracking-wide md:shrink-0">
              <Link href="/yachts">
                Book now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-0 xl:grid-cols-4">
            {steps.map((step) => {
              return (
                <article
                  key={step.step}
                  className="relative border-t border-border/70 pt-5 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:not-last:border-r md:not-last:pr-6 md:not-first:pl-6 xl:not-last:border-r xl:not-last:pr-6 xl:not-first:pl-6">
                  <div className="mb-5">
                    <span className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {step.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HowItBook;
