import { Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import gabriel1 from "@/assets/gabriel-1.jpeg";
import gabriel2 from "@/assets/gabriel-2.jpeg";
import gabriel3 from "@/assets/gabriel-3.jpeg";
import gabriel4 from "@/assets/gabriel-4.jpeg";
import gabriel5 from "@/assets/gabriel-5.jpeg";
import hugo1 from "@/assets/hugo-1.jpeg";
import hugo3 from "@/assets/hugo-3.jpeg";
import hugo4 from "@/assets/hugo-4.jpeg";
import hugo5 from "@/assets/hugo-5.jpeg";
import hugo6 from "@/assets/hugo-6.jpeg";
import afonso1 from "@/assets/afonso-1.jpeg";
import afonso2 from "@/assets/afonso-2.jpeg";
import afonso3 from "@/assets/afonso-3.jpeg";
import afonso4 from "@/assets/afonso-4.jpeg";

const hugoImages = [
  hugo4,
  "https://freight.cargo.site/w/1000/i/Y1733500838843909377493164573129/F5B6F47B-F0DF-4975-BD41-687861DF8F40-5.png",
  hugo1,
  hugo3,
  hugo5,
  hugo6,
];

const gabrielImages = [
  "https://freight.cargo.site/w/1000/i/O1733496448574160066841008619977/F5B6F47B-F0DF-4975-BD41-687861DF8F40-4.png",
  gabriel1,
  gabriel2,
  gabriel3,
  gabriel4,
  gabriel5,
];

const afonsoImages = [
  afonso1,
  afonso2,
  afonso3,
  afonso4,
];

const coaches = [
  {
    name: "Hugo Cardoso",
    role: "Certified Coach",
    subtitle: "Co-Founder",
    images: hugoImages,
    bio: "Born in Ericeira, surfing since age 5. Started competing at 11, with a full junior career and a couple years of QS (Qualifying Series) around Europe. His entire life revolves around surfing, training, competing, and traveling. Passionate about teaching and making everyone feel supported and challenged.",
    instagram: "https://www.instagram.com/hugodsc/",
    handle: "@hugodsc",
  },
  {
    name: "Gabriel Ribeiro",
    role: "Certified Coach",
    subtitle: "Co-Founder",
    images: gabrielImages,
    bio: "Born in Cascais, surfing since age 3. Moved to Ericeira young and started competing at 9. He has dedicated his life to surfing and traveling to improve his skills, doing nice results in his junior career and a couple years of QS (Qualifying Series) around Europe. Super dedicated and transparent surf coach to help you reach your goals.",
    instagram: "https://www.instagram.com/_gabriel.ribeiro7/",
    handle: "@_gabriel.ribeiro7",
  },
];

const afonsoCoach = {
  name: "Afonso Pinto",
  role: "Coach",
  subtitle: "",
  images: afonsoImages,
  bio: "Born in Ericeira, with a long and significant junior career with notable results, now actively competing in the QS (Qualifying Series). Known for his sharp backside surfing and always being with a smile on the face.",
  instagram: "https://www.instagram.com/afonso._pinto/",
  handle: "@afonso._pinto",
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt=""
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const CoachCard = ({ coach }: { coach: typeof coaches[0] }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-card shadow-card">
    <div className="relative h-80 overflow-hidden">
      <ImageCarousel images={coach.images} />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {coach.name}
          </h3>
          <p className="text-sm text-primary font-medium tracking-wider uppercase">
            {coach.role}
          </p>
          {coach.subtitle && (
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              {coach.subtitle}
            </p>
          )}
        </div>
        <a
          href={coach.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <Instagram size={16} />
          {coach.handle}
        </a>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {coach.bio}
      </p>
    </div>
  </div>
);

const TeamSection = () => {
  const [showAfonso, setShowAfonso] = useState(false);

  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Who We Are
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Meet Your Coaches
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            We are a team of experienced surfers and coaches in Ericeira, offering personalized surf coaching sessions tailored to your level and goals.
          </p>
        </div>

        {/* Desktop: 3 columns with all coaches */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
          <CoachCard coach={afonsoCoach} />
        </div>

        {/* Mobile: 2 coaches + Show More for Afonso */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center">
            {!showAfonso && (
              <button
                onClick={() => setShowAfonso(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 font-medium text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.97]"
              >
                Show More
                <ChevronDown size={18} />
              </button>
            )}

            {showAfonso && (
              <div className="w-full max-w-md mx-auto animate-fade-up mt-8">
                <CoachCard coach={afonsoCoach} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
