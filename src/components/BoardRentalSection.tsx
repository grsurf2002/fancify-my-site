import { ExternalLink, Instagram } from "lucide-react";
import boardcultureBg from "@/assets/boardculture-store.png";

const BoardRentalSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-cover bg-center" style={{ backgroundImage: `url(${boardcultureBg})` }}>
      <div className="absolute inset-0 bg-background/60" />
      <div className="container px-4 max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
          Equipment
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase">
          Do You Need a <span className="text-gradient-golden">Board</span>?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          We work with <span className="text-foreground font-semibold">Boardculture Store</span> and
          they have you covered — from softboards and hardtops to high-performance boards.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://surfboardrentalericeira.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={16} />
            Visit Website
          </a>
          <a
            href="https://instagram.com/boardculturesurf_rentals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
          >
            <Instagram size={16} />
            @boardculturesurf_rentals
          </a>
        </div>
      </div>
    </section>
  );
};

export default BoardRentalSection;
