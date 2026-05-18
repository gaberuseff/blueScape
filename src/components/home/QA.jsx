import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is fuel included in the price?",
    answer:
      "It depends on the yacht and route. Some trips include fuel, while others charge based on actual consumption. You will always see this clearly before confirming your booking.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Free cancellation is available within the grace period listed on each trip. After that window, partial fees may apply depending on timing and booking type.",
  },
  {
    question: "Are children allowed on board?",
    answer:
      "Yes. Most yachts are family-friendly, and life jackets are available in different sizes. We recommend adding child ages in your booking notes so the crew can prepare in advance.",
  },
  {
    question: "Can I change the time or route after booking?",
    answer:
      "Yes, changes are possible based on availability and weather conditions. Contact support as early as possible and we will help you with the best available option.",
  },
  {
    question: "Can I bring my own food and drinks?",
    answer:
      "In most cases, yes. You can also request catering packages. Some yachts may have simple rules to keep the vessel clean and safe.",
  },
  {
    question: "What happens if weather conditions are not safe?",
    answer:
      "Your safety comes first. If sea conditions are unsuitable, we will coordinate a reschedule or refund according to the trip policy.",
  },
];

function QA() {
  return (
    <section className="section_secondary py-14 md:py-32">
      <MaxWidthWrapper>
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center rounded-md border border-border/80 bg-background px-3 py-1 text-xs font-medium uppercase text-muted-foreground">
            QA
          </span>
          <h2 className="section_heading">Frequently Asked Questions</h2>
          <p className="section_subheading">
            Quick answers to the most common questions before booking your
            yacht.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-8 border-t border-border/70">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index + 1}`}
              className="border-border/70 py-1">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pr-1 text-sm leading-7 text-muted-foreground md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
}

export default QA;
