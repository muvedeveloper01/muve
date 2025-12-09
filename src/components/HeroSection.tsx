import { ArrowRight, Smartphone, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background Orbs */}
      <div className="gradient-orb gradient-orb-1 -top-40 -left-40 animate-float" />
      <div className="gradient-orb gradient-orb-2 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
      <div className="gradient-orb gradient-orb-3 bottom-0 left-1/3 animate-float" style={{ animationDelay: "4s" }} />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(260 68% 60%) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-up opacity-0 stagger-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Sri Lanka's #1 Super App
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
              One Super App for{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Ride, Food,</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Delivery</span>
              </span>{" "}
              &{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Hotels</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-3">
              A unified platform designed to make travel, food, logistics, and hotel booking effortless for everyone across Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 stagger-4">
              <Button variant="hero" size="lg" className="group">
                <Smartphone className="w-5 h-5" />
                Download the App
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                <Handshake className="w-5 h-5" />
                Partner With Muve
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start animate-fade-up opacity-0 stagger-5">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">50K+</div>
                <div className="text-sm text-primary-foreground/60">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">1000+</div>
                <div className="text-sm text-primary-foreground/60">Partner Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/60">Restaurants</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 relative animate-fade-up opacity-0 stagger-4">
            <div className="relative mx-auto w-72 md:w-80 lg:w-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-30 animate-pulse-glow" />
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Screen Content */}
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">MUVÉ</div>
                    <div className="text-sm text-primary-foreground/60 mb-8">Your Complete Service Platform</div>
                    
                    {/* App Icons Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-[200px]">
                      {[
                        { icon: "🚗", label: "Ride" },
                        { icon: "🍔", label: "Food" },
                        { icon: "📦", label: "Flash" },
                        { icon: "🏨", label: "Hotel" },
                      ].map((item, i) => (
                        <div
                          key={item.label}
                          className="glass rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-pointer"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="text-2xl mb-1">{item.icon}</div>
                          <div className="text-xs text-primary-foreground/80">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
