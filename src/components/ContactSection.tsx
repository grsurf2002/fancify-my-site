import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ocean">
      <div className="container px-4 text-center max-w-2xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
          Get Started
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          Book Your Session
        </h2>
        <p className="text-muted-foreground mb-12">
          Ready to upgrade your surfing? Reach out and schedule your class today.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:UPGRADESURFING@GMAIL.COM"
            className="flex items-center justify-center gap-3 group"
          >
            <Mail className="text-primary" size={20} />
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              upgradesurfing@gmail.com
            </span>
          </a>
          <a
            href="tel:+351911001039"
            className="flex items-center justify-center gap-3 group"
          >
            <Phone className="text-primary" size={20} />
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              +351 911 001 039
            </span>
          </a>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="text-primary" size={20} />
            <span className="text-lg text-muted-foreground">
              Ericeira, Portugal
            </span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="mailto:UPGRADESURFING@GMAIL.COM"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-wider uppercase text-sm hover:shadow-glow transition-all duration-300"
          >
            Schedule Your Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
