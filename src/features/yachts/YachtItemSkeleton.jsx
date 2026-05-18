import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

function YachtCardSkeleton() {
  return (
    <div className="p-1 h-full">
      <Card className="h-full py-0">
        {/* Image */}
        <CardContent className="px-0">
          <Skeleton className="aspect-5/4 w-full rounded-t-xl rounded-b-none" />
        </CardContent>

        {/* Title + rating row & location */}
        <CardHeader className="gap-2">
          <div className="flex items-center justify-between gap-4">
            <Skeleton className="h-5 w-2/5" />
            <Skeleton className="h-4 w-10" />
          </div>
          <Skeleton className="h-4 w-1/3" />
        </CardHeader>

        {/* Description + specs + features */}
        <CardContent className="space-y-4">
          {/* Description — 2 lines */}
          <div className="space-y-1.5">
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-4/5" />
          </div>

          {/* 4-column specs */}
          <div className="grid grid-cols-4 gap-2">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="space-y-1">
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-3 w-10" />
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
        </CardContent>

        {/* Footer: price + button */}
        <CardFooter className="mt-auto flex items-center justify-between border-t p-4">
          <div className="space-y-1">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-8 w-28 rounded-md" />
        </CardFooter>
      </Card>
    </div>
  );
}

function YachtItemSkeleton({count = 6}) {
  return (
    <div className="py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({length: count}).map((_, i) => (
            <YachtCardSkeleton key={i} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default YachtItemSkeleton;
