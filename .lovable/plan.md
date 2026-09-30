# SEO-plan: Cille Lundqvist hjemmeside

Baseret på SEO-ekspertens feedback (Cille hjemmeside.pdf).

## Ændringer

### 1. Titletag (index.html)
Skiftes til: **"Frisør i Hellerup | Cille Lundqvist – din frisør på Strandvejen"**
Så søgeordet "frisør i Hellerup" indgår.

### 2. Hero-billede mindre
Gøres lidt mindre, så man kan se, at der kommer indhold nedenunder, når man lander på siden.

### 3. Header: "frisør i Hellerup" ved navnet
Tilføj teksten "frisør i Hellerup" ved "Cille Lundqvist" i headeren.

### 4. H1 under hero
Tilføj en stor H1 i starten af siden: **"Cille Lundqvist – din frisør på Strandvejen i Hellerup"**

### 5. Ny brødtekst (Om Mig-sektionen)
Erstat den nuværende tekst med ekspertens nye tekst:
- Indledning med fed: "Med mere end 20 års erfaring i frisørfaget har jeg opbygget en passion for at skabe hår, der både ser smukt ud og føles sundt."
- Afsnit om 5 år på Østerbro
- Afsnit om flytningen til Hellerup / Strandvejen
- Afsnit om specialisering (hårfarvning, balayage, klipning)
- Afsnit om Natulique med fed på **Natulique** og **hår, hovedbund og miljø**

### 6. CTA-knap under brødteksten
"Book her"-knap i bunden af Om Mig-sektionen, der linker til Planway-booking.

### 7. Linje under Produkter
Tilføj under produktsektionen: "Jeg arbejder med Natulique – en eksklusiv, økologisk og bæredygtig hårplejeserie af højeste kvalitet"

### 8. Testimonials-sektion
Ny sektion med kundeudtalelser (gerne med billeder), placeret før Produkter.

## Tekniske detaljer
- `index.html`: titletag + meta description opdateres med "frisør i Hellerup"
- `src/components/Header.tsx`: tekst ved navnet
- `src/components/Hero.tsx`: mindre højde
- `src/components/About.tsx`: ny H1, ny brødtekst, CTA-knap
- `src/components/Products.tsx`: Natulique-linje
- Ny komponent: `src/components/Testimonials.tsx` (placeholder-udtalelser, som Cille kan erstatte med rigtige)
- `src/pages/Index.tsx`: indsæt Testimonials før Products

## Åbne spørgsmål
- Testimonials: Har Cille rigtige kundeudtalelser/billeder, eller skal jeg lave placeholders?
