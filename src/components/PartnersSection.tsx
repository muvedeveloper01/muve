import { Car, Bike, UtensilsCrossed, Hotel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  {
    icon: Car,
    title: "Drivers",
    description: "Join our network of professional drivers. Flexible hours, competitive earnings, and full support.",
    benefits: ["Set your own schedule", "Weekly payouts", "Insurance coverage", "Training provided"],
    cta: "Become a Driver",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bike,
    title: "Riders",
    description: "Deliver food and packages across the city. Perfect for those who love being on the move.",
    benefits: ["Flexible timings", "Daily earnings", "Low entry barrier", "Bike provided options"],
    cta: "Start Delivering",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Expand your reach and grow your business. Connect with thousands of hungry customers.",
    benefits: ["Increased visibility", "Order management system", "Marketing support", "Analytics dashboard"],
    cta: "List Your Restaurant",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Fill more rooms and reach more travelers. Our platform connects you with guests directly.",
    benefits: ["Zero listing fees", "Instant bookings", "Guest reviews", "Revenue analytics"],
    cta: "Partner With Us",
    color: "from-purple-500 to-pink-500",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="gradient-orb gradient-orb-1 top-0 left-1/4 opacity-30" />
      <div className="gradient-orb gradient-orb-3 bottom-0 right-1/4 opacity-30" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground/80">Partner With Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Grow Your Business with{" "}
            <span className="gradient-text">Muve</span>
          </h2>

          <p className="text-lg text-primary-foreground/70">
            Join thousands of partners who are already growing their businesses with Muve. Whether you're a driver, restaurant, or hotel – we have a place for you.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {partnerTypes.map((partner, index) => (
            <div
              key={partner.title}
              className="group glass rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <partner.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground">For {partner.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-primary-foreground/70 mb-6">{partner.description}</p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {partner.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${partner.color}`} />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero-outline" className="w-full group/btn">
                {partner.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
