import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-sm text-muted-foreground space-y-6">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">1. Who We Are</h2>
          <p>Upgrade Surf Coaching operates surf coaching, surfskate coaching and surf trip services based in Ericeira, Portugal. This privacy policy explains how we collect, use and protect your personal data.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">2. Information We Collect</h2>
          <p>We may collect the following information when you contact us, book a session or use our website:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and contact details (email, phone number)</li>
            <li>Surfing experience and fitness level</li>
            <li>Payment information (processed securely via third-party providers)</li>
            <li>Photos and video footage taken during coaching sessions</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and improve our coaching services</li>
            <li>To communicate with you about bookings and sessions</li>
            <li>To send you updates and promotions (only with your consent)</li>
            <li>To track your surf progression and provide video analysis</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">4. Data Sharing</h2>
          <p>We do not sell your personal data. We may share information with trusted third parties only to process payments, provide coaching services or comply with legal obligations.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">5. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">6. Your Rights</h2>
          <p>Under GDPR, you have the right to access, correct, delete or restrict the processing of your personal data. Contact us at info@upgradesurfing.com to exercise your rights.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">7. Contact</h2>
          <p>For any privacy-related questions, please contact us at info@upgradesurfing.com.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
