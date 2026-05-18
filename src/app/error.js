'use client'

import Link from "next/link"
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

function Error({ error, reset }) {
    const message = error?.message ?? "An unexpected issue interrupted the journey."

    return (
        <main className="flex min-h-[calc(100vh-3.5rem-1px)] items-center justify-center px-4 py-16">
            <div className="w-full max-w-2xl">
                <div className="mb-5 flex items-center gap-3 text-red-500">
                    <AlertTriangle className="size-6" />
                    <span className="text-sm uppercase tracking-[0.45em] text-foreground/60">
                        Error
                    </span>
                </div>

                <p className="mb-5 text-xs uppercase tracking-[0.6em] text-muted-foreground">
                    System error
                </p>

                <h1 className="max-w-xl text-4xl font-semibold tracking-tight md:text-6xl leading-tight!">
                    Something <span className="bg-red-500 text-white p-2 inline-block">interrupted</span> the voyage.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    The page ran into a problem, but you can try again or go back to a
                    safe route.
                </p>

                <div className="mt-6 h-px w-24 bg-foreground/15" />

                <p className="mt-6 max-w-2xl wrap-break-word text-sm leading-7 text-foreground/70">
                    {message}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button onClick={reset} variant="outline">
                        <RefreshCw className="size-4" />
                        Try again
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/">
                            <Home className="size-4" />
                            Go home
                        </Link>
                    </Button>

                    <Button asChild variant="ghost">
                        <Link href="/yachts">
                            <ArrowLeft className="size-4" />
                            Back to yachts
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default Error