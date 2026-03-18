import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star, Flame, Award, ArrowRight, Users, Video, FileText, Wrench, ShoppingBag, Phone, ChevronRight } from "lucide-react";

const monthlyPlans = [
  { months: 1, price: "€270", perSession: 68, bestFor: "Trying coaching", badge: null, highlight: false },
  { months: 3, price: "€610", perSession: 51, bestFor: "Real progression", badge: "Most Popular", highlight: true },
  { months: 6, price: "€1130", perSession: 47, bestFor: "Serious surfers", badge: null, highlight: false },
  { months: 12, price: "€1760", perSession: 37, bestFor: "Maximum results", badge: "Best Value", highlight: true },
];

const lessonPacks = [
  { sessions: 5, price: 340, perSession: 68, validity: "3 months", badge: null },
  { sessions: 12, price: 750, perSession: 62.5, validity: "6 months", badge: null },
  { sessions: 24, price: 1320, perSession: 55, validity: "12 months", badge: "Best Value" },
];

const privatePacks = [
  { sessions: 1, price: 150, perSession: 150, validity: null, badge: null },
  { sessions: 3, price: 430, perSession: 143, validity: "2 months", badge: null },
  { sessions: 5, price: 650, perSession: 130, validity: "3 months", badge: null },
  { sessions: 10, price: 1200, perSession: 120, validity: "6 months", badge: "Best Private Value" },
];

const inclusions = [
  { icon: Users, label: "Max 4 surfers" },
  { icon: Video, label: "Video analysis" },
  { icon: FileText, label: "Progress tracking" },
  { icon: Wrench, label: "EFIX discount" },
  { icon: ShoppingBag, label: "Boardculture discount" },
  { icon: Phone, label: "Coaching support" },
];

const quizOptions = [
  { profile: "I'm just visiting Ericeira", recommendation: "5 or 12 Lesson Pack", emoji: "✈️" },
  { profile: "I want to improve consistently", recommendation: "3-Month Plan ⭐", emoji: "📈" },
  { profile: "I'm serious about progressing fast", recommendation: "6-Month Plan", emoji: "🚀" },
  { profile: "I want the best results possible", recommendation: "12-Month Plan 🏆", emoji: "🏆" },
  { profile: "I want full attention (1:1)", recommendation: "Private Coaching", emoji: "👤" },
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ocean">
        <div className="container px-4 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Choose Your Surf Coaching Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Flexible surf coaching packages in Ericeira designed for all levels — from single sessions to full progression programs. The longer you train, the faster you improve and the more you save.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary">
            From €37<span className="text-lg font-normal text-muted-foreground">/session</span>
          </p>
        </div>
      </section>

      {/* Top Banner */}
      <section className="py-8 bg-primary">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            Train in Small Groups (Max 4 Surfers per Coach)
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            More waves. More feedback. Faster progression.
          </p>
        </div>
      </section>

      {/* Included Icons Row */}
      <section className="py-10 bg-secondary/30">
        <div className="container px-4 max-w-5xl">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {inclusions.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Coaching (Recommended) */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-6 h-6 text-primary" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Recommended</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Monthly Coaching Plans
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            Structured Surf Coaching in Ericeira — commit to consistent training and see real results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.months}
                className={`relative rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  plan.badge === "Best Value"
                    ? "bg-gradient-to-b from-primary/15 to-card border-2 border-primary shadow-glow scale-[1.03]"
                    : plan.badge === "Most Popular"
                    ? "bg-gradient-to-b from-accent/10 to-card border-2 border-accent shadow-glow"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {plan.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap ${
                    plan.badge === "Best Value"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {plan.badge === "Best Value" ? <Flame className="w-3 h-3" /> : <Star className="w-3 h-3" />}
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 mt-2">
                  {plan.months} Month{plan.months > 1 ? "s" : ""}
                </h3>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-1">€{plan.perSession}</p>
                <p className="text-sm text-muted-foreground mb-4">per session</p>
                <p className="text-lg font-semibold text-foreground mb-2">{plan.price}</p>
                <p className="text-sm text-muted-foreground italic">{plan.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surf Packs */}
      <section className="py-16 md:py-24 bg-secondary/30">
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
                  pack.badge
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-glow scale-105"
                    : "bg-card shadow-card hover:shadow-glow"
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {pack.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {pack.sessions}-Lesson Pack
                </h3>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-1">€{pack.perSession}</p>
                <p className="text-sm text-muted-foreground mb-4">per session</p>
                <p className="text-lg font-semibold text-foreground mb-2">€{pack.price}</p>
                <p className="text-sm text-muted-foreground">Valid for {pack.validity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Coaching */}
      <section className="py-16 md:py-24">
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
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {pack.sessions} Session{pack.sessions > 1 ? "s" : ""}
                </h3>
                <p className="text-3xl font-bold text-primary mb-1">€{pack.perSession}</p>
                <p className="text-sm text-muted-foreground mb-3">per session</p>
                <p className="text-lg font-semibold text-foreground mb-1">€{pack.price}</p>
                {pack.validity && (
                  <p className="text-sm text-muted-foreground">Valid for {pack.validity}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Plan Quiz */}
      <section className="py-16 md:py-24 bg-ocean">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Which Plan is Right for You?
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg">Not sure where to start?</p>

          <div className="space-y-4">
            {quizOptions.map((option) => (
              <div
                key={option.profile}
                className="flex items-center justify-between bg-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{option.emoji}</span>
                  <p className="text-foreground font-medium">{option.profile}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-sm md:text-base">{option.recommendation}</span>
                  <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Improving Your Surfing Today
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Train smarter with Upgrade Surf Coaching in Ericeira. Choose your plan and start progressing faster.
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