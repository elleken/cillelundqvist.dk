const Testimonials = () => {
  const testimonials = [
    {
      text: "Jeg har været hos Cille flere gange nu, og jeg går altid derfra med følelsen af, at mit hår bare sidder helt rigtigt. Hun forstår virkelig, hvad jeg ønsker.",
    },
    {
      text: "Jeg var lidt nervøs for at få lavet min farve, men Cille tog sig virkelig tid til at snakke med mig først. Jeg blev så glad for resultatet!",
    },
    {
      text: "Det bedste ved at komme her er, at jeg føler mig lyttet til. Jeg behøver ikke altid selv vide præcis, hvad jeg vil – Cille hjælper mig med at finde det rigtige.",
    },
    {
      text: "Jeg havde længe været træt af min hårfarve, men efter min behandling hos Cille følte jeg virkelig, at jeg havde fået mit hår tilbage. Jeg elsker det!",
    },
    {
      text: "Det er blevet mit faste sted at få ordnet hår. Jeg føler mig altid godt tilpas, og jeg ved, at jeg går derfra med et resultat, jeg bliver glad for.",
    },
    {
      text: "Professionel, sød og utrolig dygtig. Jeg føler mig altid i trygge hænder.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Det siger mine kunder
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
