"use client";
import React from "react";
import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

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

export function ImageGallery() {
  const sectionRef = React.useRef(null);
  const isSectionNearViewport = useInView(sectionRef, {
    once: true,
    margin: "450px 0px",
  });
  const [visibleItems, setVisibleItems] = React.useState(INITIAL_VISIBLE_ITEMS);

  React.useEffect(() => {
    if (!isSectionNearViewport) return;

    const timer = window.setInterval(() => {
      setVisibleItems((prev) => {
        if (prev >= ITEMS_PER_COLUMN) {
          window.clearInterval(timer);
          return prev;
        }

        return Math.min(prev + INCREMENT_VISIBLE_ITEMS, ITEMS_PER_COLUMN);
      });
    }, INCREMENT_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [isSectionNearViewport]);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
        {Array.from({length: 3}).map((_, col) => (
          <div key={col} className="grid gap-6">
            {Array.from({length: ITEMS_PER_COLUMN}).map((_, index) => {
              const {width, height, ratio} = getImageConfig(col, index);

              return (
                <AnimatedImage
                  key={`${col}-${index}`}
                  alt={`Image ${col}-${index}`}
                  src={`https://picsum.photos/seed/${col}-${index}/${width}/${height}`}
                  ratio={ratio}
                  placeholder={`https://placehold.co/${width}x${height}/`}
                  shouldRender={isSectionNearViewport && index < visibleItems}
                  priority={index === 0}
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, {once: true});
  const [isLoading, setIsLoading] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(src);

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
