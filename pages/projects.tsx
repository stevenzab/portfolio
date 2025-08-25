import { Code, Database, Palette, Github, ExternalLink, Calendar, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import fopagacherImage from "../assets/fopagacher.png";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description: "Site vitrine responsive développé avec Next.js, TypeScript, Tailwind CSS et React. Interface moderne avec animations fluides et optimisation SEO.",
      image: "gradient-blue-purple",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "Github"],
      features: [
        "Design responsive et moderne",
        "Optimisation SEO",
        "Performance optimisée",
        "Interface utilisateur intuitive"
      ],
      githubUrl: "#",
      liveUrl: "#",
      date: "2025",
      status: "En cours"
    },
    {
      id: 2,
      title: "Application SPVIE ASSURANCE",
      description: "Développement d'APIs RESTful et interfaces utilisateur dans un environnement Agile. Intégration de solutions backend robustes.",
      image: "gradient-green-teal",
      technologies: ["C#", ".NET 8", "SQL", "Angular19", "MongoDB", "Typescript", "Azure DevOps"],
      features: [
        "APIs RESTful performantes",
        "Application des principes SOLID",
        "Tests unitaires complets, MStest",
        "Déploiement automatisé",
      ],
      githubUrl: null,
      liveUrl: null,
      date: "2024-2025",
      status: "En cours"
    },
    {
      id: 3,
      title: "Plateforme Pathline",
      description: "Optimisation des performances et refactorisation du code existant. Amélioration de l'expérience utilisateur et de la maintenabilité.",
      image: "gradient-purple-pink",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Typescript", "Github"],
      features: [
        "Optimisation des performances",
        "Refactorisation du code",
        "Amélioration UX/UI",
        "Tests unitaires complets"
      ],
      githubUrl: null,
      liveUrl: null,
      date: "2024",
      status: "Terminé"
    },
    {
      id: 4,
      title: "Interface Federage",
      description: "Conception et développement d'interfaces utilisateur modernes avec Figma. Création de parcours utilisateurs optimisés.",
      image: "gradient-orange-red",
      technologies: ["React", "Figma", "CSS", "Jest", "NextJS", "Typescript", "Github"],
      features: [
        "Design system complet",
        "Prototypage interactif",
        "Tests utilisateurs",
        "Documentation technique",
        "Réalisation des tests unitaires avec Jest"
      ],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023",
      status: "Terminé"
    },
    {
      id: 5,
      title: "Fôpagacher",
      description: "Développement du site vitrine et d'une application mobile Fôpagacher, qui consiste à réduire le gaspillage alimentaire",
      image: fopagacherImage,
      imageType: "import",
      technologies: ["React", "Nestjs", "Nextjs", "Typescript", "React", "PostgreSQL", "Gitlab"],
      features: [
        "Gestion des utilisateurs",
        "Proposition de Recettes Anti-Gaspillage avec une IA",
        "Stock les aliments en prenant une photo",
        "Gestion des rôles et permissions",
        "Gestion des données utilisateurs",
        "Gestion des préférences utilisateur",
        "Tests unitaires",
        "Maquettage réalisé avec Figma",
        "Développement d'API REST",
      ],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023 - 2025",
      status: "Terminé"
    },
    {
      id: 6,
      title: "Area",
      description: "Développement d'une application web type IFTTT (If This Then That), une plateforme où l’utilisateur peut connecter des services ou événements pour déclencher des réactions automatiques",
      image: "gradient-blue-purple",
      technologies: ["PostgreSQL", "Flask", "Angular", "Flutter", "Typescript", "Python", "Docker"],
      features: [
        "Authentification et gestion des utilisateurs",
        "OAuth2 / Connexion via services tiers (Google, GitHub, etc.)",
        "Création de scénarios automatisés (Action → Réaction)",
        "Notifications en temps réel (WebSocket / Firebase)",
        "Déploiement containerisé avec Docker",
        "Gestion des rôles et permissions (ex. admin / utilisateur)",
        "Programmation des scénarios (ex. exécuter une règle uniquement certains jours / horaires)",
        "API REST documentée (Swagger)"
      ],
      githubUrl: "#",
      liveUrl: "#",
      date: "2022",
      status: "Terminé"
    }
  ];

  const renderProjectImage = (project: any) => {
    if (project.imageType === "import") {
      return (
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      );
    } else {
      return (
        <>
          <div className={`bg-gradient-to-r ${getGradientClass(project.image)} w-full h-full flex items-center justify-center`}>
            <Code className="w-16 h-16 text-white" />
          </div>
        </>
      );
    }
  };

  const getGradientClass = (gradient: string) => {
    const gradients = {
      "gradient-blue-purple": "from-blue-500 to-purple-600",
      "gradient-green-teal": "from-green-500 to-teal-600",
      "gradient-purple-pink": "from-purple-500 to-pink-600",
      "gradient-orange-red": "from-orange-500 to-red-600"
    };
    return gradients[gradient as keyof typeof gradients] || "from-blue-500 to-purple-600";
  };

  const getStatusColor = (status: string) => {
    return status === "En cours" 
      ? "bg-blue-100 text-blue-800" 
      : "bg-green-100 text-green-800";
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF2D9'}}>
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez une sélection de projets sur lesquels j'ai travaillé, 
            allant du développement frontend aux solutions backend complètes.
          </p>
        </div>

        {/* Filtres */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-white hover:bg-blue-50 text-gray-700 px-6 py-2 rounded-full border border-gray-300 transition">
            Tous
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full transition">
            Frontend
          </button>
          <button className="bg-white hover:bg-blue-50 text-gray-700 px-6 py-2 rounded-full border border-gray-300 transition">
            Backend
          </button>
          <button className="bg-white hover:bg-blue-50 text-gray-700 px-6 py-2 rounded-full border border-gray-300 transition">
            FullStack
          </button>
        </div> */}

        {/* Grille de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image du projet */}
              <div className="h-48 relative overflow-hidden">
                {renderProjectImage(project)}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités clés</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                {/* <div className="flex gap-3">
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                      <Github className="w-4 h-4" />
                      Code source
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400 font-medium">
                      <Github className="w-4 h-4" />
                      Privé
                    </span>
                  )}
                  
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400 font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Non disponible
                    </span>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par mon travail ?
            </h2>
            <p className="text-gray-600 mb-6">
              Consultez mon profil GitHub pour voir plus de projets ou contactez-moi 
              pour discuter d'une collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    <Link href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer">
                        Voir GitHub
                    </Link>
                </a>
              {/* <a 
                href="/contact" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Me contacter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
