"use client";

import {addDays, format, isBefore, startOfDay} from "date-fns";
import {MapPin} from "lucide-react";
import {useState} from "react";

import {createYachtBooking} from "@/_lib/actions";
import SubmitButton from "@/components/SubmitButton";
import {Calendar} from "@/components/ui/calendar";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {formatPrice} from "@/lib/helpers";

function YachtBookingSection({yacht}) {
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState(addDays(today, 3));
  const [guests, setGuests] = useState(Math.min(2, yacht.guests));
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    notes: "",
  });

  const total = yacht.pricePerDay * guests;

  const bookingData = {
    yacht_id: yacht.id,
    yacht_slug: yacht.slug,
    yacht_name: yacht.name,
    location: yacht.location,
    booking_date: selectedDate ? selectedDate.toISOString() : null,
    price_per_person: yacht.pricePerDay,
    final_price: total,
    num_guests: guests,
  };

  const createBookingWithData = createYachtBooking.bind(null, bookingData);

  const dateSummary = selectedDate
    ? format(selectedDate, "MMM d, yyyy")
    : "Please select your booking date";

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="space-y-2 text-center">
        <p
          className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 
            py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/65">
          <MapPin className="size-3.5" />
          {yacht.location}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Reserve {yacht.name} today, pay on arrival
        </h2>
      </div>

      <Card className="overflow-hidden rounded-3xl border border-border/70 bg-card py-0 shadow-none">
        <div className="flex flex-wrap items-end justify-between gap-3 bg-muted px-5 py-3 text-foreground md:px-6">
          <p className="text-xl font-semibold">
            {formatPrice(total)}
            <span className="ml-1 text-sm font-normal text-foreground/65">
              total
            </span>
          </p>
          <p className="text-sm text-foreground/65">{dateSummary}</p>
        </div>

        {/* <CardHeader className="border-b border-border/70 px-5 py-3 md:px-6">
          <CardTitle className="flex items-center justify-between text-sm font-medium text-foreground/80">
            <span>Logged in as</span>
            <span className="inline-flex items-center gap-2 text-foreground">
              <UserCircle2 className="size-5" />
              Guest
            </span>
          </CardTitle>
        </CardHeader> */}

        <CardContent className="px-5 py-5 md:px-6">
          <form
            action={createBookingWithData}
            className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="order-2 space-y-5 lg:order-1">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="guest_name">Full name</Label>
                  <Input
                    id="guest_name"
                    name="guest_name"
                    placeholder="Gaber Usef"
                    value={formValues.fullName}
                    onChange={(event) =>
                      setFormValues((current) => ({
                        ...current,
                        fullName: event.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guest-email">Email</Label>
                  <Input
                    id="guest-email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    value={formValues.email}
                    onChange={(event) =>
                      setFormValues((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guest-count">How many guests?</Label>
                <Select
                  name="guests"
                  value={String(guests)}
                  onValueChange={(value) => setGuests(Number(value))}>
                  <SelectTrigger
                    id="guest-count"
                    className="h-10 w-full rounded-3xl border border-border bg-input/40 px-3 text-sm text-foreground outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(
                      {length: yacht.guests},
                      (_, index) => index + 1,
                    ).map((count) => (
                      <SelectItem key={count} value={String(count)}>
                        {count} {count === 1 ? "guest" : "guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guest-notes">
                  Anything we should know about your stay?
                </Label>
                <Textarea
                  id="guest-notes"
                  name="notes"
                  placeholder="Any preferences, dietary notes, celebration details, or special requests..."
                  rows={4}
                  value={formValues.notes}
                  className="sm:placeholder:text-sm placeholder:text-xs"
                  onChange={(event) =>
                    setFormValues((current) => ({
                      ...current,
                      notes: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
                <p className="text-sm text-muted-foreground">
                  {selectedDate
                    ? `Your booking date is ${format(selectedDate, "MMMM d, yyyy")}.`
                    : "Pick your booking date to complete your reservation."}
                </p>
                <SubmitButton
                  disabled={!selectedDate}
                  pendingText="Please Wait...">
                  Confirm Booking
                </SubmitButton>
              </div>
            </div>

            <div className="order-1 rounded-2xl border border-border/70 bg-secondary p-2 lg:order-2">
              <Calendar
                mode="single"
                numberOfMonths={1}
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={selectedDate || today}
                disabled={(date) => isBefore(date, today)}
                className="mx-auto"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default YachtBookingSection;
