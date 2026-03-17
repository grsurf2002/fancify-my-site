import { User, Users, UsersRound, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sessionTypes = [
  {
    icon: User,
    title: "Private Coaching (1:1)",
    description: "Focused, fast progress. Ideal for targeted skill work.",
    cta: "Book Private",
    link: "#contact",
  },
  {
    icon: Users,
    title: "Semi-Private (2–3 people)",
    description: "Share coaching and costs with like-minded surfers.",
    cta: "Enquire",
    link: "#contact",
  },
  {
    icon: UsersRound,
    title: "Small Group Lessons (max 6)",
    description: "Progression with attention in a small group setting.",
    cta: "Book Group",
    link: "#contact",
  },
  {
    icon: Video,
    title: "Video Analysis Add-on",
    description: "Slow-motion reviews and personalised session plans.",
    cta: "Add Video Analysis",
    link: "#contact",
  },
];

const SessionTypesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium mb-3">
            Options
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Session <span className="text-gradient-teal">Types</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sessionTypes.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <s.icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-auto">
                {s.description}
              </p>
              <a
                href={s.link}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline transition-colors"
              >
                {s.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Surf Trips teaser */}
        <div className="mt-16 max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-8">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
            Surf Trips & Retreats
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We run performance-focused surf trips and retreats designed for surfers who want structure and progression while traveling. Portugal micro-retreats built around Ericeira conditions; seasonal international trips (Morocco, Canaries) for consistent swell and coach-led sessions.
          </p>
          <Link
            to="/surf-trips"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary text-primary font-semibold tracking-wider uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Surf Trips <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SessionTypesSection;
