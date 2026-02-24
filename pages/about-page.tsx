import { User, Code, Trophy, Heart, Download, MapPin, Calendar } from "lucide-react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>À propos - Steven ZABANDITH | Développeur FullStack</title>
        <meta name="description" content="Découvrez mon parcours de développeur FullStack, mes compétences en React, Next.js, .NET, et ma passion pour le développement web moderne." />
        <meta name="keywords" content="développeur fullstack, parcours, compétences, React, Next.js, .NET, TypeScript" />
        <meta property="og:title" content="À propos - Steven ZABANDITH" />
        <meta property="og:description" content="Découvrez mon parcours de développeur FullStack et mes compétences techniques" />
        <meta property="og:url" content="https://portfolio-uk7m-stevenzabs-projects.vercel.app/about-page" />
        <link rel="canonical" href="https://portfolio-uk7m-stevenzabs-projects.vercel.app/about-page" />
      </Head>
      <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            SZ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de moi
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Développeur passionné avec une approche créative et technique pour créer des solutions innovantes.
          </p>
        </div>

        {/* Présentation principale */}
        <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 mb-8 transition transform-gpu hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Qui suis-je ?</h2>
          </div>
          <div className="prose prose-lg text-slate-300">
            <p className="mb-4">
              Bonjour ! Je m'appelle <strong>Steven ZABANDITH</strong>, développeur FullStack passionné par la création d'applications web modernes et performantes. 
              Avec une solide expérience en développement frontend et backend, je transforme les idées en solutions digitales concrètes.
            </p>
            <p className="mb-4">
              Mon parcours m'a mené à travailler sur des projets variés, de la conception d'interfaces utilisateur intuitives au développement d'APIs robustes. 
              J'aime particulièrement les défis techniques et l'apprentissage continu de nouvelles technologies.
            </p>
            <p>
              Actuellement, je me spécialise dans l'écosystème JavaScript/TypeScript (React, Next.js, Angular) côté frontend 
              et C#/.NET côté backend, tout en appliquant les meilleures pratiques de développement agile.
            </p>
          </div>
        </div>

        {/* Compétences et Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 transition transform-gpu hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Expertise Technique</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">NextJS</span>

                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">Express</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">C#</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">.NET 8</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">API REST</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">NestJs</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">Flask</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">NestJS/TS</span>
                  <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm">PHP</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Outils & Méthodes</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Github</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Gitlab</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Linux</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Agile Scrum</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Test Driven Development</span>
                  <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">SOLID</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 transition transform-gpu hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-rose-400" />
              <h2 className="text-2xl font-bold text-white">Mes Passions</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                <span>J'aime faire du sport, courir, et me maintenir en forme.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                <span>Basket: je joue de temps en temps avec des amis.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                <span>Jeux vidéo: j'aime jouer à des jeux compétitifs et coopératifs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                <span>Mangas: j'aime lire des mangas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                <span>Musique: j'aime écouter différents genres musicaux.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Parcours */}
        <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 mb-8 transition transform-gpu hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Mon Parcours</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">2020 - 2025</span>
              </div>
              <h3 className="font-bold text-lg text-white">EPITECH - Expert en technologie de l'information</h3>
              <ul className="list-disc list-inside text-slate-300 mt-3 space-y-2">
                <li>Formation intensive en développement logiciel, gestion de projets et technologies émergentes</li>
                <li>Projets pratiques incluant la création d'applications web et mobiles, TCP / UDP</li>
                <li>Pédagogie par projet : travail en équipe et immersion professionnelle</li>
                <li><strong>Association Cobra</strong> : initiation des lycéens au code, organisation de coding clubs et speed coding</li>
                <li><strong>Projet de fin d'études</strong> : Fôpagacher</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">Août 2023 - Octobre 2024</span>
              </div>
              <h3 className="font-bold text-lg text-white">California State University LongBeach - Echange universitaire</h3>
              <p className="text-slate-300">
                  Semestre d’échange universitaire axé sur le développement web fullstack et la collaboration interdisciplinaire. 
                  Participation à des projets en équipe et à des ateliers pratiques. 
                  Cours suivis en développement web, C++ et Python. 
                  Développement de compétences en autonomie, prise d’initiatives et travail collaboratif.
                  Réalisation et avancement du projet de fin d’études.
              </p>
            </div>
          </div>
        </div>

        {/* Contact et CV */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white transition transform-gpu hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4">Travaillons ensemble !</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants. 
              N'hésitez pas à me contacter pour discuter de vos besoins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/CV_ZABANDITH_STEVEN.pdf" download="CV_ZABANDITH_STEVEN.pdf">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </button>
              </a>
              {/* <a 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                Me contacter
              </a> */}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-blue-100">
              <MapPin className="w-4 h-4" />
              <span>Basé en France</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default AboutPage;