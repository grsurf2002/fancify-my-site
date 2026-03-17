import missionImg from "@/assets/mission-surf.jpg";

const FinalCTASection = () => {
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
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase">
          Ready to <span className="text-gradient-golden">Surf Better?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Book a lesson, reserve a coaching package, or get a free assessment call. Limited spots per day to ensure quality coaching.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Book a Lesson
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-semibold tracking-wider uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
