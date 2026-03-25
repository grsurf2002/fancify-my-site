import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, ChevronDown, ChevronUp, Check, Globe, Video, Users, Target, Heart, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import surfTripsHero from "@/assets/surf-trips-hero.png";
import algarveStay1 from "@/assets/algarve-stay-1.png";
import algarveStay2 from "@/assets/algarve-stay-2.png";
import algarveStay3 from "@/assets/algarve-stay-3.png";
import algarveMoments1 from "@/assets/algarve-moments-1.png";
import algarveMoments2 from "@/assets/algarve-moments-2.png";
import algarveMoments3 from "@/assets/algarve-moments-3.png";
import algarveMoments4 from "@/assets/algarve-moments-4.png";
import algarveMoments5 from "@/assets/algarve-moments-5.png";
import algarveMoments6 from "@/assets/algarve-moments-6.png";

interface ScheduleDay {
  day: string;
  items: string[];
}

interface Trip {
  destination: string;
  dates: string;
  flag: string;
  taglineShort: string;
  details?: {
    tagline: string;
    location?: string;
    price: string;
    duration: string;
    included: string[];
    schedule?: ScheduleDay[];
    reservation?: string;
    stayImages?: string[];
    momentsImages?: string[];
  };
}

const algarveDetails = {
  tagline: "Waves, Progress & Unforgettable Moments",
  price: "€380 (shared room) / €420 (private room)",
  duration: "3 nights, 3 days of surf. Max 6 people.",
  reservation: "150€ deposit to secure your spot",
  stayImages: [algarveStay1, algarveStay2, algarveStay3],
  momentsImages: [algarveMoments1, algarveMoments2, algarveMoments3, algarveMoments4, algarveMoments5, algarveMoments6],
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
    { day: "Sunday", items: ["🏄‍♂️ 2 surf coaching sessions", "🎥 Video analysis in the evening", "🚐 Head back home around 17:00 (±)"] },
  ],
};

const trips2026: Trip[] = [
  {
    destination: "Maldives Surf Camp",
    dates: "6 — 16 May 2026",
    flag: "🌴",
    taglineShort: "Tropical reef waves & high-performance coaching",
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
    destination: "Maldives Surf Trip",
    dates: "16 — 26 May 2026",
    flag: "🌴",
    taglineShort: "Perfect for intermediate & advanced surfers",
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
    destination: "Algarve Surf Trip",
    dates: "16 — 19 October 2026",
    flag: "🇵🇹",
    taglineShort: "Warm water & consistent waves",
    details: algarveDetails,
  },
  {
    destination: "Algarve Surf Camp",
    dates: "12 — 15 November 2026",
    flag: "🇵🇹",
    taglineShort: "Waves, coaching & team vibes in the Algarve",
    details: algarveDetails,
  },
  {
    destination: "Algarve Surf Trip",
    dates: "17 — 20 December 2026",
    flag: "🇵🇹",
    taglineShort: "End the year surfing in the Algarve",
    details: algarveDetails,
  },
  {
    destination: "Pantín Surf Trip Galicia",
    dates: "14 — 19 July 2026",
    flag: "🇪🇸",
    taglineShort: "Powerful Atlantic waves & coaching focus",
    details: {
      tagline: "An intensive training experience with technical coaching, video analysis, and team bonding.",
      location: "Pantín, Valdoviño – Galicia, Spain (~640 km from Ericeira, ~6.5–7 hours drive)",
      price: "€620 per person",
      duration: "6 days, 9 training sessions. Round trip from Ericeira.",
      included: [
        "🚐 Transport (round trip) Ericeira → Pantín",
        "⛽ Fuel",
        "🛣️ Tolls",
        "🏡 Accommodation",
        "🥐 Breakfast",
        "🥊 9 training sessions",
        "🎥 Video analysis of the sessions",
        "🎉 Team activities & fun time",
      ],
      schedule: [
        { day: "Day 1 – 14", items: ["10:00 – Meet up in Ericeira", "Departure to Pantín", "Stops during the trip", "16:00 – Arrival in Pantín", "Accommodation check-in", "Settle in and rest"] },
        { day: "Day 2 – 15", items: ["Training Session 1", "Training Session 2", "Video analysis"] },
        { day: "Day 3 – 16", items: ["Training Session 3", "Training Session 4", "Video analysis"] },
        { day: "Day 4 – 17", items: ["Training Session 5", "Training Session 6", "Video analysis"] },
        { day: "Day 5 – 18", items: ["Training Session 7", "Training Session 8", "Video analysis"] },
        { day: "Day 6 – 19", items: ["Training Session 9 (morning)", "Lunch", "Return to Portugal", "Expected arrival in Ericeira: 20:00"] },
      ],
    },
  },
];

const trips2027: Trip[] = [
  { destination: "Morocco Surf Trip", dates: "2 — 7 February 2027", flag: "🇲🇦", taglineShort: "Perfect winter surf escape close to Europe" },
  { destination: "Algarve Surf Trip", dates: "18 — 21 February 2027", flag: "🇵🇹", taglineShort: "Warm water & consistent waves", details: algarveDetails },
  { destination: "Sri Lanka Surf Camp", dates: "1 — 11 March 2027", flag: "🌴", taglineShort: "Warm water, long waves & progression-focused coaching" },
  { destination: "Algarve Surf Trip", dates: "18 — 21 April 2027", flag: "🇵🇹", taglineShort: "Spring surf in the Algarve", details: algarveDetails },
  { destination: "Maldives Surf Trip", dates: "1 — 11 June 2027", flag: "🌴", taglineShort: "Premium surf coaching in paradise" },
];

const whyJoinReasons = [
  { icon: Globe, text: "Surf the best waves worldwide" },
  { icon: Video, text: "Video analysis & coaching included" },
  { icon: Users, text: "Small groups for better progression" },
  { icon: Target, text: "Trips adapted to all levels" },
  { icon: Heart, text: "Meet like-minded surfers" },
  { icon: ShieldCheck, text: "Led by experienced surf coaches & surfers" },
];

const TripCard = ({ trip }: { trip: Trip }) => {
  const [expanded, setExpanded] = useState(false);
  const [stayOpen, setStayOpen] = useState(false);
  const [momentsOpen, setMomentsOpen] = useState(false);
  const hasDetails = !!trip.details;

  return (
    <div
      className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] ${hasDetails ? "cursor-pointer" : ""} ${expanded ? "md:col-span-2 lg:col-span-3" : ""}`}
      onClick={() => hasDetails && setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{trip.flag}</span>
            <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">
              {trip.destination}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="font-body text-sm">{trip.dates}</span>
          </div>
          <p className="text-sm text-muted-foreground/80">{trip.taglineShort}</p>
          {!hasDetails && (
            <span className="inline-block mt-2 text-xs font-heading uppercase tracking-wider text-primary/70">Coming soon</span>
          )}
          {hasDetails && !expanded && (
            <span className="inline-block mt-2 text-xs font-heading uppercase tracking-wider text-primary">
              Limited spots available — Click for details
            </span>
          )}
        </div>
        {hasDetails && (
          <div className="text-primary">
            {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        )}
      </div>

      {expanded && trip.details && (
        <div className="mt-6 border-t border-border pt-6 space-y-6" onClick={(e) => e.stopPropagation()}>
          <p className="font-heading text-lg text-primary tracking-wider uppercase">
            {trip.details.tagline}
          </p>

          {trip.details.location && (
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                📍 Location
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trip.details.location}
              </p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                💸 Price
              </h4>
              <p className="text-lg font-bold text-primary">{trip.details.price}</p>
              {trip.details.reservation && (
                <p className="text-xs text-muted-foreground mt-1">Reservation: {trip.details.reservation}</p>
              )}
              {trip.details.stayImages && trip.details.stayImages.length > 0 && (
                <div className="mt-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setStayOpen(!stayOpen); }}
                    className="flex items-center gap-2 text-sm font-heading font-bold text-foreground uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    🏠 Where do we stay?
                    {stayOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {stayOpen && (
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {trip.details.stayImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Surf trip accommodation ${trip.destination} ${i + 1}`}
                          className="rounded-lg w-full h-32 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              {trip.details.momentsImages && trip.details.momentsImages.length > 0 && (
                <div className="mt-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setMomentsOpen(!momentsOpen); }}
                    className="flex items-center gap-2 text-sm font-heading font-bold text-foreground uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    📸 Moments from recent trips
                    {momentsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {momentsOpen && (
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {trip.details.momentsImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Surf trip moment ${trip.destination} ${i + 1}`}
                          className="rounded-lg w-full h-32 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
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
              ✅ What's Included
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

          {trip.details.schedule && (
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                🗓 What's the Plan?
              </h4>
              <div className="space-y-4">
                {trip.details.schedule.map((day, i) => (
                  <div key={i}>
                    <p className="font-heading text-sm font-bold text-foreground mb-1">{day.day}</p>
                    <ul className="space-y-1 pl-4">
                      {day.items.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <a
              href="https://wa.me/351920459122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              Reserve Your Spot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const SurfTrips = () => {
  useEffect(() => {
    document.title = "Surf Trips & Surf Camps 2026–2027 | Upgrade Surf Coaching";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Join premium surf trips and surf camps from Ericeira, Portugal. Maldives, Algarve, Sri Lanka, Morocco — coaching, video analysis & adventure for all levels.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={surfTripsHero}
            alt="Tropical surf trip destination with perfect waves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="sr-only">Surf Trips & Surf Camps 2026–2027 | Upgrade Surf Coaching</h1>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider text-foreground uppercase">
            Join Unforgettable Surf Trips Around the World
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Travel with Upgrade Surf Coaching and experience premium surf trips and surf camps in some of the best surfing destinations in the world. From the Maldives to Portugal and Sri Lanka, our trips are designed for all levels, combining coaching, adventure, and progression.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/351920459122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Reserve Your Spot <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SEO Boost Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase mb-6">
            Surf Trips for All Levels — From Portugal to Exotic Destinations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our surf trips from Ericeira, Portugal take you to world-class waves with expert coaching, video analysis, and a structured training approach. Whether you're looking for a surf camp in the Maldives, a surf trip in Algarve, or a coaching retreat in Sri Lanka, we've got you covered.
          </p>
        </div>
      </section>

      {/* 2026 Trips */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase text-center mb-4">
            Upcoming Surf Trips 2026
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-sm font-heading uppercase tracking-wider">
            Limited spots (max 4–8 surfers) · Early booking recommended
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips2026.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* 2027 Trips */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase text-center mb-4">
            Upcoming Surf Trips 2027
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-sm font-heading uppercase tracking-wider">
            New destinations · Reserve early
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips2027.map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase text-center mb-12">
            Why Join Our Surf Trips
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {whyJoinReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                <reason.icon className="h-6 w-6 text-primary shrink-0" />
                <span className="text-foreground font-body">{reason.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 border-t border-border bg-card">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground uppercase mb-6">
            Reserve Your Spot on a Surf Trip
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Limited spots available. Join our next surf trip from Ericeira and surf the best waves with professional coaching.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            Max 4–8 surfers per trip · Video analysis included · All levels welcome
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/351920459122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Book Now <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/351920459122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg font-heading uppercase tracking-wider hover:bg-primary/10 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurfTrips;
