import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { FormEvent } from "react";
import Head from "next/head";
import Swal from "sweetalert2";

const ContactPage = () => {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || ''
    };

    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success'
        });
        form.reset();
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message || 'Something went wrong.',
          icon: 'error'
        });
      }
    } catch (err: any) {
      Swal.fire({
        title: 'Error',
        text: err?.message || 'Network error',
        icon: 'error'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Steven ZABANDITH | Développeur FullStack</title>
        <meta name="description" content="Contactez-moi pour discuter de vos projets web. Développeur FullStack disponible pour des missions en React, Next.js, .NET et développement d'applications." />
        <meta name="keywords" content="contact développeur, freelance, mission, React, Next.js, .NET, développement web" />
        <meta property="og:title" content="Contact - Steven ZABANDITH" />
        <meta property="og:description" content="Contactez-moi pour vos projets de développement web" />
        <meta property="og:url" content="https://portfolio-uk7m-stevenzabs-projects.vercel.app/contact" />
        <link rel="canonical" href="https://portfolio-uk7m-stevenzabs-projects.vercel.app/contact" />
      </Head>
      <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-moi
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
            Je réponds généralement sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 transition transform-gpu hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">Mes coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-slate-300">zabandithsteven@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Localisation</h3>
                    <p className="text-slate-300">Île-de-France</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="font-semibold text-white mb-4">Suivez-moi</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                    <Github className="w-5 h-5 text-slate-300 hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                    <Linkedin className="w-5 h-5 text-slate-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white transition transform-gpu hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
              <p className="mb-4">
                Je suis actuellement <span className="font-semibold">disponible</span> pour :
              </p>
              <ul className="space-y-2">
                <li>• Missions freelance</li>
                <li>• Projets à temps partiel</li>
                <li>• Opportunités CDI</li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg p-8 transition transform-gpu hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-white/10 bg-slate-900/60 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-white/10 bg-slate-900/60 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-white/10 bg-slate-900/60 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default ContactPage;
