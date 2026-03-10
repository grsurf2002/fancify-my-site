import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import gabriel1 from "@/assets/gabriel-1.jpeg";
import gabriel2 from "@/assets/gabriel-2.jpeg";
import gabriel3 from "@/assets/gabriel-3.jpeg";
import gabriel4 from "@/assets/gabriel-4.jpeg";
import gabriel5 from "@/assets/gabriel-5.jpeg";
import hugo1 from "@/assets/hugo-1.jpeg";
import hugo2 from "@/assets/hugo-2.jpeg";
import hugo3 from "@/assets/hugo-3.jpeg";

const hugoImages = [
  "https://freight.cargo.site/w/1000/i/Y1733500838843909377493164573129/F5B6F47B-F0DF-4975-BD41-687861DF8F40-5.png",
  hugo1,
  hugo2,
  hugo3,
];

const gabrielImages = [
  "https://freight.cargo.site/w/1000/i/O1733496448574160066841008619977/F5B6F47B-F0DF-4975-BD41-687861DF8F40-4.png",
  gabriel1,
  gabriel2,
  gabriel3,
  gabriel4,
  gabriel5,
];

const coaches = [
  {
    name: "Hugo Cardoso",
    role: "Certified Coach",
    images: [
      "https://freight.cargo.site/w/1000/i/Y1733500838843909377493164573129/F5B6F47B-F0DF-4975-BD41-687861DF8F40-5.png",
    ],
    bio: "Born in Ericeira, surfing since age 5. Started competing at 11, with a full junior career and a couple years of QS (Qualifying Series) around Europe. His entire life revolves around surfing, training, competing, and traveling. Passionate about teaching and making everyone feel supported and challenged.",
    instagram: "https://www.instagram.com/hugodsc/",
    handle: "@hugodsc",
  },
  {
    name: "Gabriel Ribeiro",
    role: "Certified Coach",
    images: gabrielImages,
    bio: "Born in Cascais, surfing since age 3. Moved to Ericeira young and started competing at 9. He has dedicated his life to surfing and traveling to improve his skills, doing nice results in his junior career and a couple years of QS (Qualifying Series) around Europe. Super dedicated and transparent surf coach to help you reach your goals.",
    instagram: "https://www.instagram.com/_gabriel.ribeiro7/",
    handle: "@_gabriel.ribeiro7",
  },
];

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

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Who We Are
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Meet Your Coaches
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Two long-time friends, competitive surfers and certified instructors ready to help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-card"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <ImageCarousel images={coach.images} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {coach.name}
                    </h3>
                    <p className="text-sm text-primary font-medium tracking-wider uppercase">
                      {coach.role}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium tracking-wide">
                      Co-Founder
                    </p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
