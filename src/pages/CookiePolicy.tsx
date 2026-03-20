import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Cookie Policy
        </h1>

        <div className="prose prose-sm text-muted-foreground space-y-6">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website. They help us improve your experience and understand how our site is used.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site, so we can improve content and performance.</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">3. Third-Party Cookies</h2>
          <p>We may use third-party services such as Google Analytics and Google Maps that set their own cookies. These services have their own privacy and cookie policies.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">4. Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground">5. Contact</h2>
          <p>If you have questions about our use of cookies, please contact us at info@upgradesurfing.com.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
