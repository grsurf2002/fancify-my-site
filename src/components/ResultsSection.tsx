import { TrendingUp, RotateCcw, Eye, BarChart3 } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Faster take-offs & better wave selection",
    description: "Gain confidence in more conditions.",
  },
  {
    icon: RotateCcw,
    title: "Cleaner turns & speed generation",
    description: "Surf smarter with more technique and applying more powerful turns.",
  },
  {
    icon: Eye,
    title: "Better ocean awareness",
    description: "Read sets, currents and wind to be in the right place.",
  },
  {
    icon: BarChart3,
    title: "Structured progression",
    description: "Milestones you can measure each session.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ocean">
      <div className="container px-4">
        <div className="text-center mb-16">


          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Real Progress, <span className="text-gradient-golden">Real Outcomes</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="text-center rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              <o.icon className="mx-auto text-accent mb-4" size={32} />
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {o.title}
              </h3>
              <p className="text-sm text-muted-foreground">{o.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
