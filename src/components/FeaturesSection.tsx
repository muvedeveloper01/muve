import { MapPin, CreditCard, Users, BarChart3, Layers, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your ride, food order, or package in real-time on the map. Know exactly when to expect arrival.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options including cards, mobile wallets, and cash. All transactions are encrypted.",
  },
  {
    icon: Users,
    title: "Smart Driver Assignment",
    description: "AI-powered matching connects you with the nearest and most suitable driver for your needs.",
  },
  {
    icon: BarChart3,
    title: "Partner Dashboards",
    description: "Comprehensive analytics and management tools for restaurants, hotels, and delivery partners.",
  },
  {
    icon: Layers,
    title: "Multi-Service Integration",
    description: "Seamlessly switch between services. Book a ride to a restaurant, then order dessert for home delivery.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay informed with timely updates about your orders, rides, bookings, and exclusive offers.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Background Glow */}
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20" />
              
              {/* Main Card */}
              <div className="relative glass rounded-3xl p-8 shadow-elevated">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Super App Features</h3>
                  <p className="text-muted-foreground text-sm">Powerful technology at your fingertips</p>
                </div>

                {/* Feature Showcase */}
                <div className="space-y-4">
                  {features.slice(0, 3).map((feature, index) => (
                    <div
                      key={feature.title}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description.slice(0, 50)}...</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex justify-around text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">&lt;2s</div>
                      <div className="text-xs text-muted-foreground">Load Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">256-bit</div>
                      <div className="text-xs text-muted-foreground">Encryption</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Platform Features
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Powered by{" "}
              <span className="gradient-text">Smart Technology</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Our platform is built with cutting-edge technology to provide you with the fastest, most reliable, and secure experience possible.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
