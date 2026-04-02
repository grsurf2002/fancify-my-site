import { Waves, Compass, Video, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import videoAnalysisImg from "@/assets/video-analysis.jpeg";
import beachCoachingImg from "@/assets/beach-coaching.jpeg";
import surfCoachingImg from "@/assets/coaching-1.jpeg";
import surfTripsImg from "@/assets/surf-trips-main.png";

const services = [
  {
    icon: Waves,
    title: "Surf Coaching",
    description:
      "Tailored surf coaching to help you reach your full potential. We focus on technique, wave reading, positioning, and confidence, whether you're joining beginner surf lessons or progressing to more advanced surfing.",
    image: surfCoachingImg,
    link: "/surf-coaching",
  },
  {
    icon: Video,
    title: "Video Analysis",
    description:
      "Video analysis is a key part of our surf coaching. Break down your movements in detail, identify areas for improvement, and track your progress over time.",
    image: videoAnalysisImg,
  },
  {
    icon: Compass,
    title: "Surf Skate Lessons",
    description:
      "We use surfskating to improve your surfing faster: refine technique, build muscle memory, and correct mistakes efficiently, even without waves. A powerful complement to your surf coaching in Ericeira.",
    image: "https://freight.cargo.site/w/750/i/B1733479139200985709999216607689/F5B6F47B-F0DF-4975-BD41-687861DF8F40-2.png",
    link: "/surfskate",
  },
  {
    icon: Plane,
    title: "Surf Trips",
    description:
      "Join us on unforgettable surf trips around the world. From Algarve to Sri Lanka, Morocco and the Maldives, we combine great waves with expert surf coaching and a relaxed, high-quality experience.",
    image: surfTripsImg,
    imagePosition: "center 65%",
    link: "/surf-trips",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-ocean">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground uppercase">
            Our Surf Coaching Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="text-primary" size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline transition-colors"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
