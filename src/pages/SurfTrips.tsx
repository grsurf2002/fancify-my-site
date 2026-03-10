import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar } from "lucide-react";

const trips = [
  {
    destination: "Maldivas",
    dates: "6 — 16 de Maio 2026",
    emoji: "🏝️",
  },
  {
    destination: "Maldivas",
    dates: "16 — 26 de Maio 2026",
    emoji: "🏝️",
  },
  {
    destination: "Algarve",
    dates: "16 — 19 de Outubro 2026",
    emoji: "🇵🇹",
  },
  {
    destination: "Algarve",
    dates: "12 — 15 de Novembro 2026",
    emoji: "🇵🇹",
  },
  {
    destination: "Algarve",
    dates: "17 — 20 de Dezembro 2026",
    emoji: "🇵🇹",
  },
];

const comingSoon = [
  {
    destination: "Marrocos",
    dates: "Fevereiro 2027",
    emoji: "🇲🇦",
  },
  {
    destination: "Algarve",
    dates: "Fevereiro 2027",
    emoji: "🇵🇹",
  },
  {
    destination: "Maldivas",
    dates: "Maio 2027",
    emoji: "🏝️",
  },
];

const SurfTrips = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-wider text-foreground uppercase text-center">
            Upgrade Surf Trips
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Junta-te a nós e vive experiências de surf inesquecíveis nos melhores destinos.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="text-4xl mb-4 block">{trip.emoji}</span>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
                    {trip.destination}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="font-body text-sm">{trip.dates}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SurfTrips;
