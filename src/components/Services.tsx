import { Scissors, Sparkles } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hårklippning",
    description: "Klassisk och modern herrklippning anpassad efter din stil.",
  },
  {
    icon: Scissors,
    title: "Skinfade",
    description: "Skarp och clean skinfade med precision och känsla för detaljer.",
  },
  {
    icon: Sparkles,
    title: "Skäggtrimning",
    description: "Professionell trimning och formning av skägg för ett välvårdat uttryck.",
  },
  {
    icon: Sparkles,
    title: "Tråd & Vax",
    description: "Ansiktsbehandling med tråd och vax för en slätare och fräschare look.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-24 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
          Vad vi erbjuder
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Våra Tjänster
        </h2>
        <div className="h-px w-16 mx-auto mb-16 line-gold" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-sm border border-border hover:border-primary/30 transition-colors group"
            >
              <service.icon className="w-8 h-8 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
