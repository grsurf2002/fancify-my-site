import { MapPin, Waves, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Column 1 — Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: "Home", href: "/" },
                { label: "Surf Coaching", href: "/surf-coaching" },
                { label: "Surfskate", href: "/surfskate" },
                { label: "Surf Trips", href: "/surf-trips" },
                { label: "Prices", href: "/prices" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Legal */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-3">
              Legal
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Location */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-3">
              Contact & Location
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Based in Ericeira, Portugal
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Waves className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Coaching across Portugal's best waves
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/351912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:upgradesurfing@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  upgradesurfing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="https://www.instagram.com/upgradesurfing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @upgradesurfing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Map */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-3">
              Where We Coach
            </h4>
            <div className="rounded-lg overflow-hidden h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2807.127922312719!2d-9.419611472478818!3d38.97018564076593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2spt!4v1774007778737!5m2!1sen!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Upgrade Surf Coaching location in Ericeira"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container px-4 py-4 flex flex-col items-center gap-1 text-center">
          <p className="text-sm font-medium text-foreground">
            Surf Coaching in Ericeira, Portugal - Upgrade Surf Coaching
          </p>
          <p className="text-sm font-medium text-foreground">
            Train smarter. Surf better.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Upgrade Surfing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
