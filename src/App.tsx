import { Github, Linkedin, Mail, Phone, Code2, Terminal, GraduationCap, Briefcase } from 'lucide-react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

function App() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-mono scanlines">
      <LanguageToggle />
      
      {/* Header/Hero Section */}
      <header className="px-6 py-20 text-center border-b border-[var(--primary)]/30 relative overflow-hidden">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--primary)] glow cursor">
            MAROUANE AIT EL HAJ
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-[var(--text)]/80">{t.role}</h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: 'mailto:aitelhajmarouane00@gmail.com' },
              { icon: Phone, href: 'tel:+212648513413' },
              { icon: Github, href: 'https://github.com/marouaneaitelhaj?tab=repositories' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/marouane-ait-elhaj/' }
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors p-2 rounded-full border border-[var(--primary)]/30 hover:border-[var(--primary)] glow-border"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-20">
        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center text-[var(--primary)]">
            <Terminal className="mr-2" />
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries({
              [t.skills.categories.languages]: ["Java", "JavaScript", "TypeScript", "PHP", "C", "C#"],
              [t.skills.categories.frontend]: ["Angular", "React", "Vue.js", "React Native", "Tailwind", "Bootstrap"],
              [t.skills.categories.backend]: ["Spring Boot", ".NET", "Symfony", "Laravel", "Node.js", "ExpressJS"],
              [t.skills.categories.databases]: ["MySQL", "Postgres", "MongoDB"],
              [t.skills.categories.devops]: ["GitHub Actions", "Docker", "Google Cloud"]
            }).map(([category, items]) => (
              <div key={category} className="border border-[var(--primary)]/30 p-6 rounded-lg backdrop-blur-sm hover:border-[var(--primary)]/50 transition-colors glow-border">
                <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="mr-2 text-[var(--primary)]">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center text-[var(--primary)]">
            <Briefcase className="mr-2" />
            {t.experience.title}
          </h2>
          <div className="space-y-8">
            {[
              {
                role: language === 'fr' ? "Développeur Full Stack" : "Full Stack Developer",
                company: "MOBILETIC",
                duration: `${t.experience.current} ${language === 'fr' ? 'mai' : 'May'} 2024`,
                location: "Meknes",
                skills: ["Laravel", "Angular", "Docker", "SQL", "Jira"]
              },
              {
                role: language === 'fr' ? "Développeur web et Mobile full stack" : "Full Stack Web & Mobile Developer",
                company: "IRMA SERVICE",
                duration: `${language === 'fr' ? 'De mars' : 'March'} 2024 ${t.experience.to} ${language === 'fr' ? 'mai' : 'May'} 2024`,
                location: "Casablanca",
                skills: ["Laravel", "React Native"]
              },
              {
                role: language === 'fr' ? "Développeur Full Stack (Stage)" : "Full Stack Developer (Internship)",
                company: "Oneduystry",
                duration: `${language === 'fr' ? 'De mai' : 'May'} 2023 ${t.experience.to} ${language === 'fr' ? 'juillet' : 'July'} 2023`,
                location: "Technopark Casablanca",
                skills: ["Laravel", "React Native", "Tailwind", "MySQL"]
              }
            ].map((exp) => (
              <div key={exp.company} className="border border-[var(--primary)]/30 p-6 rounded-lg hover:border-[var(--primary)]/50 transition-colors glow-border">
                <h3 className="text-xl font-bold text-[var(--primary)]">{exp.role}</h3>
                <p className="text-[var(--text)]/70 mb-2">{exp.company} - {exp.location}</p>
                <p className="text-sm mb-4">{exp.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm border border-[var(--primary)]/30 rounded-full hover:border-[var(--primary)]/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center text-[var(--primary)]">
            <Code2 className="mr-2" />
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: t.projects.items.beatmaker,
                technologies: ["SpringBoot", "React", "TypeScript", "Redux", "PostgreSQL"]
              },
              {
                name: t.projects.items.exam,
                technologies: ["Spring Boot", "Angular", "NgRx", "Junit5", "Mockito", "PostgreSQL", "Tailwind"]
              },
              {
                name: t.projects.items.fishing,
                technologies: ["Spring Boot", "Angular", "Junit5", "Mockito", "PostgreSQL", "Tailwind"]
              }
            ].map((project) => (
              <div key={project.name} className="border border-[var(--primary)]/30 p-6 rounded-lg hover:border-[var(--primary)]/50 transition-colors glow-border">
                <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm border border-[var(--primary)]/30 rounded-full hover:border-[var(--primary)]/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center text-[var(--primary)]">
            <GraduationCap className="mr-2" />
            {t.education.title}
          </h2>
          <div className="space-y-6">
            {[
              {
                degree: t.education.items.developer,
                year: `${t.education.since} 2022`,
                institution: "YouCode (OCP/Simplon.co)",
                location: "Sa, Morocco"
              },
              {
                degree: t.education.items.baccalaureate,
                year: "2021 - 2022",
                institution: "Rhali El Fraouq",
                location: "Marrakesh, Morocco"
              }
            ].map((edu) => (
              <div key={edu.degree} className="border border-[var(--primary)]/30 p-6 rounded-lg hover:border-[var(--primary)]/50 transition-colors glow-border">
                <h3 className="text-xl font-bold text-[var(--primary)]">{edu.degree}</h3>
                <p className="text-[var(--text)]/70">{edu.institution}</p>
                <p className="text-sm">{edu.year} - {edu.location}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--primary)]/30 mt-20 py-8 text-center text-[var(--text)]/70">
        <p>© {new Date().getFullYear()} Marouane Ait El Haj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;