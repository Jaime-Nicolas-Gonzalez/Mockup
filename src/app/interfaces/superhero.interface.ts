// hero.model.ts
export interface Superhero {
    name: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    appearance: {
      gender: string;
      height: [string, string];
      weight: [string, string];
      eyeColor: string;
      hairColor: string;
    };
    biography: {
      fullName: string;
      alterEgos: string;
      // Puedes agregar más propiedades según sea necesario
    };
    connections: {
      groupAffiliation: string;
      relatives: string;
      // Puedes agregar más propiedades según sea necesario
    };
    images: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
  