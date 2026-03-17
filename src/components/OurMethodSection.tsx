import { ClipboardCheck, Dumbbell, Waves, MessageCircle, NotebookPen } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "Assessment & Goals",
    description: "Short on-land analysis and ocean observation set the session targets.",
  },
  {
    icon: Dumbbell,
    step: "2",
    title: "Drill-Based Training",
    description: "We segment sessions into skill blocks — paddling efficiency, pop-up mechanics, wave selection, stance and turning technique.",
  },
  {
    icon: Waves,
    step: "3",
    title: "In-Water Repetition",
    description: "Short, focused sets to build muscle memory and decision-making under pressure.",
  },
  {
    icon: MessageCircle,
    step: "4",
    title: "Feedback Loop",
    description: "Immediate verbal feedback + optional video analysis to speed corrections.",
  },
  {
    icon: NotebookPen,
    step: "5",
    title: "Home Practice Plan",
    description: "You leave with 3–5 clear actions to practice between sessions for real progress.",
  },
];

const OurMethodSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Our Method — <span className="text-gradient-teal">Structured, Measurable, Fast</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.step}
              className="text-center rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-primary">{s.step}</span>
              </div>
              <s.icon className="mx-auto text-primary mb-3" size={24} />
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Book a One-to-One Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurMethodSection;
