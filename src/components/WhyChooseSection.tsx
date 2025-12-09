import { Zap, Shield, Clock, Smartphone, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get matched with drivers, restaurants, or hotels in seconds. Our smart algorithms ensure minimal wait times.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade encryption protects your data. All partners are verified and background-checked.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock service availability. Our support team is always ready to assist you.",
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description: "Intuitive design that anyone can navigate. Book services in just a few taps.",
  },
  {
    icon: Users,
    title: "Partner Ecosystem",
    description: "Thousands of verified drivers, restaurants, and hotels ready to serve you.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Consistent quality standards across all services. Your satisfaction is our priority.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="gradient-orb gradient-orb-1 top-1/4 -right-20 opacity-30" />
      <div className="gradient-orb gradient-orb-2 bottom-1/4 -left-20 opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground/80">Why Muve?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Why Choose{" "}
            <span className="gradient-text">Muve</span>
          </h2>

          <p className="text-lg text-primary-foreground/70">
            We're not just another app – we're your trusted partner for everyday services. Here's what makes us different.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
