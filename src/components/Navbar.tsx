import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Upgrade Surfing" className="h-10 w-10 rounded-lg" />
          <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-foreground">UPGRADE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium tracking-widest text-foreground hover:text-primary transition-colors uppercase">
            Services
          </a>
          <a href="/surf-trips" className="text-sm font-medium tracking-widest text-foreground hover:text-primary transition-colors uppercase">
            Surf Trips
          </a>
          <a href="/prices" className="text-sm font-medium tracking-widest text-foreground hover:text-primary transition-colors uppercase">
            Prices
          </a>
          <a href="/#team" className="text-sm font-medium tracking-widest text-foreground hover:text-primary transition-colors uppercase">
            Team
          </a>
          <a
            href="/#contact"
            className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4 animate-fade-up">
          <a href="/#services" onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Services
          </a>
          <a href="/surf-trips" onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Surf Trips
          </a>
          <a href="/prices" onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Prices
          </a>
          <a href="/#team" onClick={() => setMenuOpen(false)} className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Team
          </a>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
