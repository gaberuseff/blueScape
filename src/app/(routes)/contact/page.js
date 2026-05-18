import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YoutubeIcon } from "@/lib/utils";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    PhoneCall,
    Send,
    Sparkles,
} from "lucide-react";

export const metadata = {
    title: "Contact | Blue Escape",
    description: "Reach Blue Escape by phone, email, or social media.",
};

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/",
        icon: InstagramIcon,
    },
    {
        label: "Facebook",
        href: "https://facebook.com/",
        icon: FacebookIcon,
    },
    {
        label: "YouTube",
        href: "https://youtube.com/",
        icon: YoutubeIcon,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/13055550198",
        icon: WhatsAppIcon,
    },
];

function ContactPage() {
    return (
        <section className="py-14 md:py-20">
            <MaxWidthWrapper size="xl">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700/90">
                        <Sparkles className="h-4 w-4" />
                        Contact Blue Escape
                    </p>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
                        Contact our team
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                        Got questions about your next charter? Our team is here to help you plan
                        quickly and comfortably.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <Card className="border-border/70 bg-card shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                                    Send us a message
                                </CardTitle>
                                <CardDescription className="max-w-2xl text-sm leading-6">
                                    Fill in your details and we will get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name</Label>
                                            <Input id="firstName" name="firstName" placeholder="First name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input id="lastName" name="lastName" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" placeholder="you@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Leave us a message..."
                                            className="min-h-40 w-full resize-y rounded-3xl border border-transparent bg-input/50 px-3 py-2 text-sm text-foreground outline-none transition-[color,box-shadow,background-color] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full sm:w-auto">
                                        Send message
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="space-y-6">
                            <Card className="border-border/70 bg-card shadow-sm">
                                <CardContent className="space-y-6 pt-6">
                                    <div className="space-y-2">
                                        <h3 className="text-base font-semibold text-foreground">Call us</h3>
                                        <p className="text-sm text-muted-foreground">Mon - Fri from 8am to 5pm</p>
                                        <a
                                            href="tel:+13055550198"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-700"
                                        >
                                            <PhoneCall className="h-4 w-4" />
                                            +1 (305) 555-0198
                                        </a>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-base font-semibold text-foreground">Email us</h3>
                                        <a
                                            href="mailto:hello@blueescape.com"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-700"
                                        >
                                            <Mail className="h-4 w-4" />
                                            hello@blueescape.com
                                        </a>
                                    </div>

                                    <div id="location" className="space-y-2">
                                        <h3 className="text-base font-semibold text-foreground">Visit us</h3>
                                        <p className="inline-flex items-start gap-2 text-sm text-foreground">
                                            <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                                            Marsa matrouh, Egypt
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border/70 bg-card shadow-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                                        Chat with us
                                    </CardTitle>
                                    <CardDescription className="text-sm leading-6">
                                        Speak to our friendly team via live chat or social channels.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 transition duration-300 hover:border-cyan-200/70 hover:bg-cyan-50/40"
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100/80">
                                                        <Icon className="h-5 w-5" />
                                                    </span>
                                                    <span className="text-sm font-medium text-foreground">{social.label}</span>
                                                </span>
                                                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-700" />
                                            </a>
                                        );
                                    })}
                                </CardContent>
                            </Card>


                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default ContactPage;
