
const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-black" style={{backgroundColor: '#FAF2D9'}}>
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Mon Portfolio</h1>
      {/* Présentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Présentation</h2>
        <p className="text-black">Bonjour, je m'appelle Steven ZABANDITH. Passionné par le développement web, je crée des applications modernes et performantes.</p>
      </section>
      {/* Compétences */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Compétences</h2>
        <ul className="list-disc list-inside text-black">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
      {/* Expérience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">Expérience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-black">Développeur FullStack - SPVIE ASSURANCE</h3>
            <p className="text-black">Novembre 2024 - Août 2025</p>
            <p className="text-black">Implémenté des développements itératifs et collaboratifs selon la méthode AGILE.</p>
            <p className="text-black">Géré des cycles de développement courts à travers des sprints de deux semaines.</p>
            <p className="text-black">Conçu et intégré des routes RESTful pour les API, facilitant l'accès aux données.</p>
          </div>
          <div>
            <h3 className="font-bold text-black">Stage - Agence Digitale</h3>
            <p className="text-black">2021 - 2022</p>
            <p className="text-black">Participation à des projets de refonte de sites et développement d'outils internes.</p>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-black">Contact</h2>
        <p className="text-black">Email : steven.zab@email.com</p>
        <p className="text-black">LinkedIn : <a href="https://linkedin.com/in/stevenzab" className="text-blue-600 underline hover:text-blue-800">stevenzab</a></p>
      </section>
    </div>
  );
};

export default AboutPage;