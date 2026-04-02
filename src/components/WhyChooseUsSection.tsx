import { Target, MapPin, Zap, Users, ShieldCheck, Baby } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Performance-first coaching",
    description:
      "We structure sessions around clear progression goals - not just \"having fun.\"",
  },
  {
    icon: MapPin,
    title: "Local surf coaches",
    description:
      "Based in Ericeira, with sessions also in Peniche and the Lisbon area. We know the tides, wind windows, and the best spots for each level.",
  },
  {
    icon: Zap,
    title: "Proven method",
    description:
      "Movement fundamentals + surf-specific drills + in-water guidance + video analysis.",
  },
  {
    icon: Users,
    title: "Adult-focused coaching",
    description:
      "Coaching designed for busy adults - efficient sessions that accelerate improvement.",
  },
  {
    icon: Baby,
    title: "Kids 8+",
    description:
      "Coaching for kids who want to progress, build confidence, and enjoy surfing — whether for fun or future competition.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & equipment",
    description:
      "Modern soft-top and performance boards, quality wetsuits, and certified surf coaching standards.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ocean">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Why Train{" "}
            <span className="text-gradient-golden">With Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <reason.icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Book a Surf Coaching Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
