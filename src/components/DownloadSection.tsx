import { Apple, Play, Star, Download } from "lucide-react";

export function DownloadSection() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl mx-auto w-72">
                <div className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Screen Content */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-xs text-primary-foreground/80">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-primary-foreground/50 rounded-sm" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-primary-foreground mb-1">MUVÉ</div>
                        <div className="text-xs text-primary-foreground/60">Your Complete Service Platform</div>
                      </div>

                      {/* Service Cards */}
                      <div className="space-y-3 flex-1">
                        {[
                          { icon: "🚗", name: "Book a Ride", time: "2 min away" },
                          { icon: "🍔", name: "Order Food", time: "20+ restaurants" },
                          { icon: "📦", name: "Send Package", time: "Instant pickup" },
                          { icon: "🏨", name: "Book Hotel", time: "Best rates" },
                        ].map((item, i) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-3 p-3 rounded-xl glass"
                          >
                            <div className="text-xl">{item.icon}</div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-primary-foreground">{item.name}</div>
                              <div className="text-xs text-primary-foreground/60">{item.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">4.9 Rating</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">50K+ Downloads</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Download Now
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Get the{" "}
              <span className="gradient-text">Muve App</span>{" "}
              Today
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Download the Muve app and experience the future of on-demand services. Available on iOS and Android – free to download.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-xl hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-xl hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {["Free Download", "No Ads", "Offline Mode", "Secure"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
