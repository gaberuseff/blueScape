import {Skeleton} from "@/components/ui/skeleton";

function YachtBookingSectionSkeleton() {
  return (
    <section className="space-y-6 md:space-y-8">
      <div className="space-y-2 text-center">
        <Skeleton className="mx-auto h-6 w-28 rounded-full" />
        <Skeleton className="mx-auto h-8 w-72 max-w-full rounded-2xl" />
      </div>

      <div className="overflow-hidden rounded-3xl border border-border/70 bg-card">
        <div className="flex flex-wrap items-end justify-between gap-3 bg-muted px-5 py-3 md:px-6">
          <Skeleton className="h-7 w-28 rounded-xl" />
          <Skeleton className="h-5 w-40 rounded-xl" />
        </div>

        <div className="px-5 py-5 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="order-2 space-y-5 lg:order-1">
              <div className="grid gap-5 md:grid-cols-2">
                <Skeleton className="h-20 rounded-2xl" />
                <Skeleton className="h-20 rounded-2xl" />
              </div>

              <Skeleton className="h-24 rounded-2xl" />

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
                <Skeleton className="h-5 w-72 max-w-full rounded-xl" />
                <Skeleton className="h-11 w-40 rounded-2xl" />
              </div>
            </div>

            <Skeleton className="order-1 h-105 rounded-2xl lg:order-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YachtBookingSectionSkeleton;
