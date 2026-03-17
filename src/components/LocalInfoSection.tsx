import { MapPin, Sun, Car } from "lucide-react";

const LocalInfoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ocean">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Location
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase">
            Based in <span className="text-gradient-golden">Ericeira</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Surf lessons Ericeira · Surf coaching Ericeira
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <MapPin className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Meeting Points
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ericeira, Lisbon area and Peniche.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <Sun className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Best Time to Visit
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Autumn and winter for more powerful waves, but always with the option to drive and find easy waves.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card p-6">
            <Car className="text-primary mb-4" size={24} />
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Directions & Parking
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free parking available at most surf spots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalInfoSection;
