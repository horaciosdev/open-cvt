// Definições de tipos para o formato CVT

// Interfaces para os metadados
export interface Meta {
    formatVersion: string;
    createdAt: string;
    updatedAt?: string;
    language: string;
    [key: string]: any; // Permite propriedades adicionais
  }

  // Informações básicas do profissional
  export interface Basics {
    name: string;
    label?: string;
    image?: string;
    summary: string;
    identifiers?: Identifier[];
    location: Location;
    profiles: Profile[];
  }

  export interface Identifier {
    type: string;
    value: string;
  }

  export interface Location {
    address?: string;
    city: string;
    region?: string;
    countryCode: string;
  }

  export interface Profile {
    network: string;
    url: string;
    username?: string;
  }

  // Experiência profissional
  export interface Work {
    organization: string;
    position: string;
    url?: string;
    startDate: string;
    endDate?: string | null;
    highlights?: string[];
    [key: string]: any; // Permite propriedades adicionais
  }

  // Formação acadêmica
  export interface Education {
    institution: string;
    studyType: string;
    area: string;
    startDate: string;
    endDate?: string | null;
    courses?: string[];
    score?: string | number;
  }

  // Certificações
  export interface Certification {
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }

  // Habilidades
  export interface Skill {
    name: string;
    category?: string;
    keywords?: string[];
  }

  // Trabalho voluntário
  export interface Volunteer {
    organization: string;
    position: string;
    startDate: string;
    endDate?: string | null;
    highlights?: string[];
  }

  // Premiações
  export interface Award {
    title: string;
    date: string;
    awarder?: string;
  }

  // Publicações
  export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    url?: string;
  }

  // Interesses
  export interface Interest {
    name: string;
    keywords?: string[];
  }

  // Referências
  export interface Reference {
    name: string;
    reference?: string;
  }

  // Interface principal para o formato completo do currículo
  export interface Curriculum {
    meta: Meta;
    basics: Basics;
    work: Work[];
    education: Education[];
    certifications?: Certification[];
    skills?: Skill[];
    volunteer?: Volunteer[];
    awards?: Award[];
    publications?: Publication[];
    interests?: Interest[];
    references?: Reference[];
  }