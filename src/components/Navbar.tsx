import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Upgrade Surfing" className="h-10 w-10 rounded-lg" />
          <span className="font-heading text-2xl font-bold tracking-wider text-foreground">UPGRADE</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#services" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Services
          </a>
          <a href="#team" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
            Team
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
