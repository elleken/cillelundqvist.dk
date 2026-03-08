import cillePortrait from "@/assets/cille-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Om Os</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cille Lundqvist er mere end bare en frisørsalon—det er en destination
            for dem, der sætter pris på kunsten i raffineret styling og exceptionel service.
          </p>
        </div>

        <div className="mb-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4]">
              <img
                src={cillePortrait}
                alt="Cille Lundqvist"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 prose prose-lg">
            <p className="text-foreground/90 leading-relaxed mb-6">
              Grundlagt på principperne om elegance, ekspertise og autenticitet, er vores salon blevet 
              et fristed for klienter, der søger mere end bare en klipning. Vi mener, at hvert besøg skal 
              være en oplevelse—en der efterlader dig selvsikker, forfrisket og virkelig værdsat.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Vores hold af dygtige frisører kombinerer traditionelle teknikker med moderne trends og 
              sikrer, at hver behandling er skræddersyet til din unikke stil og præferencer. Fra præcise 
              klipninger til farveomdannelser behandler vi hver detalje med omhu og dedikation.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Træd ind i vores moderne, indbydende rum, hvor luksus møder komfort. Vi er forpligtet til 
              at bruge bæredygtige produkter af høj kvalitet, der nærer dit hår og samtidig beskytter 
              miljøet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;