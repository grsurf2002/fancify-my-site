import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import surfskate1 from "@/assets/surfskate-1.jpeg";
import surfskate2 from "@/assets/surfskate-2.jpeg";

const images = [surfskate1, surfskate2];

const SurfSkate = () => {
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
            Surfskate Coaching
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Train your surf skills on land — work on technique, flow and muscle memory independent of wave conditions.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {images.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={img}
                  alt={`Surfskate coaching ${i + 1}`}
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
              Surfskate coaching has a duration of around 1h15 from the time we meet.
            </p>
            <p>
              We start by defining goals for the session and future. If you are already a member of our surf coaching team, we will take the goals you are working on in surf and translate them to the Surfskate.
            </p>
            <p>
              Afterwards we start with a quick warmup followed by exercises to work on the goals defined, with constant ongoing feedback and corrections.
            </p>
            <p>
              By the end of the session we do a recap and share some exercises or references to keep working on until the next Surf or Surfskate session.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurfSkate;
