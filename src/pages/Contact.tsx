import { useState } from "react";
import contactHeroBg from "@/assets/contact-hero.png";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = `New Booking Request%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AWhatsApp: ${encodeURIComponent(formData.whatsapp)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/351911001039?text=${text}`, "_blank");

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setSending(false);
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-28 pb-16 md:pt-36 md:pb-20"
        style={{ backgroundImage: `url(${contactHeroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container px-4 max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase">
            Contact Our Surf Coaches in Ericeira
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Looking for a surf coach in Ericeira? Get in touch with our team to book your personalized surf coaching session.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 uppercase">
                Book Your Surf Coaching Session
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+351 ..."
                    value={formData.whatsapp}
                    onChange={handleChange}
                    maxLength={20}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your surf level and what you'd like to achieve..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={5}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full py-3 text-sm font-semibold tracking-wider uppercase"
                  size="lg"
                >
                  <Send size={16} />
                  Book Your Surf Coaching Session
                </Button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-5">
                <a
                  href="https://wa.me/351911001039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+351 911 001 039</p>
                  </div>
                </a>

                <a
                  href="mailto:upgradesurfing@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                  aria-label="Send us an email"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</p>
                    <p className="text-sm text-muted-foreground">upgradesurfing@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+351911001039"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                  aria-label="Call us"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Phone</p>
                    <p className="text-sm text-muted-foreground">+351 911 001 039</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/upgrade_surfcoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Instagram</p>
                    <p className="text-sm text-muted-foreground">@upgrade_surfcoaching</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Ericeira, Portugal</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="Upgrade Surf Coaching location in Ericeira, Portugal"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d175.44576585605427!2d-9.419073114197161!3d38.97007635073217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xa4fa469d0cb4b8f9%3A0x968d586a442cfe9d!2sUpgrade%20surf%20Coaching%2C%20Forum%2C%20Urbaniza%C3%A7%C3%A3o%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Av.%20S%C3%A3o%20Sebasti%C3%A3o%20Loja%20G%2C%202655-270%20Ericeira!3m2!1d38.9704261!2d-9.4189998!4m5!1s0xa4fa469d0cb4b8f9%3A0x968d586a442cfe9d!2sUpgrade%20surf%20Coaching%2C%20Forum%2C%20Urbaniza%C3%A7%C3%A3o%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Av.%20S%C3%A3o%20Sebasti%C3%A3o%20Loja%20G%2C%202655-270%20Ericeira!3m2!1d38.9704261!2d-9.4189998!5e1!3m2!1sen!2spt!4v1774524308805!5m2!1sen!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
