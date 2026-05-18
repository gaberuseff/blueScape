import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import YachtBookingSection from "@/features/yacht/YachtBookingSection";
import YachtBookingSectionSkeleton from "@/features/yacht/YachtBookingSectionSkeleton";
import YachtOverviewCard from "@/features/yacht/YachtOverviewCard";
import { getYachtBySlug } from "@/features/yacht/yachtData";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    return {
      title: "Yacht Not Found | Blue Escape",
      description: "The yacht you are looking for could not be found.",
    };
  }

  return {
    title: `${yacht.name} | Blue Escape`,
    description: `Book ${yacht.name} in ${yacht.location}. Premium yacht reservation with flexible dates and pay-on-arrival booking.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    notFound();
  }

  return (
    <section className="py-8 md:py-12">
      <MaxWidthWrapper className="space-y-10 md:space-y-14">
        <YachtOverviewCard yacht={yacht} />

        <Suspense fallback={<YachtBookingSectionSkeleton />}>
          <YachtBookingSection yacht={yacht} />
        </Suspense>
      </MaxWidthWrapper>
    </section>
  );
}
