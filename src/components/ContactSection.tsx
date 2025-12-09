import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["179/1/2 Katugastota Rd,", "Kandy, Sri Lanka"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+94 81 779 8555", "+94 74 391 8805"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@muvemobility.com", "support@muve.lk"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24/7 Customer Support", "Office: Mon-Fri 9AM-6PM"],
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="gradient-orb gradient-orb-1 top-1/4 right-0 opacity-30" />
      <div className="gradient-orb gradient-orb-2 bottom-1/4 left-0 opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground/80">Get In Touch</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Let's{" "}
            <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-lg text-primary-foreground/70">
            Have questions or need assistance? Our team is here to help you 24/7. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-primary-foreground/70">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-primary-foreground/80 mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary-foreground/80 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-primary-foreground/80 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-primary-foreground/80 mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
