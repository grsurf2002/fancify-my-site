import { CheckCircle, XCircle } from "lucide-react";

const idealFor = [
  "Feeling stuck with your progression, and not knowing what to work on.",
  "People that want to progress smarter while having fun.",
  "Intermediate surfers stuck on small improvements (turns, timing, confidence).",
  "Travellers who want effective coaching during a short trip to Ericeira.",
  "Adults returning to surfing after a break.",
  "Advanced surfers who want to take the next step.",
];

const notAFit = [
  "Large-group party lessons.",
  "Complete beginner playtime without structure.",
];

const WhoWeCoachSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ocean">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            For You?
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Who We <span className="text-gradient-golden">Coach</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Ideal For
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Not a Fit
            </h3>
            <ul className="space-y-4">
              {notAFit.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <XCircle className="text-destructive shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Our focus is progression and measurable improvement.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Contact Us — Find the Right Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeCoachSection;
