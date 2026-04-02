import coachingImg from "@/assets/coaching-2.jpeg";

const WhatToExpectSection = () => {
  return (
    <section
      className="py-24 md:py-32 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${coachingImg})` }}
    >
      <div className="absolute inset-0 bg-background/85" />
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            What to Expect
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Surf Coaching{" "}
            <span className="text-gradient-teal">in Ericeira</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              The First Session
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We assess your current surfing: ocean awareness, pop-up mechanics, board control, and goals. On land, we teach key drills; in the water, we focus on targeted repetition. You leave knowing exactly what to practice.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Ongoing Coaching
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Follow-up sessions use progressive drills, wave selection guidance, and real-time corrections. We track your progress and adapt each session to keep you moving forward.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Local Conditions We Use to Accelerate Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ericeira offers varied breaks: sandy beach breaks for safe repetition, and reef and point breaks for advanced timing and maneuvers. We also run sessions in Peniche and the Lisbon area, using the right conditions for your level.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Book Surf Coaching
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
