import { Instagram } from "lucide-react";

const coaches = [
  {
    name: "Hugo Cardoso",
    role: "Certified Coach",
    image: "https://freight.cargo.site/w/1000/i/Y1733500838843909377493164573129/F5B6F47B-F0DF-4975-BD41-687861DF8F40-5.png",
    bio: "Born in Ericeira, surfing since age 5. Started competing at 11 — his entire life revolves around surfing, training, competing, and traveling. Passionate about teaching and making everyone feel supported and challenged.",
    instagram: "https://www.instagram.com/hugodsc/",
    handle: "@hugodsc",
  },
  {
    name: "Gabriel Ribeiro",
    role: "Coach",
    image: "https://freight.cargo.site/w/1000/i/O1733496448574160066841008619977/F5B6F47B-F0DF-4975-BD41-687861DF8F40-4.png",
    bio: "Born in Cascais, surfing since age 3. Moved to Ericeira young and started competing at 9. He has dedicated his life to surfing and traveling to improve his skills.",
    instagram: "https://www.instagram.com/_gabriel.ribeiro7/",
    handle: "@_gabriel.ribeiro7",
  },
];

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
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
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
