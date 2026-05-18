import Image from "next/image";
import {
  BedDouble,
  Gauge,
  MapPin,
  Sailboat,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";
import {formatPrice} from "@/lib/helpers";

function YachtOverviewCard({yacht}) {
  const specs = [
    {id: "guests", icon: Users, label: `Up to ${yacht.guests} guests`},
    {id: "cabins", icon: BedDouble, label: `${yacht.cabins} luxury cabins`},
    {id: "size", icon: Sailboat, label: `${yacht.lengthFt} ft length`},
    {id: "speed", icon: Gauge, label: `${yacht.speedKnots} knots cruising`},
  ];

  return (
    <Card className="overflow-hidden rounded-3xl bg-secondary py-0 shadow-none">
      <CardContent className="grid gap-6 px-5 py-5 md:grid-cols-[1.2fr_1.8fr] md:gap-8 md:px-6 md:py-6">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-full md:min-h-85">
          <Image
            src={yacht.images[0]}
            alt={yacht.name}
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {yacht.name}
            </h1>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-foreground/65">
              <MapPin className="size-4" />
              {yacht.location}
            </p>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-foreground/70 md:text-base">
            {yacht.description}
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {specs.map(({id, icon: Icon, label}) => (
              <div
                key={id}
                className="inline-flex items-center gap-2 rounded-xl bg-muted px-3.5 py-2.5 text-sm font-medium text-foreground/75">
                <Icon className="size-4 text-foreground/70" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-end justify-between gap-3 border-t border-foreground/10 pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-foreground/50">
                From
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatPrice(yacht.pricePerDay)}
                <span className="ml-1 text-sm font-normal text-foreground/60">
                  / night
                </span>
              </p>
            </div>

            <p className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground/65">
              <ShieldCheck className="size-3.5" />
              Privacy 100% guaranteed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default YachtOverviewCard;
