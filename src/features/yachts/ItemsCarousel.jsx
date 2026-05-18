import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import YachtItem from "@/features/yachts/YachtItem";
import {yachts} from "../yacht/yachtData";

function ItemsCarousel() {
  return (
    <section className="py-14 md:py-32">
      <MaxWidthWrapper>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full">
          <CarouselContent>
            {yachts.map((yacht) => (
              <CarouselItem
                key={yacht.id}
                className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <YachtItem yacht={yacht} key={yacht.id} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
}

export default ItemsCarousel;
