import heroImg from "@/assets/hero-surf.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Surf coaching session at Ribeira d'Ilhas, Ericeira"
          className="w-full h-full object-cover object-[center_40%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Hidden SEO text */}
      <p className="sr-only">Progress Focused Surf Coaching in Ericeira</p>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 pt-20 sm:pt-0">
        <h1
          className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-[0.9] tracking-tight text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          SURF COACHING
          <br className="sm:hidden" />
          {" "}IN ERICEIRA
          <span className="text-gradient-teal text-lg sm:text-2xl md:text-3xl lg:text-4xl block mt-3 sm:mt-6">
            IMPROVE FASTER, SURF SMARTER
          </span>
        </h1>


        {/* Quick bullets */}
        <div
          className="mt-16 sm:mt-24 flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-primary font-medium opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span>Tailored progression plans</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span>Video feedback</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span>Local wave knowledge</span>
        </div>

        {/* CTAs */}
        <div
          className="mt-4 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-xs sm:text-sm hover:shadow-glow transition-all duration-300"
          >
            Book a Lesson
          </a>
          <a
            href="mailto:upgradesurfing@gmail.com?subject=Free%20Assessment"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-foreground/30 text-foreground font-semibold tracking-wider uppercase text-xs sm:text-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get a Free Assessment
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
