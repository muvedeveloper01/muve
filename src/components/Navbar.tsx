import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 glass shadow-elevated"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">MUVÉ</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground/70" />
            ) : (
              <Moon className="w-5 h-5 text-foreground/70" />
            )}
          </button>
          <Button variant="outline" size="sm">
            Partner Login
          </Button>
          <Button size="sm">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground/70" />
            ) : (
              <Moon className="w-5 h-5 text-foreground/70" />
            )}
          </button>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              Partner Login
            </Button>
            <Button size="sm" className="flex-1">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
