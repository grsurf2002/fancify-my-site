import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useState } from "react";

interface ScheduleDay {
  day: string;
  items: string[];
}

interface Trip {
  destination: string;
  dates: string;
  details?: {
    tagline: string;
    location?: string;
    price: string;
    duration: string;
    included: string[];
    schedule?: ScheduleDay[];
    reservation?: string;
  };
}

const algarveDetails = {
  tagline: "Waves, Progress & Unforgettable Moments",
  price: "€380 (shared room) / €420 (private room)",
  duration: "3 nights, 4 days of surf. Max 6 people.",
  reservation: "150€ deposit to secure your spot",
  included: [
    "🏠 3 nights accommodation",
    "🚐 Transport during the trip",
    "🥐 Daily breakfast",
    "🏄‍♂️ 6 surf coaching sessions",
    "🎥 3 video analysis sessions (reviewed at home)",
    "😄 Lots of fun & good vibes",
  ],
  schedule: [
    { day: "Thursday", items: ["17:00 – Meet-up", "Arrival in the Algarve around 20:00", "Dinner & settle into the house"] },
    { day: "Friday", items: ["🏄‍♂️ Minimum 2 surf coaching sessions", "🎥 Video analysis in the evening"] },
    { day: "Saturday", items: ["🏄‍♂️ Minimum 2 surf coaching sessions", "🎥 Video analysis in the evening"] },
    { day: "Sunday", items: ["🏄‍♂️ 2 surf coaching sessions", "🚐 Head back home around 15:00 (±)"] },
  ],
};

const trips: Trip[] = [
  {
    destination: "Maldivas",
    dates: "6 — 16 de Maio 2026",
    details: {
      tagline: "Surf – Learn – Evolve – Repeat",
      location:
        "Stay right in front of the world-class Jailbreaks wave, with easy access to nearby breaks Sultans, Cokes, and Chickens — perfect for every level of surfer looking to push their limits.",
      price: "1400 € (double room) / 1950 € (private room) + flight",
      duration: "9 full days of surf. Plenty of time to surf, learn, and unwind in paradise. Max 8 people.",
      included: [
        "18 Surf Coaching Sessions with personalized video analysis",
        "2 surf transfers per day to the best spots for the conditions",
        "Daily surf theory and feedback sessions",
        "Double room accommodation",
        "3 healthy meals per day (breakfast, lunch & dinner)",
        "Access to multiple surf breaks right at your doorstep",
      ],
    },
  },
  {
    destination: "Maldivas",
    dates: "16 — 26 de Maio 2026",
    details: {
      tagline: "Surf – Learn – Evolve – Repeat",
      location:
        "Stay right in front of the world-class Jailbreaks wave, with easy access to nearby breaks Sultans, Cokes, and Chickens — perfect for every level of surfer looking to push their limits.",
      price: "1600 € (double room) / 2150 € (private room) + flight",
      duration: "9 full days of surf. Plenty of time to surf, learn, and unwind in paradise. Max 4 people.",
      included: [
        "18 Surf Coaching Sessions with personalized video analysis",
        "2 surf transfers per day to the best spots for the conditions",
        "Daily surf theory and feedback sessions",
        "Double room accommodation",
        "3 healthy meals per day (breakfast, lunch & dinner)",
        "Access to multiple surf breaks right at your doorstep",
      ],
    },
  },
  {
    destination: "Algarve",
    dates: "16 — 19 de Outubro 2026",
    details: algarveDetails,
  },
  {
    destination: "Algarve",
    dates: "12 — 15 de Novembro 2026",
    details: algarveDetails,
  },
  {
    destination: "Algarve",
    dates: "17 — 20 de Dezembro 2026",
    details: algarveDetails,
  },
];

const comingSoon: Trip[] = [
  { destination: "Marrocos", dates: "Fevereiro 2027" },
  { destination: "Algarve", dates: "Fevereiro 2027" },
  { destination: "Maldivas", dates: "Maio 2027" },
];

const TripCard = ({ trip }: { trip: Trip }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = !!trip.details;

  return (
    <div
      className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] ${hasDetails ? "cursor-pointer" : ""} ${hasDetails && !expanded ? "md:col-span-1" : ""} ${expanded ? "md:col-span-2 lg:col-span-3" : ""}`}
      onClick={() => hasDetails && setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <div>
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
        {hasDetails && (
          <div className="text-primary">
            {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        )}
      </div>

      {expanded && trip.details && (
        <div className="mt-6 border-t border-border pt-6 space-y-6">
          <p className="font-heading text-lg text-primary tracking-wider uppercase">
            {trip.details.tagline}
          </p>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
              📍 Location
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {trip.details.location}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                💸 Price
              </h4>
              <p className="text-lg font-bold text-primary">{trip.details.price}</p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                🗓️ Duration
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trip.details.duration}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-3">
              🏄‍♂️ What's Included
            </h4>
            <ul className="space-y-2">
              {trip.details.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

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
            Join us and live unforgettable surf experiences in the best destinations.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase text-center mt-20 mb-10">
            Coming Soon 2027
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((trip, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-dashed border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary/60" />
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
                    {trip.destination}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent/60" />
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
