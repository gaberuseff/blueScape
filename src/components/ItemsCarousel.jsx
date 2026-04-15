import MaxWidthWrapper from "./MaxWidthWrapper";

import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function ItemsCarousel() {
  return (
    <section className="py-24">
      <MaxWidthWrapper>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full ">
          <CarouselContent>
            {Array.from({length: 5}).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={`/images/yacht-1.webp`}
                        alt={`Image ${index + 1}`}
                        width={300}
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </div>
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
