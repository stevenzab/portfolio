const HomePage = () => {
  return (
<div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Mon Portfolio</h1>
      {/* Présentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Présentation</h2>
        <p className="text-gray-700">Bonjour, je m'appelle Steven Zab. Passionné par le développement web, je crée des applications modernes et performantes.</p>
      </section>
      {/* Compétences */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Compétences</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>React / Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
      {/* Expérience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Expérience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Développeur Web - Freelance</h3>
            <p className="text-gray-700">2022 - Présent</p>
            <p className="text-gray-700">Création de sites web et applications pour divers clients.</p>
          </div>
          <div>
            <h3 className="font-bold">Stage - Agence Digitale</h3>
            <p className="text-gray-700">2021 - 2022</p>
            <p className="text-gray-700">Participation à des projets de refonte de sites et développement d'outils internes.</p>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">Email : steven.zab@email.com</p>
        <p className="text-gray-700">LinkedIn : <a href="https://linkedin.com/in/stevenzab" className="text-blue-600 underline">stevenzab</a></p>
      </section>
    </div>
  );
};

export default HomePage;
