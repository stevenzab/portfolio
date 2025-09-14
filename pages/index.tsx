import { Briefcase, Mail, Github, Linkedin, Download, Code, Palette, Database } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
<div className="min-h-screen" style={{backgroundColor: '#FAF2D9'}}>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              SZ
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Steven <span className="text-blue-600">ZABANDITH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Développeur FullStack passionné
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Je crée des applications web modernes et performantes avec React, Next.js et .NET. 
              Spécialisé dans le développement agile et l'optimisation des performances.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="mailto:zabandithsteven@gmail.com">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Me contacter
              </button>
              </Link>
              <a href="/CV_DEVELOPER_FULLSTACK.pdf" download="CV_Développeur_Fullstack.pdf">
                <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </button> 
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-10">
      {/* Compétences avec icônes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3 text-gray-900">Frontend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Angular</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3 text-gray-900">Backend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Node.js</li>
              <li>C# / .NET 8</li>
              <li>API RESTful</li>
              <li>Base de données</li>
              <li>Nestjs</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-3 text-gray-900">Méthodes</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Méthode Agile SCRUM</li>
              <li>Tests unitaires</li>
              <li>Test Driven Development (TDD)</li>
              <li>POO</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Expérience Professionnelle */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Expérience Professionnelle</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-lg text-gray-900">
                Développeur FullStack
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              SPVIE ASSURANCE • Novembre 2024 - Août 2025
            </p>
            <ul className="list-disc list-inside text-gray-800 mt-3 space-y-1">
              <li>Développements itératifs en méthode Agile (sprints 2 semaines).</li>
              <li>Conception et intégration d’API RESTful.</li>
              <li>Refactorisation et optimisation du code.</li>
              <li>Application de la POO pour la maintenabilité.</li>
              <li>Participation aux revues de code collaboratives.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-lg text-gray-900">
                Développeur FullStack
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Pathline • Septembre 2024 - Octobre 2024
            </p>
            <ul className="list-disc list-inside text-gray-800 mt-3 space-y-1">
              <li>Diagnostiqué et résolu des problèmes afin d'optimiser les performances du site web.</li>
              <li>Amélioré la structure et la lisibilité du code par une refactorisation ciblée.</li>
              <li>Développé et implanté des routes RESTful pour affiner la navigation au sein de l'application.</li>
              <li>Participation aux revues de code collaboratives.</li>
              <li>Application de la POO pour la maintenabilité.</li>
              <li>Création de tests unitaires pour assurer la robustesse du code.</li>
              <li>Collaboration avec l'équipe de design pour améliorer l'expérience utilisateur.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-lg text-gray-900">
                Développeur FrontEnd
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Federage • Juin 2023 - Août 2023
            </p>
            <ul className="list-disc list-inside text-gray-800 mt-3 space-y-1">
              <li>Géré la maintenance de l'interface utilisateur des applications web pour une expérience optimale.</li>
              <li>Conçu des maquettes interactives à l'aide de Figma, améliorant le design UX.</li>
              <li>Créé des parcours utilisateurs et scénarios interactifs, enrichissant l'expérience client.</li>
              <li>Développé et configuré des routes RESTful pour assurer une intégration fluide des données.</li>
              <li>Création de tests unitaires pour assurer la robustesse du code.</li>
              <li>Collaboration avec l'équipe de design pour améliorer l'expérience utilisateur.</li>
              <li>Réalisation de prototypes fonctionnels pour valider les choix de design.</li>
              <li>Tests utilisateurs pour recueillir des retours et ajuster les interfaces.</li>
              <li>Implémentation de solutions pour améliorer la performance de l'application.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-lg text-gray-900">
                Développeur FullStack
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              SPVIE ASSURANCE • Août 2021 - Décembre 2021
            </p>
            <ul className="list-disc list-inside text-gray-800 mt-3 space-y-1">
              <li>Refactorisation: simplification et optimisation du code.</li>
              <li>Développement de nouvelles fonctionnalités pour améliorer l'expérience utilisateur.</li>
              <li>Documentation: création de documents techniques pour faciliter la maintenance.</li>
              <li>Linq: utilisation de Linq pour simplifier les requêtes de données.</li>
              <li>Tests: mise en place de tests unitaires pour garantir la qualité du code.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Projets */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900">Portfolio Personnel</h3>
              <p className="text-gray-600 mb-4">Site vitrine développé avec Next.js et Tailwind CSS</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
              </div>
              {/* <div className="flex gap-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold">Voir le code</button>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">Démo live</button>
              </div> */}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 h-48 flex items-center justify-center">
              <Database className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-900">Application Web SPVIE ASSURANCE (SOFIA)</h3>
              <p className="text-gray-600 mb-4">Développement d'APIs RESTful en méthode Agile</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C#</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">.NET 8</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">API REST</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Angular</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Typescript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">OOP</span>
              </div>
              {/* <div className="flex gap-3">
                <button className="text-gray-400 cursor-not-allowed font-semibold">Projet privé</button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Prêt à collaborer ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Je suis disponible pour des projets freelance ou des opportunités en CDI. 
            Contactez-moi pour discuter de vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:zabandithsteven@gmail.com">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <Mail className="w-5 h-5" />
                zabandithsteven@gmail.com
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
                Voir mon LinkedIn
              </button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomePage;
