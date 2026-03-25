import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Bath, Dumbbell, Waves, MapPin, Calendar, Archive } from "lucide-react";
import bedroomImg from "@/assets/surf-house-bedroom.jpeg";
import livingImg from "@/assets/surf-house-living.jpeg";
import gymImg from "@/assets/surf-house-gym.jpeg";
import poolImg from "@/assets/surf-house-pool.jpeg";

const features = [
  { icon: Home, label: "4 Rooms" },
  { icon: Bath, label: "Private Toilet" },
  { icon: Dumbbell, label: "Access to Gym" },
  { icon: Waves, label: "Access to Pool" },
  { icon: Archive, label: "Surf Board Store" },
  { icon: MapPin, label: "2 min drive from Ribeira d'Ilhas" },
];

const photos = [
  { src: bedroomImg, alt: "Surf house bedroom with ocean art" },
  { src: livingImg, alt: "Spacious living room and dining area" },
  { src: gymImg, alt: "Private gym with full equipment" },
  { src: poolImg, alt: "Pool area with sun loungers" },
];

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {[bedroomImg, livingImg, gymImg, poolImg].map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.3em] uppercase rounded-full bg-primary/10 text-primary">
            Stay With Us
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground uppercase leading-tight">
            Our Surf House
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your home away from home in Ericeira — just 2 minutes from Ribeira d'Ilhas, with everything you need to focus on surfing.
          </p>
        </div>
      </section>


      {/* Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase text-center mb-10">
            What's Included
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-card border border-border">
                <f.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase text-center mb-10">
            Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Per Day</p>
              <p className="font-heading text-5xl font-bold text-foreground">€100</p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-8 text-center shadow-card relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground">
                Best Value
              </span>
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Per Week</p>
              <p className="font-heading text-5xl font-bold text-foreground">€500</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#contact"
              className="inline-block px-10 py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Book Yours
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;
