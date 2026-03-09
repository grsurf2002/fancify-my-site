import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coaching1 from "@/assets/coaching-1.jpeg";
import coaching2 from "@/assets/coaching-2.jpeg";
import coaching5 from "@/assets/coaching-5.jpeg";

const images = [coaching1, coaching2, coaching5];

const SurfCoaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ocean">
        <div className="container px-4 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Our Approach
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Surf Coaching / Lesson
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Tailored coaching to help you reach your full potential. We focus on technique, wave reading, positioning and confidence.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={img}
                  alt={`Surf coaching session ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-16 md:py-24 bg-ocean">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">
            How Our Sessions Work
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Each coaching session lasts approximately 2.5 to 3 hours, starting from the moment you arrive at the beach.
            </p>
            <p>
              We don't train at a fixed location. Instead, we carefully select the best surf spot for the day, depending on ocean conditions and the level of the surfer or group. Our training areas cover the coastline between Ericeira, Peniche, and Carcavelos, allowing us to find the best possible waves for your progression.
            </p>
            <p>
              At the beginning of the session, we will set clear goals for the training based on your current level and what you want to improve.
            </p>
            <p>
              During the session, we may occasionally ask you to come out of the water so we can review some of your waves directly on the screen. This allows us to give immediate technical feedback, helping you understand what to adjust and apply it straight away in the water.
            </p>
            <p>
              At the end of the session, we will do a full video analysis together, reviewing your waves and defining specific goals for the week ahead so you can continue improving.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Members */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">
            Monthly Coaching Members
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            Surfers with a monthly subscription also receive a detailed session review, including performance metrics such as:
          </p>

          <ul className="space-y-4 text-muted-foreground text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              Number of waves surfed
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              Wave selection analysis
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              Technical feedback
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              Progress tracking over time
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-8">
            This system allows us to monitor your development and keep track of your progress throughout your training program.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurfCoaching;
