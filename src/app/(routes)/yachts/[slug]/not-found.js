import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";

function NotFound() {
    return (
        <section className="py-20 md:py-28">
            <MaxWidthWrapper>
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-muted text-foreground/80">
                        <AlertTriangle className="size-7" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-medium tracking-widest text-foreground/55 uppercase">Error 404</p>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        This yacht is not available
                    </h1>
                    <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                        The yacht you are looking for may have been removed or is no longer open for reservation.
                        You can explore other available options from our fleet.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                        <Button asChild className="px-5">
                            <Link href="/yachts">
                                <Compass className="mr-2 size-4" data-icon="inline-start" />
                                Explore Yachts
                            </Link>
                        </Button>

                        <Button asChild variant="outline" className="px-5">
                            <Link href="/">
                                <ArrowLeft className="mr-2 size-4" data-icon="inline-start" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default NotFound;
