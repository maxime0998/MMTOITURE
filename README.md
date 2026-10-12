# M.MTOITURE — site one page

Site vitrine responsive en HTML, CSS et JavaScript sans framework ni dépendance de build.

## Fichiers
- `index.html` : contenu, SEO de base et coordonnées de l'entreprise
- `style.css` : mise en page responsive et identité visuelle premium anthracite / blanc / tons ardoise
- `script.js` : menu mobile, année automatique et formulaire e-mail prérempli

## Avant publication
1. Vérifier toutes les coordonnées, horaires et prestations.
2. Remplacer les images actuelles référencées depuis `https://media112.github.io/m-mtoiture/assets/` par les meilleures photos personnelles de chantiers. Pour une version durable, copier les photos dans un dossier `assets/` et mettre à jour les chemins dans le HTML et le CSS.
3. Le formulaire ouvre le logiciel de messagerie du visiteur avec un e-mail prérempli ; il n'envoie pas de données directement. Pour un formulaire web qui envoie sans ouvrir la messagerie, connecter un service de formulaire (par ex. Formspree) ou un backend.
4. Vérifier la note Google et le nombre d'avis avant publication : le site reprend les chiffres qui figuraient sur le site actuel au moment de la préparation.

## Hébergement conseillé
**GitHub Pages** est le choix le plus simple pour ce site statique : gratuit, HTTPS et compatible avec le dépôt existant. Le dossier peut remplacer les fichiers du dépôt actuel `media112/m-mtoiture`. Si tu possèdes un nom de domaine, tu peux le relier à GitHub Pages via les paramètres du dépôt et les réglages DNS du fournisseur de domaine. Si tu préfères éviter les réglages techniques, Netlify est une alternative avec déploiement par glisser-déposer.

## Publication sur GitHub Pages
1. Décompresser l'archive.
2. Ouvrir le dépôt GitHub `media112/m-mtoiture`.
3. Remplacer les fichiers du site par `index.html`, `style.css`, `script.js` et les autres ressources souhaitées.
4. Vérifier dans Settings → Pages que la publication est configurée depuis la branche utilisée (souvent `main`, dossier `/root`).
5. Attendre la fin du déploiement et vérifier le site sur téléphone et ordinateur.
