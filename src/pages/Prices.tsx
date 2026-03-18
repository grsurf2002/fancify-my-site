import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star, Flame, Award, Gift, ArrowRight } from "lucide-react";

const lessonPacks = [
  { sessions: 5, price: 340, perSession: 68, validity: "3 months", badge: null },
  { sessions: 12, price: 750, perSession: 62.5, validity: "6 months", badge: "Most Popular" },
  { sessions: 24, price: 1320, perSession: 55, validity: "12 months", badge: "Best Value" },
];

const monthlyPlans = [
  { months: 1, monthly: 270, perSession: 68, total: 270, payFull: null, payFullPerSession: null },
  { months: 2, monthly: 260, perSession: 65, total: 520, payFull: 460, payFullPerSession: 58 },
  { months: 3, monthly: 250, perSession: 63, total: 750, payFull: 610, payFullPerSession: 51 },
  { months: 4, monthly: 245, perSession: 61, total: 980, payFull: 770, payFullPerSession: 48 },
  { months: 5, monthly: 240, perSession: 60, total: 1200, payFull: 930, payFullPerSession: 47 },
  { months: 6, monthly: 235, perSession: 59, total: 1410, payFull: 1130, payFullPerSession: 47 },
];

const longTermPlans = [
  { months: 7, price: 1260, save: 350, perSession: 45 },
  { months: 8, price: 1380, save: 420, perSession: 43 },
  { months: 9, price: 1490, save: 490, perSession: 41 },
  { months: 10, price: 1590, save: 560, perSession: 40 },
  { months: 11, price: 1680, save: 630, perSession: 38 },
  { months: 12, price: 1760, save: 700, perSession: 37, badge: "Best Value" },
];

const privatePacks = [
  { sessions: 1, price: 150, perSession: 150, validity: null, badge: null },
  { sessions: 3, price: 430, perSession: 143, validity: "2 months", badge: null },
  { sessions: 5, price: 650, perSession: 130, validity: "3 months", badge: null },
  { sessions: 10, price: 1200, perSession: 120, validity: "6 months", badge: "Best Private Value" },
];

const inclusions = [
  "Private progress document with personal goals",
  "Detailed session notes & performance metrics",
  "Waves caught analysis & video feedback",
  "10% discount at EFIX Ericeira (board repair)",
  "15% discount at Boardculture Surf Store",
  "Ongoing support with board selection & adjustments",
];

const Prices = () => {
  useEffect(() => {
    document.title = "Surf Coaching Prices Ericeira | Packages & Monthly Plans | Upgrade Surf Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Flexible surf coaching packages in Ericeira, Portugal. Choose from lesson packs, monthly plans, or private sessions. Video analysis included.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <h1 className="sr-only">Surf Coaching Prices Ericeira | Packages & Monthly Plans</h1>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ocean">
        <div className="container px-4 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Choose Your Surf Coaching Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Flexible surf coaching packages in Ericeira designed for all levels — from single sessions to full progression programs. The longer you train, the faster you improve and the more you save.
          </p>
        </div>
      </section>

      {/* Lesson Packs */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Surf Lesson Packages
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Best for Flexibility</p>

          <div className="grid md:grid-cols-3 gap-6">
            {lessonPacks.map((pack) => (
              <div
                key={pack.sessions}
                className={`relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  pack.badge === "Best Value"
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-glow scale-105"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {pack.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {pack.sessions}-Lesson Pack
                </h3>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-1">€{pack.price}</p>
                <p className="text-2xl font-semibold text-accent mb-3">€{pack.perSession}/session</p>
                <p className="text-sm text-muted-foreground">Valid for {pack.validity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 max-w-6xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center">
              Monthly Coaching Plans
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-4 text-lg">Best for Progression 🔥</p>
          <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
            Structured Surf Coaching in Ericeira — commit to consistent training and see real results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyPlans.map((plan) => (
              <div key={plan.months} className="rounded-2xl bg-card shadow-card p-6 hover:shadow-glow transition-shadow duration-500">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  {plan.months}-Month{plan.months > 1 ? "s" : ""}
                </h3>
                <p className="text-3xl font-bold text-primary mb-1">€{plan.monthly}<span className="text-base font-normal text-muted-foreground">/month</span></p>
                <p className="text-lg font-semibold text-accent mb-2">€{plan.perSession}/session</p>
                {plan.months > 1 && (
                  <p className="text-sm text-muted-foreground mb-2">Total: €{plan.total}</p>
                )}
                {plan.payFull && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">Pay in full:</p>
                    <p className="text-xl font-bold text-foreground">€{plan.payFull}</p>
                    <p className="text-sm font-semibold text-accent">€{plan.payFullPerSession}/session</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Plans */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center">
              Long-Term Coaching
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-12 text-lg">Best Results + Best Value</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {longTermPlans.map((plan) => (
              <div
                key={plan.months}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${
                  plan.badge
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-glow"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {plan.badge}
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {plan.months}-Month{plan.months > 1 ? "s" : ""}
                </h3>
                <p className="text-3xl font-bold text-primary mb-1">€{plan.price}</p>
                <p className="text-lg font-semibold text-accent mb-2">€{plan.perSession}/session</p>
                <p className="text-sm text-accent font-medium">Save €{plan.save}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Coaching */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Private Surf Lessons Ericeira
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">Premium one-on-one coaching</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {privatePacks.map((pack) => (
              <div
                key={pack.sessions}
                className={`relative rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 ${
                  pack.badge
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-glow"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {pack.badge}
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {pack.sessions} Session{pack.sessions > 1 ? "s" : ""}
                </h3>
                <p className="text-3xl font-bold text-primary mb-1">€{pack.price}</p>
                <p className="text-lg font-semibold text-accent mb-2">€{pack.perSession}/session</p>
                {pack.validity && (
                  <p className="text-sm text-muted-foreground">Valid for {pack.validity}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center">
              All Surf Coaching Plans Include
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-ocean">
        <div className="container px-4 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Surf Progression Today
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Book your surf coaching in Ericeira. Choose your plan and start improving faster with professional coaching and video analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
