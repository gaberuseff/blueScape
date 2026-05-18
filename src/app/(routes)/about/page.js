import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Anchor, Users, Globe, Star } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

function page() {
    const stats = [
        { number: "500+", label: "Yacht Adventures" },
        { number: "50k+", label: "Happy Travelers" },
        { number: "15+", label: "Years Experience" },
        { number: "4.9★", label: "Average Rating" },
    ];

    const values = [
        {
            icon: Anchor,
            title: "Premium Fleet",
            description: "Carefully curated luxury yachts for unforgettable maritime experiences",
        },
        {
            icon: Users,
            title: "Expert Crew",
            description: "Professional captains and staff dedicated to your comfort and safety",
        },
        {
            icon: Globe,
            title: "Global Destinations",
            description: "Explore the world's most beautiful coastlines and hidden gems",
        },
        {
            icon: Star,
            title: "Seamless Booking",
            description: "Intuitive platform for hassle-free yacht reservations and planning",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="relative isolate overflow-hidden min-h-[82vh]">
                    <Image
                        src="/yachts/yacht-1.webp"
                        alt="Blue Escape - About Us"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,23,39,0.25)_0%,rgba(8,23,39,0.4)_40%,rgba(8,23,39,0.62)_100%)]" />

                    <div className="relative z-10 flex min-h-[70vh] md:min-h-[82vh] items-center justify-center px-6 text-center">
                        <div className="hero-reveal max-w-2xl text-white">
                            <p className="mb-3 text-sm tracking-[0.45em] uppercase text-white/80 md:text-base">
                                Our Story
                            </p>
                            <h1 className="text-5xl font-semibold leading-[0.88] tracking-tight uppercase md:text-7xl">
                                About
                                <br />
                                Blue Escape
                            </h1>
                            <p className="mx-auto mt-5 max-w-md text-sm text-white/90 md:text-base">
                                Crafting unforgettable maritime journeys since 2009
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-14 md:py-32">
                <MaxWidthWrapper>
                    <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                        <div className="relative h-96 md:h-full min-h-96 rounded-3xl overflow-hidden">
                            <Image
                                src="/yachts/yacht-2.webp"
                                alt="Blue Escape Fleet"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="inline-flex items-center rounded-md border border-border/80 bg-background px-3 py-1 text-xs font-medium uppercase text-muted-foreground">
                                    Our Journey
                                </span>
                                <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                                    Pioneering Luxury Marine Travel
                                </h2>
                            </div>

                            <p className="text-base leading-7 text-muted-foreground">
                                Founded in 2009, Blue Escape emerged from a passion for the sea and a vision to democratize luxury yacht experiences. What started as a small charter service has grown into a premier platform connecting travelers with the world's finest maritime adventures.
                            </p>

                            <p className="text-base leading-7 text-muted-foreground">
                                We believe that the ocean holds transformative power. Every voyage with us is meticulously planned to ensure not just comfort, but genuine connection with the sea and the people who share your journey.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <Button asChild>
                                    <Link href="/yachts">
                                        Explore Our Fleet
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Stats Section */}
            <section className="section_secondary py-14 md:py-32">
                <MaxWidthWrapper>
                    <div className="mb-16">
                        <h2 className="section_heading">By The Numbers</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Values Section */}
            <section className="py-14 md:py-32">
                <MaxWidthWrapper>
                    <div className="mb-12">
                        <span className="inline-flex items-center rounded-md border border-border/80 bg-background px-3 py-1 text-xs font-medium uppercase text-muted-foreground">
                            Why Choose Us
                        </span>
                        <h2 className="section_heading mt-4">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-border/50 bg-card p-8 hover:border-border/80 transition-all duration-300">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* CTA Section */}
            <section className="py-14 md:py-32">
                <MaxWidthWrapper size="xl">
                    <div className="relative isolate overflow-hidden rounded-3xl">
                        <Image
                            src="/yachts/yacht-3.webp"
                            alt="Ready for adventure"
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,28,0.78)_0%,rgba(7,18,28,0.55)_42%,rgba(9,28,39,0.28)_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)]" />

                        <div className="relative z-10 flex min-h-136 items-center justify-center px-6 py-14 md:px-12">
                            <div className="max-w-4xl text-center text-white">
                                <p className="mb-4 text-sm tracking-[0.35em] uppercase text-white/80">
                                    Ready for Adventure
                                </p>

                                <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1] tracking-tight md:text-5xl lg:text-6xl">
                                    Start your yacht journey
                                    <br />
                                    with us today.
                                </h2>

                                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                                    Join thousands of travelers who've discovered the magic of the open sea. Let us help you plan the perfect maritime escape.
                                </p>

                                <div className="mt-10 flex items-center justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-white/90 text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                        <Link href="/yachts">
                                            Explore Yachts
                                            <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}

export default page;
