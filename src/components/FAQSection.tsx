import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the surf coaching last?",
    answer:
      "Each surf coaching session lasts between 2.5 to 3 hours, including warm-up, water time, and video analysis feedback. But if your question is how much time inside the water, it's around 1h30.",
  },
  {
    question:
      "How do you decide if you film or go in the water during coaching?",
    answer:
      "Group surf coaching is mainly filming with video analysis, but it will always depend on your level. Private surf coaching — we might have some sessions inside the water so we extract the most of the conditions and the session itself for your progression.",
  },
  {
    question: "How do you decide the surf spot, or is there a fixed one?",
    answer:
      "No, we don't have a fixed spot for the trainings. We choose the best spot each day based on swell, wind, tide, and your skill level. We operate mainly in Ericeira, Peniche, and Carcavelos — flexibility is key to finding the best waves for your session.",
  },
  {
    question: "Is there material included?",
    answer:
      "Material is not included but we charge just 10€ for board and wetsuit for the session (hardtop and softboard).",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container px-4 max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium mb-3 text-center">
          FAQ
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 uppercase text-center">
          Frequently Asked{" "}
          <span className="text-gradient-golden">Questions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <Accordion key={i} type="single" collapsible className="w-full">
              <AccordionItem
                value={`faq-${i}`}
                className="border border-border/50 rounded-lg px-5 bg-card"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
