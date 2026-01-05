# Portfolio

Portfolio moderne et responsive développé avec Next.js 14, Tailwind CSS et TypeScript. Il présente les compétences, expériences et projets et inclut un formulaire de contact connecté à Web3Forms.

## ✨ Points forts
- UI soignée, animations douces, thème beige/bleu/violet
- Sections complètes : accueil, compétences, expériences, projets, à propos, contact
- Design responsive (desktop, tablette, mobile)
- Formulaire de contact prêt à l’emploi (Web3Forms + SweetAlert2)
- Icônes Lucide React et typage TypeScript

## 📦 Stack
- Framework : Next.js 14 (App Router côté styles globaux, Pages Router côté vues)
- Langage : React 18 + TypeScript
- Style : Tailwind CSS + classes utilitaires custom (globals.css)
- Icônes : lucide-react
- Formulaire : Web3Forms (API) + sweetalert2 (feedback)

## 🚀 Prise en main
1) Cloner le dépôt
```bash
git clone https://github.com/stevenzab/portfolio
cd portfolio
```
2) Installer les dépendances
```bash
npm install
```
3) Démarrer le serveur de dev
```bash
npm run dev
```
4) Ouvrir le site
```
http://localhost:3000
```

### Variables d’environnement
Le formulaire de contact envoie les messages via Web3Forms.
Créer un fichier .env.local à la racine :
```bash
FORM_ACCESS_KEY=your_web3forms_access_key
```
Clé récupérable sur https://web3forms.com/.

## 📁 Structure
```
app/
	globals.css          # Styles globaux, animations, utilitaires
components/
	navbar.tsx           # Barre de navigation
	footer.tsx           # Pied de page
	layout.tsx           # Layout partagé
pages/
	index.tsx            # Accueil (hero, compétences, expériences, CTA)
	about-page.tsx       # Parcours, compétences détaillées, passions
	projects.tsx         # Grille de projets (données inline)
	contact.tsx          # Formulaire + coordonnées
	api/send-form.ts     # Proxy Web3Forms pour le formulaire
assets/                # Images locales importées dans projects
public/                # Fichiers statiques (favicon, CV, etc.)
```

## 🧭 Navigation & contenu
- Accueil : présentation, CTA contact et téléchargement de CV, stacks clés, expériences, projets récents.
- À propos : bio détaillée, expertises front/back/outils, passions, parcours académique, CTA CV.
- Projets : liste statique avec tags techno, statut, features et visuels (imports ou gradients).
- Contact : coordonnées, disponibilité, formulaire Web3Forms avec alertes de succès/erreur.

## 🔧 Scripts
- `npm run dev` : serveur de développement
- `npm run build` : build de production
- `npm run start` : serveur Next en mode production
- `npm run lint` : linting ESLint

## 🎨 Personnalisation rapide
- Couleurs / animation : modifier les utilitaires dans app/globals.css.
- Contenu texte : éditer les sections dans pages/index.tsx, pages/about-page.tsx, pages/projects.tsx, pages/contact.tsx.
- Projets : mettre à jour le tableau `projects` dans pages/projects.tsx (tech, features, liens demo/code).
- Icônes : importés depuis lucide-react, interchangeables facilement.
- CV : remplacer le fichier dans public et mettre à jour les liens de téléchargement.

## 🚢 Déploiement
### Vercel (recommandé)
1. Pousser sur GitHub
2. Importer le repo sur Vercel
3. Définir la variable d’environnement FORM_ACCESS_KEY
4. Build et prévisualisation automatiques à chaque commit

### Autres plateformes
```bash
npm run build
npm start
```
Pensez à ajouter FORM_ACCESS_KEY sur l’hébergeur choisi.

## ✅ Contrôles qualité
- Responsive mobile/desktop
- Sémantique et SEO de base
- Animations légères pour la perception de fluidité
- Lint via ESLint (config Next.js)

## 📞 Contact
- Email : zabandithsteven@gmail.com
- LinkedIn : https://linkedin.com/in/stevenzab
- GitHub : https://github.com/stevenzab
