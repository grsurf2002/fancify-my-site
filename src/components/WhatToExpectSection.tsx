import coachingImg from "@/assets/coaching-2.jpeg";

const WhatToExpectSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            What to Expect
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Surf Coaching{" "}
            <span className="text-gradient-teal">Ericeira</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Left - Content */}
          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                The First Session
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We assess your current surfing: ocean awareness, pop-up mechanics, board control and goal setting. On land we teach key drills; in water we focus on targeted reps. You leave knowing exactly what to practice.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Ongoing Coaching
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow-up sessions use progressive drills, wave selection coaching and real-time corrections. We track your progress and adapt sessions to keep you moving forward.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Local Conditions We Use to Accelerate Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ericeira offers varied breaks — sandy beach breaks for safe repetition, reef and point breaks for advanced timing and maneuvers. But we also take sessions up to Peniche or Lisbon area. We leverage the right spot for your stage.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
            >
              Book Now — Surf Lessons Ericeira
            </a>
          </div>

          {/* Right - Image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={coachingImg}
                alt="On-beach surf coaching session in Ericeira"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
