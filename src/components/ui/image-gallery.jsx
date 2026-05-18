"use client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

const ITEMS_PER_COLUMN = 6;
const INITIAL_VISIBLE_ITEMS = 2;
const INCREMENT_VISIBLE_ITEMS = 2;
const INCREMENT_DELAY_MS = 220;

function getImageConfig(col, index) {
  // Keep orientation deterministic so SSR and client render the same markup.
  const isPortrait = (col + index) % 2 === 0;
  const width = isPortrait ? 1080 : 1920;
  const height = isPortrait ? 1920 : 1080;
  const ratio = isPortrait ? 9 / 16 : 16 / 9;

  return {width, height, ratio};
}

export function ImageGallery({images}) {
  const sectionRef = useRef(null);
  const isSectionNearViewport = useInView(sectionRef, {
    once: true,
    margin: "450px 0px",
  });
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);
  const imgs = Array.isArray(images) ? images : [];
  const columns = 3;
  const itemsByColumn = Array.from({length: columns}, (_, col) =>
    imgs.map((img, i) => ({img, i})).filter(({i}) => i % columns === col),
  );
  const maxItemsPerColumn = itemsByColumn.reduce(
    (max, col) => Math.max(max, col.length),
    0,
  );

  useEffect(() => {
    if (!isSectionNearViewport) return;

    const timer = window.setInterval(() => {
      setVisibleItems((prev) => {
        if (prev >= maxItemsPerColumn) {
          window.clearInterval(timer);
          return prev;
        }

        return Math.min(prev + INCREMENT_VISIBLE_ITEMS, maxItemsPerColumn);
      });
    }, INCREMENT_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [isSectionNearViewport, maxItemsPerColumn]);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
        {itemsByColumn.map((colItems, col) => (
          <div key={col} className="grid gap-6">
            {colItems.map(({img, i}, indexInCol) => {
              const {width, height, ratio} = getImageConfig(col, i);

              return (
                <AnimatedImage
                  key={`${col}-${i}`}
                  alt={`Image ${col}-${i}`}
                  src={img}
                  ratio={ratio}
                  placeholder={`/yachts/placeholder-${width}x${height}.webp`}
                  shouldRender={
                    isSectionNearViewport && indexInCol < visibleItems
                  }
                  priority={i === 0}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedImage({alt, src, ratio, placeholder, shouldRender, priority}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [isLoading, setIsLoading] = useState(true);

  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-black/20 relative size-full rounded-lg border ">
      {shouldRender ? (
        <Image
          fill
          alt={alt}
          src={imgSrc}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          quality={70}
          className={cn(
            "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
            {
              "opacity-100": isInView && !isLoading,
            },
          )}
          onLoad={() => setIsLoading(false)}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={handleError}
        />
      ) : null}
    </AspectRatio>
  );
}
