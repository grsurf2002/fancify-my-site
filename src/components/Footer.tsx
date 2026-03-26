import { MapPin, Waves, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {/* Column 1 — Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-foreground mb-2">
              Quick Links
            </h4>
            <ul className="space-y-0.5">
              {[
                { label: "Home", href: "/" },
                { label: "Surf Coaching", href: "/surf-coaching" },
                { label: "Who Is Your Surf Coach", href: "/#team" },
                { label: "Surfskate", href: "/surfskate" },
                { label: "Surf Trips", href: "/surf-trips" },
                { label: "Prices", href: "/prices" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Legal */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-foreground mb-2">
              Legal
            </h4>
            <ul className="space-y-0.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Location */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-foreground mb-2">
              Contact & Location
            </h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">Based in Ericeira, Portugal</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Waves className="h-3 w-3 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">Coaching across Portugal's best waves</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-primary shrink-0" />
                <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-primary shrink-0" />
                <a href="mailto:upgradesurfing@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">upgradesurfing@gmail.com</a>
              </li>
              <li className="flex items-center gap-1.5">
                <Instagram className="h-3 w-3 text-primary shrink-0" />
                <a href="https://www.instagram.com/upgradesurfing/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">@upgradesurfing</a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Map */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-foreground mb-2">
              Where We Coach
            </h4>
            <div className="rounded-lg overflow-hidden h-24">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d175.44576585605427!2d-9.419073114197161!3d38.97007635073217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xa4fa469d0cb4b8f9%3A0x968d586a442cfe9d!2sUpgrade%20surf%20Coaching%2C%20Forum%2C%20Urbaniza%C3%A7%C3%A3o%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Av.%20S%C3%A3o%20Sebasti%C3%A3o%20Loja%20G%2C%202655-270%20Ericeira!3m2!1d38.9704261!2d-9.4189998!4m5!1s0xa4fa469d0cb4b8f9%3A0x968d586a442cfe9d!2sUpgrade%20surf%20Coaching%2C%20Forum%2C%20Urbaniza%C3%A7%C3%A3o%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Av.%20S%C3%A3o%20Sebasti%C3%A3o%20Loja%20G%2C%202655-270%20Ericeira!3m2!1d38.9704261!2d-9.4189998!5e1!3m2!1sen!2spt!4v1774524308805!5m2!1sen!2spt"
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
        <div className="container px-4 py-2 flex flex-col items-center text-center">
          <p className="text-xs font-medium text-foreground">
            Surf Coaching in Ericeira, Portugal - Upgrade Surf Coaching
          </p>
          <p className="text-xs font-medium text-foreground">
            Train smarter. Surf better.
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            © {new Date().getFullYear()} Upgrade Surfing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
