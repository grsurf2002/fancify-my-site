import heroImg from "@/assets/hero-surf.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Surfer riding a massive wave in Ericeira"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p
          className="text-sm md:text-base tracking-[0.4em] uppercase text-primary font-medium mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Ericeira, Portugal
        </p>
        <h1
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          UPGRADE
          <br />
          <span className="text-gradient-teal">YOUR SURF</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Personalized coaching to unlock your full potential in the water
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Explore Services
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
