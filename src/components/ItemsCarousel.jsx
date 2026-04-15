import MaxWidthWrapper from "./MaxWidthWrapper";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {formatPrice} from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

const yachts = [
  {
    id: 1,
    slug: "armonia-38",
    name: "Armonia 38",
    image: "/images/yacht-1.webp",
    location: "Athens Marina",
    pricePerDay: 2250,
    pricePerHour: 320,
    guests: 10,
    cabins: 3,
    crew: 2,
    lengthFt: 38,
    speedKnots: 27,
    fuelIncluded: true,
    rating: 4.9,
    trips: 118,
    description:
      "Elegant day-cruiser for island hopping with sun deck, dining lounge, and premium sound.",
    features: ["Snorkeling Gear", "Bluetooth Audio", "Open Bar", "Sunbeds"],
  },
  {
    id: 2,
    slug: "aegean-star-42",
    name: "Aegean Star 42",
    image: "/images/yacht-2.webp",
    location: "Mykonos Port",
    pricePerDay: 2850,
    pricePerHour: 390,
    guests: 12,
    cabins: 4,
    crew: 3,
    lengthFt: 42,
    speedKnots: 30,
    fuelIncluded: false,
    rating: 4.8,
    trips: 94,
    description:
      "Luxury yacht built for private parties and sunset routes with wide deck space.",
    features: ["Jacuzzi", "Wi-Fi", "Paddle Boards", "Premium Snacks"],
  },
  {
    id: 3,
    slug: "blue-escape-46",
    name: "Blue Escape 46",
    image: "/images/yacht-3.webp",
    location: "Santorini Bay",
    pricePerDay: 3350,
    pricePerHour: 460,
    guests: 14,
    cabins: 4,
    crew: 3,
    lengthFt: 46,
    speedKnots: 29,
    fuelIncluded: true,
    rating: 5.0,
    trips: 67,
    description:
      "Flagship charter yacht with chef service and panoramic flybridge for premium events.",
    features: ["Onboard Chef", "Tender Boat", "Wakeboard", "Drone Photos"],
  },
  {
    id: 4,
    slug: "ionian-pearl-40",
    name: "Ionian Pearl 40",
    image: "/images/yacht-1.webp",
    location: "Corfu Harbor",
    pricePerDay: 2480,
    pricePerHour: 345,
    guests: 11,
    cabins: 3,
    crew: 2,
    lengthFt: 40,
    speedKnots: 28,
    fuelIncluded: true,
    rating: 4.7,
    trips: 82,
    description:
      "Balanced comfort and performance for family charters, coastal swims, and private tours.",
    features: ["Family Package", "Cooler", "Fishing Kit", "Sunshade"],
  },
  {
    id: 5,
    slug: "cyclades-wave-44",
    name: "Cyclades Wave 44",
    image: "/images/yacht-2.webp",
    location: "Naxos Marina",
    pricePerDay: 3090,
    pricePerHour: 430,
    guests: 13,
    cabins: 4,
    crew: 3,
    lengthFt: 44,
    speedKnots: 31,
    fuelIncluded: false,
    rating: 4.9,
    trips: 76,
    description:
      "Modern charter yacht for long day routes with generous seating and smooth handling.",
    features: ["Sea Scooter", "Iced Drinks", "Towels", "Photo Package"],
  },
  {
    id: 6,
    slug: "mediterraneo-50",
    name: "Mediterraneo 50",
    image: "/images/yacht-3.webp",
    location: "Rhodes Marina",
    pricePerDay: 4200,
    pricePerHour: 580,
    guests: 16,
    cabins: 5,
    crew: 4,
    lengthFt: 50,
    speedKnots: 33,
    fuelIncluded: false,
    rating: 4.9,
    trips: 51,
    description:
      "Large luxury motor yacht designed for VIP groups, celebrations, and full-day adventures.",
    features: ["VIP Lounge", "Jet Ski", "Chef Menu", "Concierge"],
  },
];

function ItemsCarousel() {
  return (
    <section className="py-24">
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
                <div className="p-1 h-full">
                  <Card className="h-full py-0">
                    <CardContent className="px-0">
                      <div className="relative aspect-5/4 overflow-hidden">
                        <Image
                          src={yacht.image}
                          alt={yacht.name}
                          fill
                          className="object-cover transition duration-500 group-hover/card:scale-105"
                          sizes="(max-width: 768px) 88vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </CardContent>

                    <CardHeader className="gap-2">
                      <div className="flex items-center justify-between gap-4">
                        <CardTitle>{yacht.name}</CardTitle>
                        <span className="text-sm font-medium">
                          {yacht.rating}★
                        </span>
                      </div>
                      <CardDescription>{yacht.location}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {yacht.description}
                      </p>

                      <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground">
                        <div>
                          <p className="text-foreground font-medium">
                            {yacht.guests}
                          </p>
                          <p>Guests</p>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {yacht.cabins}
                          </p>
                          <p>Cabins</p>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {yacht.lengthFt}ft
                          </p>
                          <p>Length</p>
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {yacht.crew}
                          </p>
                          <p>Crew</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {yacht.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="mt-auto flex items-center justify-between border-t p-4">
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          {formatPrice(yacht.pricePerDay)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatPrice(yacht.pricePerHour)} / hour
                        </p>
                      </div>

                      <Button
                        size="sm"
                        asChild
                        className="uppercase tracking-wide">
                        <Link href={`/yachts/${yacht.slug}`}>View Details</Link>
                      </Button>
                    </CardFooter>
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
