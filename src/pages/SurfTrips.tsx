import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SurfTrips = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-wider text-foreground uppercase">
            Upgrade Surf Trips
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Coming soon — stay tuned for our upcoming surf trip destinations.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SurfTrips;
