import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between surf lessons and surf coaching at Upgrade Surf Coaching?",
    answer: "Surf lessons Ericeira focus on safe, structured learning of fundamentals (pop-up, paddling, water safety) typically in small groups, while surf coaching Ericeira is progression-driven with individualised plans, targeted drills and measurable goals to accelerate skill development.",
  },
  {
    question: "Is Upgrade Surf Coaching a surf school in Ericeira or a private coaching service?",
    answer: "We operate as a performance-focused surf school Ericeira that offers both small-group lessons and private one-to-one surf coaching Ericeira, so you can choose a lesson format based on your goals and time available.",
  },
  {
    question: "Who are your surf lessons and coaching best suited for?",
    answer: "We coach motivated adults from beginner to intermediate level — complete beginners wanting a structured start, intermediates aiming to break plateaus, and travellers seeking rapid improvement during a short stay in Ericeira.",
  },
  {
    question: "How does progression work in your surf coaching programs?",
    answer: "Progression is structured around an initial assessment, clear short- and medium-term goals, drill-based sessions, in-water repetition and video analysis; we track milestones and adapt sessions as you improve.",
  },
  {
    question: "Why should I choose Ericeira for surf lessons and coaching?",
    answer: "Ericeira offers a unique mix of beach, point and reef breaks within short distances, providing ideal, varied conditions for staged progression and consistent learning opportunities year-round.",
  },
  {
    question: "When is the best time of year to book surf lessons in Ericeira?",
    answer: "For gentle progression sessions, late spring to early autumn offers milder conditions; autumn and winter provide more powerful swell for intermediate progression — we tailor sessions to match your level and the seasonal conditions.",
  },
  {
    question: "Where is the meet up point?",
    answer: "We meet at the beach — we decide the day before after reviewing conditions. If there is a need, we change the meeting point or do a pick-up.",
  },
  {
    question: "How do I book with Upgrade Surf Coaching?",
    answer: "Book via Gmail, Instagram or WhatsApp — check availability and arrange your sessions or packages.",
  },
  {
    question: "How long is a typical lesson or coaching session?",
    answer: "Around 90 minutes.",
  },
  {
    question: "What's included in a standard surf lesson or coaching session?",
    answer: "Sessions include coach-led instruction, equipment (board and wetsuit options), safety briefing, targeted drills, in-water coaching and a short take-home plan; video analysis is available as an add-on.",
  },
  {
    question: "Do you provide surfboards and wetsuits in Ericeira?",
    answer: "Yes — we supply a range of soft-top and performance boards plus wetsuits suitable for local water temperatures; for private coaching we can adjust equipment to match your progression goals.",
  },
  {
    question: "What should I bring to my surf lesson in Ericeira?",
    answer: "Bring a towel, swimwear, sunscreen rated for water sports, a water bottle, and any personal items; we recommend arriving 15 minutes early for check-in and preparation.",
  },
  {
    question: "What happens if weather or swell is bad on the day of my lesson?",
    answer: "We monitor local conditions and will reschedule or move to a safer, more suitable break if necessary; for severe conditions we offer refunds or alternative dates per our booking policy.",
  },
  {
    question: "How quickly will I see improvement with surf coaching Ericeira?",
    answer: "Most clients notice tangible improvements within 2–4 sessions when following the coach's drills and home practice plan; consistent repetition, focused feedback and video review accelerate results.",
  },
  {
    question: "Can beginners go from lessons to coaching programs?",
    answer: "Yes — our structured surf lessons Ericeira are designed to transition clients into ongoing surf coaching Ericeira or improvement programs as their skills and confidence grow.",
  },
  {
    question: "Are your coaches certified and experienced in Ericeira conditions?",
    answer: "Yes — our coaches are certified, have years of local experience in Ericeira and use a proven methodology combining ocean knowledge, biomechanics and surf-specific drills to deliver results.",
  },
  {
    question: "Do you offer video analysis for surfing in Ericeira?",
    answer: "Yes — video analysis is available as an add-on or part of progression packages; footage is reviewed in slow motion for clear technical feedback and targeted drills to implement in the next session.",
  },
  {
    question: "What are the group sizes for surf lessons and coaching?",
    answer: "Group lessons are small (max 6) to maintain quality; semi-private sessions are typically 2–3, and private coaching is 1:1 to maximise focused progress.",
  },
  {
    question: "How are surf trips and retreats different from regular coaching sessions?",
    answer: "Surf trips & retreats combine daily coached sessions, video review, and curated local spot selection over multiple days, providing concentrated repetition and environmental variety for faster skill gains while travelling.",
  },
  {
    question: "Who should join a surf trip or retreat with Upgrade Surf Coaching?",
    answer: "Our trips suit motivated surfers who want structured coaching while travelling — intermediates aiming to step up and adults who want efficient, coach-led progression in a short timeframe.",
  },
  {
    question: "Which destinations do you run surf trips to besides Ericeira?",
    answer: "We run Portugal-based micro-retreats centred on Ericeira and seasonal international trips to destinations like Morocco and the Canary Islands, chosen for consistent swell and coaching-friendly conditions.",
  },
  {
    question: "What level of experience is required for your Morocco or international trips?",
    answer: "Trip level requirements vary by itinerary; some Morocco trips suit intermediate surfers comfortable in longer, more powerful point waves, while Portugal retreats can accommodate a broader range of levels.",
  },
  {
    question: "Do you offer pick-up or transport to surf spots around Ericeira?",
    answer: "Yes — we offer local pickups from central Ericeira meeting points or partner accommodations when requested; pickup details are confirmed at booking and subject to availability.",
  },
  {
    question: "Can I book multiple sessions as a progression package in Ericeira?",
    answer: "Absolutely — we offer single sessions, 5- and 10-session progression packages and tailored improvement programs with tracking and optional video analysis to ensure measurable progress.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
          {faqs.map((faq, i) => (
            <Accordion key={i} type="single" collapsible className="w-full h-full">
              <AccordionItem
                value={`faq-${i}`}
                className="border border-border/50 rounded-lg px-5 bg-card h-full flex flex-col"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline min-h-[72px] items-center">
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
