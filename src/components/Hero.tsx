import heroImage from "@/assets/hero-barber.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MY CHOICE BARBER interiör"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto section-fade">
        <div className="h-px w-24 mx-auto mb-8 line-gold" />
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">
          Kungsgatan 66A · Uppsala
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6">
          <span className="text-gold-gradient">MY CHOICE</span>
          <br />
          <span className="text-foreground">BARBER</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
          Professionell herrfrisör i hjärtat av Uppsala. Stil, precision och kvalitet.
        </p>
        <a
          href="tel:0729165697"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-medium tracking-wider uppercase hover:brightness-110 transition-all"
        >
          <Phone className="w-4 h-4" />
          Boka nu — 072-916 56 97
        </a>
        <div className="h-px w-24 mx-auto mt-12 line-gold" />
      </div>
    </section>
  );
};

export default Hero;
