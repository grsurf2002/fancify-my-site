import { useEffect } from "react";
import { Target, Zap, Clock, MessageCircle, ChevronRight, CheckCircle, Dumbbell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import surfskate1 from "@/assets/surfskate-1.jpeg";
import surfskate2 from "@/assets/surfskate-2.jpeg";

const SurfSkate = () => {
  useEffect(() => {
    document.title = "Surfskate Coaching Ericeira | Surf Training on Land Portugal";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Improve your surfing with surfskate coaching in Ericeira. Train technique, flow, and balance on land with professional surf training.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1 – Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={surfskate1}
            alt="Surfskate coaching Ericeira - surf training on land Portugal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container px-4 text-center relative z-10">
          <h1 className="sr-only">Surfskate Coaching Ericeira | Surf Training on Land Portugal</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Upgrade Surf Coaching
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Improve Your Surfing on Land<br className="hidden md:block" /> with Surfskate Coaching
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            At Upgrade Surf Coaching, our surfskate coaching in Ericeira helps you improve your surf technique, flow, and muscle memory — even when there are no waves. Perfect for surfers who want faster progression through land-based surf training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351911001039?text=Hi%20I%27d%20like%20to%20book%20a%20surfskate%20coaching%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Book a Surfskate Session
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

      {/* Section 2 – Surfskate Programs */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Surfskate Coaching in Ericeira
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <Target className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Technique & Surf Movement Training
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Work on turns, body positioning, and surf-specific movements. Build the muscle memory you need to perform in the water.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <Zap className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Flow & Style Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Improve your rhythm, balance, and overall surfing style. Develop a natural flow that translates directly to your surfing.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <Dumbbell className="h-10 w-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Surf Training Without Waves
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stay consistent and progress faster, even on flat days. Keep your surf training going regardless of ocean conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Sessions Gallery */}
      <section className="py-20 md:py-28 bg-ocean">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Surfskate Coaching Sessions
          </h2>
          <p className="text-muted-foreground text-center text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Each session is designed to complement your surf coaching program and accelerate your progression.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[surfskate1, surfskate2].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={img}
                  alt={`Surfskate coaching session ${i + 1} Ericeira`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – How It Works */}
      <section className="py-20 md:py-28">
        <div className="container px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            How Our Surfskate Coaching Works
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                icon: Clock,
                title: "Session Duration",
                text: "Each surfskate coaching session in Ericeira lasts approximately 1h15, starting from the moment we meet.",
              },
              {
                step: "02",
                icon: Target,
                title: "Goal-Oriented Training",
                text: "We begin by defining clear goals for the session and your long-term progression. If you are already part of our surf coaching program in Ericeira, we align your surf goals and translate them directly into surfskate training.",
              },
              {
                step: "03",
                icon: Dumbbell,
                title: "Warm-Up & Technique Drills",
                text: "We start with a short warm-up followed by targeted exercises focused on your goals, including turns, compression, and positioning.",
              },
              {
                step: "04",
                icon: MessageCircle,
                title: "Real-Time Feedback & Corrections",
                text: "Throughout the session, you receive continuous coaching and technical corrections to ensure proper execution and faster improvement.",
              },
              {
                step: "05",
                icon: CheckCircle,
                title: "Recap & Training Plan",
                text: "At the end of the session, we review your performance and provide exercises and references so you can continue improving between sessions.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-card/50 p-8 hover:border-primary/40 transition-colors flex gap-6 items-start"
              >
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-3xl font-heading font-bold text-primary/30">
                    {item.step}
                  </span>
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 – Benefits */}
      <section className="py-20 md:py-28 bg-ocean">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Why Surfskate Coaching Improves Your Surfing
          </h2>

          <ul className="space-y-4">
            {[
              "Build muscle memory for surfing",
              "Improve balance, technique, and control",
              "Practice surf movements consistently",
              "Progress faster in the water",
              "Train even without waves",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-muted-foreground text-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6 – Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Why Choose Upgrade Surfskate Coaching in Ericeira
          </h2>

          <div className="space-y-5">
            {[
              "Surf-specific training approach",
              "Personalized coaching plans",
              "Perfect complement to surf lessons",
              "Faster progression with structured training",
              "Ideal for all levels",
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

      {/* Section 7 – Final CTA */}
      <section className="py-20 md:py-28 bg-ocean">
        <div className="container px-4 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Train Your Surfing Anytime
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Take your surfing to the next level with surfskate coaching in Ericeira, Portugal. Stay consistent, improve faster, and build real surf skills on land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351911001039?text=Hi%20I%27d%20like%20to%20book%20a%20surfskate%20coaching%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Book Your Surfskate Session
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

export default SurfSkate;
