import { Car, UtensilsCrossed, Package, Hotel, Facebook, Instagram, Linkedin, Youtube, Twitter, Heart } from "lucide-react";

const services = [
  { icon: Car, name: "Muve Ride", href: "#services" },
  { icon: UtensilsCrossed, name: "Muve Food", href: "#services" },
  { icon: Package, name: "Muve Flash", href: "#services" },
  { icon: Hotel, name: "Muve Hotel", href: "#services" },
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Partners", href: "#partners" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-bold">MUVÉ</span>
            </a>
            <p className="text-background/70 mb-6 text-sm leading-relaxed">
              Muve is Sri Lanka's leading Super App, connecting millions of users with rides, food, deliveries, and hotels through one seamless platform. We're revolutionizing the way people move and experience everyday services.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    <service.icon className="w-4 h-4" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <span className="block text-background font-medium mb-1">Address</span>
                179/1/2 Katugastota Rd, Kandy
              </li>
              <li>
                <span className="block text-background font-medium mb-1">Phone</span>
                +94 81 779 8555<br />
                +94 74 391 8805
              </li>
              <li>
                <span className="block text-background font-medium mb-1">Email</span>
                info@muvemobility.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <div className="flex items-center gap-1">
              © {new Date().getFullYear()} Muve Mobility (Pvt) Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
