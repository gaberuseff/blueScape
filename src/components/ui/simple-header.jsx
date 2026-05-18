"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {MenuToggle} from "@/components/ui/menu-toggle";
import {Sheet, SheetContent, SheetTitle} from "@/components/ui/sheet";
import {Waves} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

export function SimpleHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Waves />
          <p className="font-mono text-lg font-bold">
            Blue <span className="text-cyan-700">Escape</span>
          </p>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className={buttonVariants({variant: "ghost"})}
              href={link.href}>
              {link.label}
            </Link>
          ))}
          {/* <Button variant="outline">Sign In</Button> */}
          <Button asChild>
            <Link href="/yachts">Book a yacht</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <Button size="icon" variant="outline" className="lg:hidden">
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={setOpen}
              className="size-6"
            />
          </Button>
          <SheetContent
            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
            showClose={false}
            side="left">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start",
                  })}
                  href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            {/* <SheetFooter>
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
