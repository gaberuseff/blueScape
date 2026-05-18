import {Button} from "@/components/ui/button";
import {formatPrice} from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

function YachtItem({yacht}) {
  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={yacht?.images?.[0]}
            alt={yacht.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-107"
            sizes="(max-width: 768px) 88vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Dark gradient at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Rating badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-white border border-white/20">
            <span className="text-yellow-400">★</span>
            {yacht.rating}
          </div>

          {/* Fuel badge */}
          {yacht.fuelIncluded && (
            <div className="absolute top-3 left-3 rounded-full bg-primary/70 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              Fuel Included
            </div>
          )}

          {/* Name + location overlaid on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white leading-tight drop-shadow">
              {yacht.name}
            </h3>
            <p className="text-xs text-white/80 mt-0.5 flex items-center gap-1">
              <svg
                className="inline w-3 h-3 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {yacht.location}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 gap-4">
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {yacht.description}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-4 gap-2 rounded-xl bg-muted/50 px-3 py-2.5 text-center">
            {[
              {value: yacht.guests, label: "Guests"},
              {value: yacht.cabins, label: "Cabins"},
              {value: `${yacht.lengthFt}ft`, label: "Length"},
              {value: yacht.crew, label: "Crew"},
            ].map(({value, label}) => (
              <div key={label}>
                <p className="text-sm font-semibold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-1.5">
            {yacht.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-muted-foreground font-medium">
                {feature}
              </span>
            ))}
            {yacht.features.length > 3 && (
              <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                +{yacht.features.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
            <div>
              <p className="text-base font-bold text-foreground">
                {formatPrice(yacht.pricePerDay)}
                <span className="text-xs font-normal text-muted-foreground ml-1">
                  / day
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                {formatPrice(yacht.pricePerHour)} / hr
              </p>
            </div>

            <Button
              size="sm"
              asChild
              className="rounded-full px-5 text-xs font-semibold uppercase tracking-wider transition-transform duration-200 hover:scale-105">
              <Link href={`/yachts/${yacht.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YachtItem;
