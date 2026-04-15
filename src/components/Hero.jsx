import Image from "next/image";
import {Button} from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="m-6">
      <div className="relative isolate overflow-hidden rounded-3xl min-h-[82vh]">
        <Image
          src="/images/yacht-1.webp"
          alt="Luxury yacht on the sea"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,23,39,0.25)_0%,rgba(8,23,39,0.4)_40%,rgba(8,23,39,0.62)_100%)]" />

        <div className="relative z-10 flex min-h-[70vh] md:min-h-[82vh] items-center justify-center px-6 text-center">
          <div className="hero-reveal max-w-2xl text-white">
            <p className="mb-3 text-sm tracking-[0.45em] uppercase text-white/80 md:text-base">
              Blue Escape
            </p>
            <h1 className="text-5xl font-semibold leading-[0.88] tracking-tight uppercase md:text-7xl">
              Armonia
              <br />
              Excursions
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm text-white/90 md:text-base">
              Tour agents you can rely on.
            </p>
            <Button
              asChild
              className="mt-8 px-6 text-sm md:px-8 md:text-base 
              uppercase bg-transparent border-2 border-white text-white hover:bg-white/10">
              <Link href="/yachts">Explore Yachts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
