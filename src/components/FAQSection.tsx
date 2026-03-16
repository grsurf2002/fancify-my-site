import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the training last?",
    answer:
      "Each surf coaching session lasts between 2.5 to 3 hours, including warm-up, water time, and video analysis feedback.",
  },
  {
    question:
      "How do you decide if you film or go in the water during coaching?",
    answer:
      "It depends on your level and goals. For intermediate and advanced surfers, filming from the outside allows detailed video analysis. For beginners, we go in the water with you to provide real-time guidance and safety.",
  },
  {
    question: "How do you decide the surf spot, or is there a fixed one?",
    answer:
      "We choose the best spot each day based on swell, wind, tide, and your skill level. We operate mainly in Ericeira, Peniche, and Carcavelos — flexibility is key to finding the best waves for your session.",
  },
  {
    question: "Is there material included?",
    answer:
      "Surf equipment is not included by default, but we can help arrange board and wetsuit rental at partner shops with special rates. Just let us know when booking!",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container px-4 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium mb-3 text-center">
          FAQ
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 uppercase text-center">
          Frequently Asked{" "}
          <span className="text-gradient-golden">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
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
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
