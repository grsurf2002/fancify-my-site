import missionImg from "@/assets/mission-surf.jpg";

const MissionSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={missionImg}
          alt="Surfer at sunset on Ericeira beach"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container px-4 text-center max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium mb-3">
          Our Mission
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
          Surfing Made <span className="text-gradient-golden">Accessible</span>
        </h2>
        <p className="text-lg leading-relaxed text-secondary-foreground">
          We have developed an accessible surfing program based on a positive and motivating environment.
          Each session focuses on helping you improve your technique in a progressive and conscious way:
          finding the best positioning in the line-up, learning essential paddling techniques,
          wave timing, and perfecting your maneuvers.
        </p>
        <p className="mt-4 text-lg font-medium text-accent">
          Accessible to all levels.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
