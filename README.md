# The Twelve — Food & Coffee

Site vitrine une page pour **The Twelve**, café · restaurant (Algérie).

## Sections
- **Accueil** — hero avec le logo The Twelve (badge or « 12 »)
- **Menu** — la carte complète à onglets (Café, Bar à jus, Burgers, Pizza, Tacos, Plats, Entrées, Pâtes & Salades, Broaster, Crêpes & Gaufres, Desserts, Boissons) — prix en DA
- **Votre avis** — notation par étoiles (1 à 5) + message
- **Contact** — téléphone, WhatsApp, horaires, carte

## Système d'avis (privé)
Les avis laissés par les clients (note en étoiles, nom, message) sont envoyés
**uniquement au propriétaire par e-mail** via [FormSubmit](https://formsubmit.co) —
ils ne sont jamais publiés ni visibles sur le site.

- Adresse de réception actuelle : `yasserbmlh24@gmail.com` (constante `OWNER_INBOX` en haut de la section avis dans `script.js`)
- **Première utilisation** : lors du tout premier avis envoyé, FormSubmit envoie
  un e-mail d'activation à cette adresse — cliquez sur le lien pour activer la
  réception. Ensuite, chaque avis arrive directement dans la boîte mail.
- Pour changer d'adresse : remplacez l'e-mail dans `OWNER_INBOX` (`script.js`).
- Si l'envoi échoue (hors ligne, etc.), le site propose au client d'envoyer son
  avis via WhatsApp.

## Design
- Thème espresso profond + or, typographie Fraunces (serif) + Inter
- Logo SVG intégré (badge « THE TWELVE · FOOD & COFFEE ») — aucun fichier image
- Animations : hero, marquee, apparition au défilement, étoiles interactives
- HTML / CSS / JS purs, sans dépendance

## Aperçu local
```bash
python3 -m http.server 8099
# puis ouvrir http://localhost:8099/
```

## Mise en ligne
Publié via GitHub Pages (déploiement depuis la branche).

## Contact
📞 0561 98 84 34 · WhatsApp : wa.me/213561988434
