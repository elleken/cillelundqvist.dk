import cillePortrait480 from "@/assets/cille-portrait-480.webp";
import cillePortrait720 from "@/assets/cille-portrait-720.webp";
import cillePortrait900 from "@/assets/cille-portrait-900.webp";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">
            Cille Lundqvist
          </h1>
          <p className="text-xl md:text-2xl font-heading text-muted-foreground mb-6">
            Din frisør på Strandvejen i Hellerup
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="mb-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4]">
              <img
                src={cillePortrait720}
                srcSet={`${cillePortrait480} 480w, ${cillePortrait720} 720w, ${cillePortrait900} 900w`}
                sizes="(min-width: 768px) 40vw, 90vw"
                alt="Cille Lundqvist"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 prose prose-lg">
            <p className="text-foreground font-heading text-2xl md:text-3xl font-bold leading-snug mb-6">
              Med mere end 20 års erfaring i frisørfaget har jeg opbygget en
              passion for at skabe hår, der både ser smukt ud og føles sundt.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Senest har jeg arbejdet 5 år på Østerbro, hvor fokus altid har
              været på kvalitet, personlig rådgivning og skræddersyede
              behandlinger.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Nu er jeg rykket til Hellerup – centralt beliggende på den
              hyggelige Strandvej. Hos mig handler en frisørbehandling om mere
              end bare hår. Det er en oplevelse med både ro og nærvær, hvor der
              er tid til at finde frem til den stil, der passer perfekt til
              dig, din personlighed og din hverdag.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Dit hår er en del af din personlighed. Derfor tager jeg altid
              udgangspunkt i dig, din hårtype og din livsstil, før vi går i
              gang. Jeg er specialiseret inden for hårfarvning, balayage og
              klipning, og jeg bruger kun produkter, der plejer og beskytter.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-8">
              Jeg arbejder med <strong>Natulique</strong>, en økologisk,
              eksklusiv og bæredygtig hårplejeserie, der er kendt for sine
              naturlige ingredienser og skånsomme formuleringer. Produkterne er
              udviklet med omtanke for både{" "}
              <strong>hår, hovedbund og miljø</strong>, uden at gå på kompromis
              med resultatet.
            </p>
            <a
              href="https://cille-lundqvist.planway.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Book her
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
