/* ============================================================
   The Twelve — Food & Coffee
   ============================================================ */

/* ===== Menu data (prix en DA) ===== */
const MENU = [
  /* Café */
  { cat: "cafe", name: "Café Machine", desc: "Espresso machine.", price: "150" },
  { cat: "cafe", name: "Café Italien", desc: "Café à l'italienne.", price: "150" },
  { cat: "cafe", name: "Café Capsule", desc: "Caps, L'OR, illy, Nespresso, Lavazza.", price: "200 – 300" },
  { cat: "cafe", name: "Café Richard", desc: "Grains de spécialité au choix.", price: "250" },
  { cat: "cafe", name: "Cappuccino Classique", desc: "Espresso, lait vapeur, mousse.", price: "250", tag: "Signature" },
  { cat: "cafe", name: "Cappuccino Chocolat", desc: "Cappuccino au chocolat.", price: "300" },
  { cat: "cafe", name: "Cappuccino Vanille", desc: "Cappuccino à la vanille.", price: "250" },
  { cat: "cafe", name: "Chocolat Chaud", desc: "Chocolat chaud onctueux.", price: "250" },
  { cat: "cafe", name: "Café Crème", desc: "Café crème.", price: "50" },
  { cat: "cafe", name: "Thé / Tisane", desc: "Thé, tisane ou thé maison.", price: "100" },
  { cat: "cafe", name: "Thé au Citron", desc: "Thé parfumé au citron.", price: "120" },

  /* Bar à jus */
  { cat: "jus", name: "Jus d'Orange", desc: "Pressé minute.", price: "400" },
  { cat: "jus", name: "Cocktail de Fruits", desc: "Mélange de fruits frais.", price: "450" },
  { cat: "jus", name: "Bleu Star", desc: "Cocktail signature.", price: "450" },
  { cat: "jus", name: "American Pie", desc: "Cocktail fruité.", price: "450" },
  { cat: "jus", name: "Cocktail Sauvage", desc: "Arc-en-ciel.", price: "500" },
  { cat: "jus", name: "Milk-Shake", desc: "Fraise, banane, Nutella, Oreo ou Kinder Bueno.", price: "500", tag: "Populaire" },
  { cat: "jus", name: "Smoothie", desc: "Banane, fraise ou Twelve.", price: "500" },
  { cat: "jus", name: "Mojito", desc: "Classique, Azur, Rojo ou Aflas.", price: "400 – 500" },
  { cat: "jus", name: "Frappuccino", desc: "Chocolat, vanille ou caramel.", price: "350 – 400" },

  /* Burgers */
  { cat: "burgers", name: "Classic Burger", desc: "Viande hachée, salade, tomate, cheddar, sauces.", price: "500 / 700", note: "Solo / Menu" },
  { cat: "burgers", name: "Forest Burger", desc: "Viande hachée, salade, tomate, cheddar, sauce.", price: "600 / 800", note: "Solo / Menu" },
  { cat: "burgers", name: "Chicken Burger", desc: "Poulet, salade, tomate, cheddar, sauces.", price: "450 / 650", note: "Solo / Menu" },
  { cat: "burgers", name: "Double Burger", desc: "Double viande hachée, salade, tomate, cheddar.", price: "700 / 900", note: "Solo / Menu", tag: "Best" },

  /* Pizza */
  { cat: "pizza", name: "Marguerite", desc: "Sauce tomate, fromage, olive.", price: "550 / 1 150", note: "PM / GM" },
  { cat: "pizza", name: "Végétarienne", desc: "Poivron, tomate fraîche, maïs, champignons.", price: "650 / 1 650", note: "PM / GM" },
  { cat: "pizza", name: "Thon", desc: "Tomate, fromage, thon, olive, origan.", price: "850 / 1 950", note: "PM / GM" },
  { cat: "pizza", name: "Chicken", desc: "Tomate, fromage, poulet, champignons.", price: "900 / 2 150", note: "PM / GM" },
  { cat: "pizza", name: "Orientale", desc: "Merguez, olive, champignons, poivron, origan.", price: "850 / 2 050", note: "PM / GM" },
  { cat: "pizza", name: "Buffalo", desc: "Viande hachée, champignons, olive, origan.", price: "950 / 2 250", note: "PM / GM" },
  { cat: "pizza", name: "4 Fromages", desc: "Crème fraîche, fromage fondu, camembert, cheddar.", price: "1 000 / 2 300", note: "PM / GM" },
  { cat: "pizza", name: "Pizza Twelve", desc: "Crème, fromage fondu, viande, poulet, merguez.", price: "1 050 / 2 450", note: "PM / GM", tag: "Signature" },

  /* Tacos */
  { cat: "tacos", name: "Tacos Poulet", desc: "M / L / XL · Solo ou menu · viandes & 6 sauces au choix.", price: "550 – 1 150" },
  { cat: "tacos", name: "Tacos Viande", desc: "M / L / XL · Solo ou menu · viandes & 6 sauces au choix.", price: "650 – 1 350" },
  { cat: "tacos", name: "Barquette de frites", desc: "Nature ou sauce cheddar.", price: "150 / 350" },
  { cat: "tacos", name: "Menu Kids Hamburger", desc: "Hamburger, frites, boisson + surprise.", price: "550", tag: "Kids" },
  { cat: "tacos", name: "Menu Kids Tenders", desc: "Chicken tenders, frites, boisson + surprise.", price: "800", tag: "Kids" },

  /* Plats */
  { cat: "plats", name: "Poulet Rôti", desc: "Poulet rôti, accompagnement.", price: "900" },
  { cat: "plats", name: "Escalope Grillée", desc: "Escalope de poulet grillée.", price: "950" },
  { cat: "plats", name: "Chawarma", desc: "Chawarma maison.", price: "850" },
  { cat: "plats", name: "Poulet Mariné", desc: "Poulet mariné aux épices.", price: "850" },
  { cat: "plats", name: "Escalope Panée", desc: "Escalope panée croustillante.", price: "950" },
  { cat: "plats", name: "Escalope crème champignons", desc: "À la crème de champignons.", price: "1 000" },
  { cat: "plats", name: "Cordon Bleu", desc: "Cordon bleu maison.", price: "1 000" },
  { cat: "plats", name: "Entrecôte", desc: "Grillée ou à la crème de champignons.", price: "2 000" },
  { cat: "plats", name: "Steak Grillé", desc: "Steak grillé, accompagnement.", price: "1 900" },

  /* Entrées chaudes */
  { cat: "entrees", name: "Gratin Viande", desc: "Gratin à la viande.", price: "600" },
  { cat: "entrees", name: "Gratin Poulet", desc: "Gratin au poulet.", price: "550" },
  { cat: "entrees", name: "Gratin Mixte", desc: "Viande hachée & poulet.", price: "700" },
  { cat: "entrees", name: "Croustillant de Camembert", desc: "Camembert pané croustillant.", price: "500" },
  { cat: "entrees", name: "Poutine Poulet", desc: "Frites, fromage, poulet.", price: "450" },
  { cat: "entrees", name: "Poutine Viande", desc: "Frites, fromage, viande.", price: "500" },
  { cat: "entrees", name: "Poutine Crispy", desc: "Frites, fromage, poulet crispy.", price: "500" },
  { cat: "entrees", name: "Crousty Poulet", desc: "Poulet croustillant.", price: "550" },

  /* Pâtes & salades */
  { cat: "pates", name: "Pâtes 3 Fromages", desc: "Sauce aux trois fromages.", price: "700" },
  { cat: "pates", name: "Pâtes Bolognaise", desc: "Sauce bolognaise.", price: "750" },
  { cat: "pates", name: "Pâtes Italienne", desc: "Sauce italienne.", price: "700" },
  { cat: "pates", name: "Salade Variée", desc: "Assortiment de crudités.", price: "400" },
  { cat: "pates", name: "Salade au Thon", desc: "Salade fraîche au thon.", price: "500" },
  { cat: "pates", name: "Salade César", desc: "Poulet, parmesan, croûtons.", price: "600" },

  /* Broaster */
  { cat: "broaster", name: "Broaster 2 Pièces", desc: "2 pièces de poulet broaster.", price: "850" },
  { cat: "broaster", name: "Broaster 4 Pièces", desc: "4 pièces de poulet broaster.", price: "1 600" },
  { cat: "broaster", name: "Broaster 8 Pièces", desc: "8 pièces de poulet broaster.", price: "2 900" },
  { cat: "broaster", name: "Broaster 12 Pièces", desc: "12 pièces — à partager.", price: "3 600" },
  { cat: "broaster", name: "Chicken Tenders", desc: "Tenders croustillants.", price: "800" },

  /* Crêpes & gaufres */
  { cat: "crepes", name: "Crêpe au Chocolat", desc: "Croustillante ou moelleuse.", price: "400 / 350", note: "Cr. / Mo." },
  { cat: "crepes", name: "Crêpe Banane", desc: "Croustillante ou moelleuse.", price: "600 / 550", note: "Cr. / Mo." },
  { cat: "crepes", name: "Crêpe Fraise", desc: "Croustillante ou moelleuse.", price: "600 / 600", note: "Cr. / Mo." },
  { cat: "crepes", name: "Crêpe aux Fruits", desc: "Croustillante ou moelleuse.", price: "700 / 650", note: "Cr. / Mo." },
  { cat: "crepes", name: "Crêpe Pistache", desc: "Croustillante ou moelleuse.", price: "700 / 650", note: "Cr. / Mo." },
  { cat: "crepes", name: "Crêpe Twelve", desc: "Croustillante ou moelleuse.", price: "800 / 750", note: "Cr. / Mo.", tag: "Signature" },
  { cat: "crepes", name: "Gaufre au Chocolat", desc: "Gaufre tiède au chocolat.", price: "400" },
  { cat: "crepes", name: "Gaufre Nature / Fruits", desc: "Nature, banane, fraise ou Twelve.", price: "300" },
  { cat: "crepes", name: "Pancake", desc: "Pile de pancakes.", price: "500" },

  /* Desserts */
  { cat: "desserts", name: "Cheesecake", desc: "Nutella, Bueno ou Lotus.", price: "400", tag: "Populaire" },
  { cat: "desserts", name: "Fondant au Chocolat", desc: "Solo + boule gelato : 350 DA.", price: "550" },
  { cat: "desserts", name: "Le Fraisier", desc: "Fraisier traditionnel.", price: "400" },
  { cat: "desserts", name: "Gâteau 100% Nutella", desc: "Pour les fans de Nutella.", price: "600" },
  { cat: "desserts", name: "Tiramisu", desc: "Gâteau ou verrine.", price: "400" },
  { cat: "desserts", name: "Crème Brûlée", desc: "Crème brûlée vanille.", price: "400" },
  { cat: "desserts", name: "Mousse au Chocolat", desc: "Mousse légère.", price: "400" },
  { cat: "desserts", name: "Mini Tarte", desc: "Petite tarte gourmande.", price: "300" },

  /* Boissons */
  { cat: "boissons", name: "Eau Minérale", desc: "Petite ou grande bouteille.", price: "50 / 80" },
  { cat: "boissons", name: "Soda", desc: "Hamoud, Coca-Cola, Schweppes, Pepsi.", price: "100" },
  { cat: "boissons", name: "Jus 33cl", desc: "Ramy, Rouiba, Ifruit.", price: "100" },
  { cat: "boissons", name: "Canette", desc: "Coca-Cola, Schweppes, Rouiba Excellence.", price: "150" },
];

const CATEGORIES = [
  { id: "cafe", label: "Café" },
  { id: "jus", label: "Bar à jus" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "tacos", label: "Tacos & Kids" },
  { id: "plats", label: "Plats" },
  { id: "entrees", label: "Entrées chaudes" },
  { id: "pates", label: "Pâtes & Salades" },
  { id: "broaster", label: "Broaster" },
  { id: "crepes", label: "Crêpes & Gaufres" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

/* ===== Menu : onglets + liste ===== */
const tabsEl = document.getElementById("tabs");
const listEl = document.getElementById("menuList");

if (tabsEl && listEl) {
  tabsEl.innerHTML = CATEGORIES.map(
    (c, i) => `<button class="tab${i === 0 ? " is-active" : ""}" role="tab" data-cat="${c.id}">${c.label}</button>`
  ).join("");

  const renderMenu = (cat) => {
    const items = MENU.filter((m) => m.cat === cat);
    listEl.innerHTML = items
      .map(
        (m, i) => `
        <div class="m-item" style="animation-delay:${i * 40}ms">
          <div class="m-item__head">
            <span class="m-item__name">${m.name}${m.tag ? `<span class="m-tag">${m.tag}</span>` : ""}</span>
            <span class="m-item__dots"></span>
            <span class="m-item__price">${m.price} DA${m.note ? `<small>${m.note}</small>` : ""}</span>
          </div>
          <p class="m-item__desc">${m.desc}</p>
        </div>`
      )
      .join("");
  };
  renderMenu(CATEGORIES[0].id);

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderMenu(btn.dataset.cat);
  });
}

/* ===== Avis : étoiles + envoi privé au propriétaire =====
   Les avis sont transmis par e-mail via FormSubmit — ils ne sont
   jamais stockés ni affichés sur le site. Seul le propriétaire
   les reçoit, dans sa boîte mail. */
const OWNER_INBOX = "https://formsubmit.co/ajax/yasserbmlh24@gmail.com";
const RATING_LABELS = { 1: "Décevant", 2: "Bof", 3: "Correct", 4: "Très bien", 5: "Excellent !" };

const reviewForm = document.getElementById("reviewForm");

if (reviewForm) {
  const starsEl = document.getElementById("stars");
  const stars = [...starsEl.querySelectorAll(".star")];
  const hint = document.getElementById("starsHint");
  const status = document.getElementById("revStatus");
  const submitBtn = document.getElementById("revSubmit");
  let rating = 0;

  const paint = (n) => stars.forEach((s) => s.classList.toggle("is-lit", +s.dataset.value <= n));

  stars.forEach((s) => {
    s.addEventListener("mouseenter", () => paint(+s.dataset.value));
    s.addEventListener("click", () => {
      rating = +s.dataset.value;
      paint(rating);
      hint.textContent = `${rating}/5 — ${RATING_LABELS[rating]}`;
      hint.classList.add("is-set");
    });
  });
  starsEl.addEventListener("mouseleave", () => paint(rating));

  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("revName").value.trim();
    const message = document.getElementById("revMessage").value.trim();

    if (!rating) {
      status.textContent = "Choisissez d'abord une note en étoiles.";
      status.className = "review-card__status err";
      return;
    }
    if (!name) {
      status.textContent = "Dites-nous votre nom 🙂";
      status.className = "review-card__status err";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours…";
    status.textContent = "";
    status.className = "review-card__status";

    try {
      const res = await fetch(OWNER_INBOX, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `⭐ Nouvel avis The Twelve — ${rating}/5 de ${name}`,
          _template: "table",
          Note: `${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`,
          Nom: name,
          Message: message || "(aucun message)",
        }),
      });
      if (!res.ok) throw new Error("send-failed");

      reviewForm.classList.add("review-card--sent");
      reviewForm.innerHTML = `
        <span class="sent-ic">🙏</span>
        <h3>Merci ${name} !</h3>
        <p>Votre avis ${"★".repeat(rating)} a bien été transmis au propriétaire.<br/>Il est confidentiel et ne sera pas publié.</p>`;
    } catch {
      // Repli : envoi de l'avis via WhatsApp si l'e-mail échoue
      const txt = encodeURIComponent(`Avis The Twelve — ${rating}/5 ★\nNom : ${name}\n${message}`);
      status.innerHTML = `Oups, l'envoi a échoué. <a href="https://wa.me/213561988434?text=${txt}" target="_blank" rel="noopener" style="color:var(--gold-hi);text-decoration:underline">Envoyer via WhatsApp</a> ?`;
      status.className = "review-card__status err";
      submitBtn.disabled = false;
      submitBtn.textContent = "Réessayer";
    }
  });
}

/* ===== Nav : sticky + menu mobile ===== */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
}

/* ===== Scroll : nav collée + retour en haut ===== */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (nav) nav.classList.toggle("is-stuck", window.scrollY > 30);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
});
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===== Apparition au défilement ===== */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.14 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ===== Année ===== */
document.getElementById("year").textContent = new Date().getFullYear();
