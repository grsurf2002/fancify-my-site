import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Bath, Dumbbell, Waves, MapPin, Calendar, Archive, ChevronDown, ChevronUp } from "lucide-react";
import bedroomImg from "@/assets/surf-house-bedroom.jpeg";
import livingImg from "@/assets/surf-house-living.jpeg";
import gymImg from "@/assets/surf-house-gym.jpeg";
import poolImg from "@/assets/surf-house-pool.jpeg";
import officeImg from "@/assets/surf-house-office.jpeg";
import bathroomImg from "@/assets/surf-house-bathroom.jpeg";
import balconyImg from "@/assets/surf-house-balcony.jpeg";
import sunsetImg from "@/assets/surf-house-sunset.jpeg";
import kitchenImg from "@/assets/surf-house-kitchen.jpeg";
import gymExteriorImg from "@/assets/surf-house-gym-exterior.jpeg";

const features = [
  { icon: Home, label: "4 Rooms" },
  { icon: Bath, label: "Private Toilet" },
  { icon: Dumbbell, label: "Access to Gym" },
  { icon: Waves, label: "Access to Pool" },
  { icon: Archive, label: "Surf Board Store" },
  { icon: MapPin, label: "2 min drive from Ribeira d'Ilhas" },
];

const allPhotos = [
  { src: bedroomImg, alt: "Surf house bedroom" },
  { src: livingImg, alt: "Living room and dining area" },
  { src: gymImg, alt: "Private gym" },
  { src: poolImg, alt: "Pool area" },
  { src: officeImg, alt: "Office and workspace" },
  { src: bathroomImg, alt: "Private bathroom" },
  { src: balconyImg, alt: "Balcony with village view" },
  { src: sunsetImg, alt: "House exterior at sunset" },
  { src: kitchenImg, alt: "Kitchen and dining area" },
  { src: gymExteriorImg, alt: "Gym and pool exterior view" },
];

const Accommodation = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePhotos = showAll ? allPhotos : allPhotos.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[80vh]">
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

      {/* Photos of the House */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
            Photos of the House
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors mb-8"
          >
            {showAll ? (
              <>Hide Photos <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>See More <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
          {showAll && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">
              {allPhotos.map((photo, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
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
