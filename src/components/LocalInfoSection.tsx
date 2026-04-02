import { MapPin, Sun, Car } from "lucide-react";
import ericeiraBg from "@/assets/ericeira-coast.png";

const LocalInfoSection = () => {
  return (
    <section
      className="py-24 md:py-32 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${ericeiraBg})` }}
    >
      <div className="absolute inset-0 bg-background/70" />
      <div className="container px-4 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Location
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase">
            Based in <span className="text-gradient-golden">Ericeira</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Surf coaching in Ericeira · Surf lessons in Ericeira
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <MapPin className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Meeting Points
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Ericeira</strong> — World Surf Reserve with consistent waves for all levels, with point breaks and beach breaks.<br /><br />
              <strong>Peniche</strong> — Powerful swells and world-class beach breaks.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <Sun className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Best Time to Visit
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Autumn and winter offer more powerful waves, with the flexibility to drive and find easier conditions when needed.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <Car className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Directions & Parking
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free parking is available at most surf spots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalInfoSection;
