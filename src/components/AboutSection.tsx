import { Shield, Lightbulb, TrendingUp, Users, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Enterprise-grade security protecting your data and transactions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technology powering seamless experiences.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description: "Expanding across Sri Lanka with new services and partners.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by Sri Lankans, for Sri Lankans.",
  },
  {
    icon: Globe,
    title: "Island-Wide Coverage",
    description: "Serving communities across all major cities and towns.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time updates and instant service fulfillment.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 gradient-orb gradient-orb-2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 gradient-orb gradient-orb-1 opacity-20" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              About Muve
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Revolutionizing{" "}
              <span className="gradient-text">Sri Lanka's</span>{" "}
              Digital Ecosystem
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Muve is a next-generation Sri Lankan Super App that connects passengers, riders, restaurants, hotels, and delivery partners through a unified digital ecosystem.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              We bring smart, efficient, and secure technology to everyday services, making life easier for millions across the island. From your daily commute to special occasions, Muve is your trusted companion.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Services" },
                { value: "9+", label: "Cities" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 text-center shadow-card hover:shadow-glow transition-shadow duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
