import { useEffect } from "react";
import { MapPin, Video, Target, Users, CheckCircle, ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import heroSurf from "@/assets/hero-surf.jpg";
import coaching1 from "@/assets/coaching-1.jpeg";
import coaching2 from "@/assets/coaching-2.jpeg";
import coaching5 from "@/assets/coaching-5.jpeg";
import videoAnalysis from "@/assets/video-analysis.jpeg";

const SurfCoaching = () => {
  useEffect(() => {
    document.title = "Surf Coaching Ericeira | Private Surf Lessons Portugal | Upgrade Surf Coaching";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Improve your surfing with professional surf coaching in Ericeira, Portugal. Private lessons, video analysis, and training at the best surf spots.");
    }

    // JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Surf Coaching",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Upgrade Surf Coaching"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Ericeira, Portugal"
      },
      "description": "Professional surf coaching in Ericeira designed to improve technique, confidence, and performance."
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1 – Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSurf}
            alt="Surf coaching Ericeira - professional surf lesson in Portugal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container px-4 text-center relative z-10">
          <h1 className="sr-only">Surf Coaching Ericeira | Private Surf Lessons in Portugal</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Upgrade Surf Coaching
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Improve Your Surfing Faster<br className="hidden md:block" /> with Professional Coaching
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Personalized surf coaching in Ericeira with video analysis. Train at the best surf spots in Portugal and accelerate your progression with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351911001039?text=Hi%20I%27d%20like%20to%20book%20a%20surf%20coaching%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Book a Surf Session
            </a>
            <a
              href="https://wa.me/351911001039"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border text-foreground font-medium px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 – Surf Coaching Programs */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Surf Coaching Programs in Ericeira
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <img
                src={coaching1}
                alt="Private surf lessons Ericeira - one on one coaching"
                className="w-full h-48 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Private Surf Lessons Ericeira
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                One-on-one coaching tailored to your level for faster improvement. Maximum focus on your individual progression with personalized feedback.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <img
                src={coaching2}
                alt="Intermediate and advanced surf coaching Ericeira"
                className="w-full h-48 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Intermediate & Advanced Surf Coaching
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for surfers who want to refine technique, positioning, and wave selection. Break through plateaus and reach the next level.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <img
                src={videoAnalysis}
                alt="Video analysis surf coaching Ericeira"
                className="w-full h-48 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Video Analysis Surf Coaching
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Improve faster with detailed video feedback during and after your session. See exactly what to adjust and apply it immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – How It Works */}
      <section className="py-20 md:py-28 bg-ocean">
        <div className="container px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            How Our Surf Coaching Works
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                icon: MapPin,
                title: "Choose the Best Surf Spot",
                text: "We select the best waves daily across Ericeira, Peniche, and Carcavelos based on conditions and your level.",
              },
              {
                step: "02",
                icon: Target,
                title: "Set Your Surf Goals",
                text: "Each session starts with clear objectives based on your current level and what you want to improve.",
              },
              {
                step: "03",
                icon: Users,
                title: "In-Water Coaching",
                text: "Real-time feedback while you surf. We guide you on positioning, timing, and technique in the water.",
              },
              {
                step: "04",
                icon: Video,
                title: "Video Analysis & Feedback",
                text: "Review your waves on screen and get precise technical feedback to improve instantly.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-card/50 p-8 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-heading font-bold text-primary/30">
                    {item.step}
                  </span>
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Locations (SEO Boost) */}
      <section className="py-20 md:py-28">
        <div className="container px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Surf Coaching in Ericeira, Peniche & Carcavelos
          </h2>
          <p className="text-muted-foreground text-center text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            We operate across the best surf spots in Portugal, including Ericeira World Surf Reserve, Peniche, and Carcavelos. This allows us to always find the best conditions for your level.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Ericeira", desc: "World Surf Reserve with consistent waves for all levels" },
              { name: "Peniche", desc: "Powerful swells and world-class reef breaks" },
              { name: "Carcavelos", desc: "Perfect beach break near Lisbon for beginners & intermediates" },
            ].map((loc) => (
              <div
                key={loc.name}
                className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/50 transition-colors"
              >
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {loc.name}
                </h3>
                <p className="text-muted-foreground text-sm">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 – Monthly Program */}
      <section className="py-20 md:py-28 bg-ocean">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Monthly Surf Coaching Program
          </h2>
          <h3 className="font-heading text-xl md:text-2xl text-muted-foreground mb-10 text-center">
            Track Your Progress and Improve Consistently
          </h3>

          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Surfers with a monthly subscription receive detailed session reviews, including performance metrics to monitor your development:
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Number of waves surfed",
              "Wave selection analysis",
              "Technical feedback",
              "Progress tracking over time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground leading-relaxed text-lg">
            This system allows us to monitor your development and keep track of your progress throughout your training program.
          </p>
        </div>
      </section>

      {/* Section 6 – Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Why Choose Upgrade Surf Coaching
          </h2>

          <div className="space-y-5">
            {[
              "Personalized coaching plans tailored to your level",
              "Video analysis included in every session",
              "Coaching at the best surf spots daily",
              "Faster progression than regular surf schools",
              "Ideal for beginners to advanced surfers",
              "Small groups — maximum 4 surfers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 – Testimonials */}
      <section className="bg-ocean">
        <ReviewsSection />
      </section>

      {/* Section 8 – Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container px-4 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Improve Your Surfing?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Join Upgrade Surf Coaching in Ericeira and take your surfing to the next level with professional coaching and video analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351911001039?text=Hi%20I%27d%20like%20to%20book%20a%20surf%20coaching%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/351911001039"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border text-foreground font-medium px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurfCoaching;
