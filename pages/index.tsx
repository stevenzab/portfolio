import { Briefcase } from "lucide-react";

const HomePage = () => {
  return (
<div className="max-w-3xl mx-auto py-10 px-4 text-black" style={{backgroundColor: '#FAF2D9'}}>
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Mon Portfolio</h1>
      {/* Présentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Présentation</h2>
        <p className="text-black">Bonjour, je m'appelle Steven Zab. Passionné par le développement web, je crée des applications modernes et performantes.</p>
      </section>
      {/* Compétences */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Compétences</h2>
        <ul className="list-disc list-inside text-black">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>.Net 8</li>
          <li>Angular</li>
        </ul>
      </section>
      {/* Expérience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Expérience</h2>
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
        </div>
      </section>
      {/* Projets */}
            <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Projets</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-black">Développeur FullStack</h3>
            <p className="text-black">2023 - 2025</p>
            <p className="text-black">Fôpagacher</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
