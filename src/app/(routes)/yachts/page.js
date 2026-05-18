import YachtItemSkeleton from "@/features/yachts/YachtItemSkeleton";
import YachtsList from "@/features/yachts/YachtsList";
import { Suspense } from "react";

export const metadata = {
  title: "Yachts | Blue Escape",
  description:
    "Browse our exclusive fleet of luxury yachts available for charter across the Greek islands.",
};

async function page() {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/yachts/yacht-3.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(212_58%_14%/0.6)] via-[hsl(212_58%_14%/0.5)] to-[hsl(212_58%_14%/0.85)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(187_46%_70%)] mb-3">
            Exclusive Fleet
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            Our Yachts
          </h1>
          <p className="mt-4 max-w-md text-sm md:text-base text-white/75">
            Handpicked luxury vessels for unforgettable experiences across the
            Greek islands
          </p>
        </div>
      </div>

      <div className="py-14 md:py-20">
        <Suspense fallback={<YachtItemSkeleton />}>
          <YachtsList />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
