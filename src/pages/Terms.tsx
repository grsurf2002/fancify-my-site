import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-sm text-muted-foreground space-y-6">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">1. Services</h2>
          <p>Upgrade Surf Coaching provides surf coaching, surfskate coaching and surf trip services in Ericeira, Portugal and other destinations. All services are subject to availability and weather conditions.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">2. Bookings & Payments</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bookings can be made via email, WhatsApp or Instagram</li>
            <li>Payment is required before or at the start of the session/package</li>
            <li>Packages have specific validity periods as stated at the time of purchase</li>
            <li>Prices are subject to change without prior notice for new bookings</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">3. Cancellations & Rescheduling</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sessions may be rescheduled due to weather or ocean conditions at the coach's discretion</li>
            <li>Cancellations by the client must be made at least 24 hours in advance</li>
            <li>Late cancellations or no-shows may result in the session being counted as used</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">4. Safety & Liability</h2>
          <p>Participants acknowledge that surfing and surfskate activities carry inherent risks. Upgrade Surf Coaching takes all reasonable precautions to ensure safety, but participants are responsible for their own physical fitness and must follow coach instructions at all times.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">5. Media & Content</h2>
          <p>Photos and videos taken during sessions may be used for coaching purposes (video analysis) and, with your consent, for promotional materials on our website and social media.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">6. Surf Trips</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Trip bookings require a deposit to secure your spot</li>
            <li>Specific cancellation policies apply to each trip and will be communicated at booking</li>
            <li>Upgrade Surf Coaching is not liable for travel-related issues such as flights, visas or travel insurance</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">7. Contact</h2>
          <p>For any questions about these terms, please contact us at upgradesurfing@gmail.com.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
