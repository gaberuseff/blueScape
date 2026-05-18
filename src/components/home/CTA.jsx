import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {Button} from "@/components/ui/button";

function CTA() {
  return (
    <section className="py-14 md:py-32">
      <MaxWidthWrapper size="xl">
        <div className="relative isolate overflow-hidden rounded-3xl">
          <Image
            src="/yachts/yacht-2.webp"
            alt="Luxury yacht cruising in the Mediterranean"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,28,0.78)_0%,rgba(7,18,28,0.55)_42%,rgba(9,28,39,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)]" />

          <div className="relative z-10 flex min-h-136 items-center justify-center px-6 py-14 md:px-12">
            <div className="max-w-4xl text-center text-white">
              <p className="mb-4 text-sm tracking-[0.35em] uppercase text-white/80">
                Blue Escape
              </p>

              <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1] tracking-tight md:text-5xl lg:text-6xl">
                Explore Greece with comfort.
                <br />
                Explore Greece with us.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                Private charters, refined service, and handpicked yachts for an
                effortless escape across the Greek islands.
              </p>

              <div className="mt-10 flex items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <Link href="/yachts">
                    View all tours
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default CTA;
