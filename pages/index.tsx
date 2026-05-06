import { Briefcase, Mail, Github, Linkedin, Download, Code, Palette, Database } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const HomePage = () => {

  const skills = [
    {
      icon: Code,
      title: "Frontend",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Angular", "Javascript"]
    },
    {
      icon: Database,
      title: "Backend",
      items: ["Node.js", "C# / .NET 8", "API RESTful", "Base de données", "Nestjs"]
    },
    {
      icon: Palette,
      title: "Méthodes",
      items: ["Méthode Agile SCRUM", "Tests unitaires", "Test Driven Development (TDD)", "SOLID", "OOP", "Code Review"]
    }
  ];

  const experiences = [
    {
      title: "Développeur FullStack C# | .NET8",
      company: "SPVIE ASSURANCE",
      period: "Novembre 2024 - Août 2025",
      description: "Amélioration du Back-Office Sofia: Développement et maintenance de module existant de Sofia",
      details: [
        "Front-end :",
        "Création de composants modulaires réutilisables avec Angular19, Gestion du state applicatif via des services injectables.",
        "Mise en place de data-binding avancé pour synchroniser les vues et la logique métier.",
        "Conception de formulaires dynamiques avec validation côté client pour améliorer l'expérience utilisateur.",
        "Optimisation :",
        "Utilisation de LINQ et Entity Framework pour concevoir des requêtes optimisées et réduire la charge SQL.",
        "Mise en place de bonnes pratiques de requêtage: filtrage, pagination, projections ciblées.",
        "Amélioration des performances globales grâce à la réduction de la consommation mémoire et à une meilleure gestion des temps d'exécution.",
        "Architecture et conception logicielle: Application des principes SOLID et respect du TDD (Test Driven Development).",
        "Séparation claire des responsabilités pour garantir la maintenabilité et l'évolutivité.",
        "Utilisation d'abstractions, interfaces, héritage et encapsulation pour concevoir une architecture robuste et cohérente.",
        "Qualité, tests et intégration Continue: Rédaction de tests unitaires avec MSTests.",
        "Participation active aux revues de code pour maintenir un haut niveau de qualité.",
        "Back-end :",
        "Conception et implémentation d'API RESTful sécurisées.",
        "Intégration de MongoDB via des repositories, utilisation de DTO (Data Transfer Objects).",
        "Développement de services en arrière-plan: envoi d'emails automatiques, synchronisation de données, génération de rapports."
      ]
    },
    {
      title: "Développeur FullStack React | Node.js",
      company: "Pathline",
      period: "Septembre 2024 - Octobre 2024",
      description: "SAAS, Développement de fonctionnalités pour améliorer l'expérience utilisateur et faciliter les interactions entre mentors et mentorés sur la plateforme.",
      details: [
        "Front-End :" ,
        "Mise en place de composants React réutilisables et maintenables",
        "Collaboration avec le designer pour intégrer des interfaces UI/UX cohérentes et ergonomiques",
        "Optimisation de l’expérience utilisateur à traveus une réduction des temps de chargement et des interactions plus fluides.",
        "Back-end :",
        "Création et développement d’API RESTful avec nodeJS et express pour gérer les données des utilisateurs et les interactions mentor / mentoré.",
        "Implémentation de tests unitaires avec Jest pour garantir la fiabilité des fonctionnalités",
        "Debugging et résolution d’incidents en production, en tenant compte des retours clients et en corrigeant rapidement les anomalies",
        "Optimisation des requêtes base de données et du flux de données pour améliorer les performances globales",
        "Qualité et bonnes pratiques :",
        "Participation aux revues de code pour assurer la cohérence et la qualité technique des livrables",
        "Conception et développement selon des principe de maintenabilité et réutilisabilité du code",
        "Optimisation :",
        "Amélioration des temps de chargement côté client et de la réactivité des API",
        "Optimisation des requêtes et traitements côté serveur pour réduire la charge sur la base de données et améliorer la scalabilité de la plateforme."
      ]
    },
    {
      title: "Développeur FrontEnd React | Figma | NextJS",
      company: "Federage",
      period: "Juin 2023 - Août 2023",
      description: "Plateforme collaborative de mise en relation projets/talents. Développement frontend d'une marketplace.",
      details: [
        "UX / UI :",
        "Conception de maquettes interactives sur Figma",
        "Création de parcours utilisateurs complets: wireframes, personas, storyboards",
        "Collaboration avec l’équipe design et produit pour traduire les besoins métiers en solutions techniques",
        "Front-End :",
        "Implémentation d’interfaces web responsives et adaptées à tous les supports (desktop, mobile, tablette)",
        "Utilisation de NextJS, React, Typescript et TailwindCSS pour garantir des composants modulaires et réutilisables",
        "Correction de bugs visuels et amélioration continue des fonctionnalités existantes",
        "Optimisation des performances frontend, réduction des temps de chargement et amélioration de la fluidité des interactions",
        "Réalisation de test unitaire avec JEST",
        "Back-end :",
        "Implémentation de routes RESTful avec Drupal",
        "Gestion de la communication entre le frontend et les services backend"
      ]
    },
    {
      title: "Développeur FullStack C# | ASP.NET MVC",
      company: "SPVIE ASSURANCE",
      period: "Août 2021 - Décembre 2021",
      description: "Outil d'analyse des contributions développeurs, développement d'une application interne.",
      details: [
        "Développement et optimisation :",
        "Simplification, restructuration et optimisation du code via une refactorisation approfondie.",
        "Remplacement des références API par des requêtes LINQ pour une manipulation plus efficace des données.",
        "Développement de nouvelles fonctionnalités pour visualiser et analyser les contributions des développeurs.",
        "Tests et qualité :",
        "Réalisation de tests unitaires avec MSTest pour assurer la fiabilité du code.",
        "Mise en place de bonnes pratiques de code pour garantir la maintenabilité et la performance.",
        "Méthodologie Agile :",
        "Planification, estimation, priorisation et livraison itérative des fonctionnalités selon la méthodologie SCRUM.",
        "Participation aux réunions de suivi et aux revues de sprint pour assurer l’alignement avec les besoins métier.",
        "Documentation et communication :",
        "Rédaction et gestion de la documentation des API pour assurer une bonne compréhension et utilisation par les autres équipes.",
        "Collaboration avec les équipes IT pour recueillir les besoins et ajuster les fonctionnalités de l’outil."
      ]
    }
  ];

  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Site vitrine développé avec Next.js et Tailwind CSS",
      gradient: "from-blue-500 to-purple-600",
      icon: Code,
      tags: ["Next.js", "TypeScript", "Tailwind", "React"]
    },
    {
      title: "Application Web SPVIE ASSURANCE (SOFIA)",
      description: "Développement d'APIs RESTful en méthode Agile",
      gradient: "from-green-500 to-teal-600",
      icon: Database,
      tags: ["C#", ".NET 8", "API REST", "Angular", "MongoDB", "Typescript", "SQL", "OOP"]
    }
  ];

  return (
    <>
      <Head>
        <title>Steven ZABANDITH - Développeur FullStack React, Next.js, .NET</title>
        <meta name="description" content="Développeur FullStack spécialisé en React, Next.js, TypeScript et .NET 8. Création d'applications web modernes et performantes avec méthode Agile." />
        <meta name="keywords" content="développeur fullstack, React, Next.js, TypeScript, .NET, C#, développeur web, Angular, Node.js" />
        <meta name="author" content="Steven ZABANDITH" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stevenzab.com" />
        <meta property="og:title" content="Steven ZABANDITH - Développeur FullStack" />
        <meta property="og:description" content="Développeur FullStack spécialisé en React, Next.js, TypeScript et .NET 8" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steven ZABANDITH - Développeur FullStack" />
        <meta name="twitter:description" content="Développeur FullStack spécialisé en React, Next.js et .NET" />
        
        <link rel="canonical" href="https://stevenzab.com" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Steven ZABANDITH",
              "jobTitle": "Développeur FullStack",
              "url": "https://stevenzab.com",
              "sameAs": [
                "https://github.com/stevenzab",
                "https://www.linkedin.com/in/stevenzab/"
              ],
              "knowsAbout": ["React", "Next.js", "TypeScript", ".NET", "C#", "Node.js", "Angular"],
              "description": "Développeur FullStack spécialisé en React, Next.js, TypeScript et .NET 8"
            })
          }}
        />
      </Head>
      <main className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-white/10">
              SZ
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Steven <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ZABANDITH</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-6">
              Développeur FullStack
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Je crée des applications web modernes et performantes avec React, Next.js et .NET. 
              Spécialisé dans le développement agile et l'optimisation des performances.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="mailto:zabandithsteven@gmail.com">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-500/20 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Me contacter
              </button>
              </Link>
              <a href="/CV_ZABANDITH_STEVEN.pdf" download="CV_ZABANDITH_STEVEN.pdf">
                <button className="border border-white/20 bg-white/5 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition backdrop-blur flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </button> 
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-10">
      {/* Compétences avec icônes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="rounded-2xl p-6 text-center bg-white/5 backdrop-blur border border-white/10 shadow-lg hover:shadow-xl transition transform-gpu hover:-translate-y-1 hover:scale-[1.01]">
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3 text-white">{skill.title}</h3>
                <ul className="text-slate-300 space-y-1">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      {/* Expérience Professionnelle */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Expérience Professionnelle</h2>
        <div className="relative pl-6 border-l border-white/10 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pb-8 ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}>
              <div className="py-2">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <h3 className="font-bold text-lg text-white">{exp.title}</h3>
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-white font-semibold">{exp.company}</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                <ul className="text-slate-200 mt-3 space-y-1">
                  {exp.details.map((detail, idx) => {
                    const isCategory = detail.endsWith(':');
                    return isCategory ? (
                      <li key={idx} className="font-semibold text-slate-100 mt-3">{detail}</li>
                    ) : (
                      <li key={idx} className="list-disc list-inside">{detail}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Projets */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-lg hover:shadow-xl transition transform-gpu hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-lg p-8 transition transform-gpu hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-4 text-white">Prêt à collaborer ?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Je suis disponible pour des projets freelance ou des opportunités en CDI. 
            Contactez-moi pour discuter de vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:zabandithsteven@gmail.com">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-500/20 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                zabandithsteven@gmail.com
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer">
              <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition">
                Voir mon LinkedIn
              </button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
    </>
  );
};

export default HomePage;
