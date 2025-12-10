import { Car, UtensilsCrossed, Package, Hotel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Muve Ride",
    subtitle: "Passenger & Rider Transport",
    description: "Safe, reliable, and affordable transportation at your fingertips. Book a ride in seconds and travel with verified drivers.",
    color: "from-blue-500 to-cyan-500",
    features: ["Real-time tracking", "Verified drivers", "Multiple vehicle options", "Cashless payments", "Live meter"],
  },
  {
    icon: UtensilsCrossed,
    title: "Muve Food",
    subtitle: "Online Food Delivery",
    description: "Craving something delicious? Order from hundreds of restaurants and enjoy doorstep delivery within minutes.",
    color: "from-orange-500 to-red-500",
    features: ["200+ restaurants", "Live order tracking", "Special offers", "Dietary filters"],
  },
  {
    icon: Package,
    title: "Muve Flash",
    subtitle: "Instant Courier & Item Delivery",
    description: "Send packages across the city in record time. Perfect for documents, parcels, and urgent deliveries.",
    color: "from-yellow-500 to-amber-500",
    features: ["Same-hour delivery", "Package insurance", "Real-time updates", "Business solutions"],
  },
  {
    icon: Hotel,
    title: "Muve Hotel",
    subtitle: "Hotel & Room Booking",
    description: "Discover and book the best hotels across Sri Lanka. From budget stays to luxury resorts, we've got you covered.",
    color: "from-purple-500 to-pink-500",
    features: ["Best price guarantee", "Free cancellation", "Verified reviews", "Travel packages"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Services
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Everything You Need,{" "}
            <span className="gradient-text">One App</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of services designed to make your life easier. From rides to food, deliveries to hotels – we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
