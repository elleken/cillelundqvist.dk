import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria S.",
      text: "Cille er utrolig dygtig og tager sig tid til at lytte. Min balayage har aldrig set bedre ud – jeg får komplimenter overalt!",
    },
    {
      name: "Louise H.",
      text: "Endelig en frisør der forstår mit hår. Stemningen i salonen er rolig og hyggelig, og resultatet er altid i top.",
    },
    {
      name: "Anne K.",
      text: "Jeg har fulgt Cille i mange år. Hun er professionel, sød og bruger de bedste produkter. Kan varmt anbefales!",
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
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-heading font-semibold text-foreground">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
