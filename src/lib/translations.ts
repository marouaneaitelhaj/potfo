interface Translation {
  role: string;
  skills: {
    title: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      databases: string;
      devops: string;
    };
  };
  experience: {
    title: string;
    current: string;
    to: string;
  };
  projects: {
    title: string;
    items: {
      beatmaker: string;
      exam: string;
      fishing: string;
    };
  };
  education: {
    title: string;
    items: {
      developer: string;
      baccalaureate: string;
    };
    since: string;
  };
}

export const translations: Record<'en' | 'fr', Translation> = {
  en: {
    role: "Full Stack Developer",
    skills: {
      title: "SKILLS",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        devops: "DevOps"
      }
    },
    experience: {
      title: "EXPERIENCE",
      current: "Since",
      to: "to"
    },
    projects: {
      title: "PROJECTS",
      items: {
        beatmaker: "Beatmaker Monetization Platform",
        exam: "Exam and Quiz Platform",
        fishing: "Underwater Fishing Competition Management"
      }
    },
    education: {
      title: "EDUCATION",
      items: {
        developer: "Full Stack Developer (JAVA, Angular, React)",
        baccalaureate: "Scientific Baccalaureate"
      },
      since: "Since"
    }
  },
  fr: {
    role: "Développeur Full Stack",
    skills: {
      title: "COMPÉTENCES",
      categories: {
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de données",
        devops: "DevOps"
      }
    },
    experience: {
      title: "EXPÉRIENCE",
      current: "Depuis",
      to: "à"
    },
    projects: {
      title: "PROJETS",
      items: {
        beatmaker: "Plateforme de monétisation pour beatmakers",
        exam: "Plateforme d'examens et de quiz",
        fishing: "Gestion des compétitions de pêche sous-marine"
      }
    },
    education: {
      title: "FORMATION",
      items: {
        developer: "Développeur Full Stack (JAVA, Angular, React)",
        baccalaureate: "Baccalauréat Scientifique"
      },
      since: "Depuis"
    }
  }
};