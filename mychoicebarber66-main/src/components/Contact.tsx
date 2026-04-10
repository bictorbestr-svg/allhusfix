import { Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
          Hör av dig
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Boka Din Tid
        </h2>
        <div className="h-px w-16 mx-auto mb-12 line-gold" />

        <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
          Ring eller sms:a oss för att boka klippning eller ansiktsbehandling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href="tel:0729165697" className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium">072-916 56 97</span>
          </a>

          <a
            href="https://maps.google.com/?q=Kungsgatan+66A+Uppsala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium">Kungsgatan 66A, Uppsala</span>
          </a>

          <a
            href="https://www.instagram.com/my_choice_barber/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium">@my_choice_barber</span>
          </a>
        </div>

        <a
          href="tel:0729165697"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm font-medium tracking-wider uppercase hover:brightness-110 transition-all"
        >
          <Phone className="w-4 h-4" />
          Ring & Boka
        </a>
      </div>
    </section>
  );
};

export default Contact;
