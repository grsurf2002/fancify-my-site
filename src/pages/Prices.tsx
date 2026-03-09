import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingData = [
  {
    title: "Group Surf Coaching w/ Video Analysis",
    range: "From 37€",
    description: "Depending on your pack or monthly subscription.",
  },
  {
    title: "Private Surf Coaching / Video Analysis",
    range: "From 100€",
    description: "Depending on your pack or monthly subscription.",
  },
  {
    title: "Group Surfskate Lesson",
    range: "30€",
    description: "Per lesson in a group setting.",
  },
  {
    title: "Private Surfskate Lesson",
    range: "80€",
    description: "One-on-one surfskate session.",
  },
];

const Prices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ocean">
        <div className="container px-4 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Pricing
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            What Are Our Prices?
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Transparent pricing for all our coaching services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {pricingData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card shadow-card p-8 flex flex-col items-center text-center hover:shadow-glow transition-shadow duration-500"
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  {item.range}
                </p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
