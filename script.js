/* ===== Menu data (prix en DA) ===== */
const MENU = [
  /* --- Burgers (Solo / Menu) --- */
  { cat: "burgers", emoji: "🍔", name: "Classic Burger", desc: "100g viande hachée, salade, tomate, cheddar, sauces burger.", price: "500 / 700", note: "Solo / Menu" },
  { cat: "burgers", emoji: "🍔", name: "Forest Burger", desc: "100g viande hachée, salade, tomate, cheddar, sauce burger.", price: "600 / 800", note: "Solo / Menu" },
  { cat: "burgers", emoji: "🍔", name: "Chicken Burger", desc: "100g poulet, salade, tomate, cheddar, sauces burger.", price: "450 / 650", note: "Solo / Menu" },
  { cat: "burgers", emoji: "🍔", name: "Double Burger", desc: "Double viande hachée, salade, tomate, cheddar, sauce burger.", price: "700 / 900", note: "Solo / Menu", tag: "Populaire" },

  /* --- Pizza (PM / GM) --- */
  { cat: "pizza", emoji: "🍕", name: "Marguerite", desc: "Sauce tomate, fromage, olive.", price: "550 / 1 150", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Végétarienne", desc: "Tomate, fromage, poivron, tomate fraîche, maïs, champignons.", price: "650 / 1 650", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Thon", desc: "Tomate, fromage, thon, olive, origan.", price: "850 / 1 950", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Chicken", desc: "Tomate, fromage, poulet, champignons, olive.", price: "900 / 2 150", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Orientale", desc: "Tomate, fromage, merguez, olive, champignons, poivron, origan.", price: "850 / 2 050", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Buffalo", desc: "Tomate, fromage, viande hachée, champignons, olive, origan.", price: "950 / 2 250", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "4 Fromages", desc: "Crème fraîche, fromage fondu, camembert, cheddar, olive.", price: "1 000 / 2 300", note: "PM / GM" },
  { cat: "pizza", emoji: "🍕", name: "Pizza Twelve", desc: "Crème fraîche, fromage fondu, viande hachée, poulet, merguez, olive.", price: "1 050 / 2 450", note: "PM / GM", tag: "Signature" },

  /* --- Tacos & Kids --- */
  { cat: "tacos", emoji: "🌯", name: "Tacos Poulet", desc: "Solo ou menu • M / L / XL. Sauces & suppléments au choix.", price: "dès 550", note: "Solo / Menu" },
  { cat: "tacos", emoji: "🌯", name: "Tacos Viande", desc: "Solo ou menu • M / L / XL. Sauces & suppléments au choix.", price: "dès 650", note: "Solo / Menu" },
  { cat: "tacos", emoji: "🍟", name: "Barquette de frites", desc: "Nature ou sauce cheddar.", price: "150 / 350" },
  { cat: "tacos", emoji: "🧒", name: "Menu Kids Hamburger", desc: "Hamburger, barquette de frites, boisson + surprise.", price: "550", tag: "Kids" },
  { cat: "tacos", emoji: "🧒", name: "Menu Kids Tenders", desc: "Chicken tenders, barquette de frites, boisson + surprise.", price: "800", tag: "Kids" },

  /* --- Plats --- */
  { cat: "plats", emoji: "🍗", name: "Poulet Rôti", desc: "Poulet rôti, accompagnement.", price: "900" },
  { cat: "plats", emoji: "🍖", name: "Escalope Grillée", desc: "Escalope de poulet grillée.", price: "950" },
  { cat: "plats", emoji: "🌯", name: "Chawarma", desc: "Chawarma maison.", price: "850" },
  { cat: "plats", emoji: "🍗", name: "Poulet Mariné", desc: "Poulet mariné aux épices.", price: "850" },
  { cat: "plats", emoji: "🍗", name: "Escalope Panée", desc: "Escalope panée croustillante.", price: "950" },
  { cat: "plats", emoji: "🍄", name: "Escalope crème champignons", desc: "Escalope à la crème de champignons.", price: "1 000" },
  { cat: "plats", emoji: "🧀", name: "Cordon Bleu", desc: "Cordon bleu maison.", price: "1 000" },
  { cat: "plats", emoji: "🥩", name: "Entrecôte", desc: "Grillée ou à la crème de champignons.", price: "2 000" },
  { cat: "plats", emoji: "🥩", name: "Steak Grillé", desc: "Steak grillé, accompagnement.", price: "1 900" },

  /* --- Entrées chaudes --- */
  { cat: "entrees", emoji: "🧀", name: "Gratin Viande", desc: "Gratin à la viande.", price: "600" },
  { cat: "entrees", emoji: "🧀", name: "Gratin Poulet", desc: "Gratin au poulet.", price: "550" },
  { cat: "entrees", emoji: "🧀", name: "Gratin Mixte", desc: "Viande hachée & poulet.", price: "700" },
  { cat: "entrees", emoji: "🧀", name: "Croustillant de Camembert", desc: "Camembert pané croustillant.", price: "500" },
  { cat: "entrees", emoji: "🍟", name: "Poutine Poulet", desc: "Frites, fromage, poulet.", price: "450" },
  { cat: "entrees", emoji: "🍟", name: "Poutine Viande", desc: "Frites, fromage, viande.", price: "500" },
  { cat: "entrees", emoji: "🍟", name: "Poutine Crispy", desc: "Frites, fromage, poulet crispy.", price: "500" },
  { cat: "entrees", emoji: "🍗", name: "Crousty Poulet", desc: "Poulet croustillant.", price: "550" },

  /* --- Pâtes --- */
  { cat: "pates", emoji: "🍝", name: "Pâtes 3 Fromages", desc: "Sauce aux trois fromages.", price: "700" },
  { cat: "pates", emoji: "🍝", name: "Pâtes Bolognaise", desc: "Sauce bolognaise.", price: "750" },
  { cat: "pates", emoji: "🍝", name: "Pâtes Italienne", desc: "Sauce italienne.", price: "700" },

  /* --- Salades (bar à salade) --- */
  { cat: "salades", emoji: "🥗", name: "Salade Variée", desc: "Assortiment de crudités.", price: "400" },
  { cat: "salades", emoji: "🥗", name: "Salade au Thon", desc: "Salade fraîche au thon.", price: "500" },
  { cat: "salades", emoji: "🥗", name: "Salade César", desc: "Poulet, parmesan, croûtons.", price: "600" },

  /* --- Broaster --- */
  { cat: "broaster", emoji: "🍗", name: "Broaster 2 Pièces", desc: "2 pièces de poulet broaster.", price: "850" },
  { cat: "broaster", emoji: "🍗", name: "Broaster 4 Pièces", desc: "4 pièces de poulet broaster.", price: "1 600" },
  { cat: "broaster", emoji: "🍗", name: "Broaster 8 Pièces", desc: "8 pièces de poulet broaster.", price: "2 900" },
  { cat: "broaster", emoji: "🍗", name: "Broaster 12 Pièces", desc: "12 pièces de poulet broaster.", price: "3 600", tag: "À partager" },
  { cat: "broaster", emoji: "🍗", name: "Chicken Tenders", desc: "Tenders de poulet croustillants.", price: "800" },

  /* --- Café & boissons chaudes --- */
  { cat: "coffee", emoji: "☕", name: "Café Machine", desc: "Espresso machine.", price: "150" },
  { cat: "coffee", emoji: "☕", name: "Café Italien", desc: "Café à l'italienne.", price: "150" },
  { cat: "coffee", emoji: "☕", name: "Café Capsule", desc: "Caps, L'OR, illy, Nespresso, Lavazza.", price: "200 - 300" },
  { cat: "coffee", emoji: "☕", name: "Café Richard", desc: "Grains de spécialité au choix.", price: "250" },
  { cat: "coffee", emoji: "🥛", name: "Cappuccino Classique", desc: "Espresso, lait vapeur, mousse.", price: "250" },
  { cat: "coffee", emoji: "🍫", name: "Cappuccino Chocolat", desc: "Cappuccino au chocolat.", price: "300" },
  { cat: "coffee", emoji: "🥛", name: "Cappuccino Vanille", desc: "Cappuccino à la vanille.", price: "250" },
  { cat: "coffee", emoji: "🍫", name: "Chocolat Chaud", desc: "Chocolat chaud onctueux.", price: "250" },
  { cat: "coffee", emoji: "🥛", name: "Café Crème", desc: "Café crème.", price: "50" },
  { cat: "coffee", emoji: "🍵", name: "Thé / Tisane", desc: "Thé, tisane ou thé maison.", price: "100" },
  { cat: "coffee", emoji: "🍵", name: "Thé au Citron", desc: "Thé parfumé au citron.", price: "120" },

  /* --- Crêpes & Gaufres --- */
  { cat: "crepes", emoji: "🥞", name: "Crêpe au Chocolat", desc: "Croustillante ou moelleuse.", price: "400 / 350", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe Banane", desc: "Croustillante ou moelleuse.", price: "600 / 550", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe Fraise", desc: "Croustillante ou moelleuse.", price: "600 / 600", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe aux Fruits", desc: "Croustillante ou moelleuse.", price: "700 / 650", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe Pistache", desc: "Croustillante ou moelleuse.", price: "700 / 650", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe Dubaï", desc: "Croustillante ou moelleuse.", price: "600 / 550", note: "Croust. / Moell." },
  { cat: "crepes", emoji: "🥞", name: "Crêpe Twelve", desc: "Croustillante ou moelleuse.", price: "800 / 750", note: "Croust. / Moell.", tag: "Signature" },
  { cat: "crepes", emoji: "🧇", name: "Gaufre Nature", desc: "Gaufre nature.", price: "300" },
  { cat: "crepes", emoji: "🧇", name: "Gaufre au Chocolat", desc: "Gaufre au chocolat.", price: "400" },
  { cat: "crepes", emoji: "🧇", name: "Gaufre Banane", desc: "Gaufre à la banane.", price: "300" },
  { cat: "crepes", emoji: "🧇", name: "Gaufre Fraise", desc: "Gaufre à la fraise.", price: "300" },
  { cat: "crepes", emoji: "🧇", name: "Gaufre Twelve", desc: "Gaufre signature.", price: "300" },
  { cat: "crepes", emoji: "🥞", name: "Pancake", desc: "Pile de pancakes.", price: "500" },

  /* --- Desserts & viennoiserie --- */
  { cat: "desserts", emoji: "🥧", name: "Mini Tarte", desc: "Petite tarte gourmande.", price: "300" },
  { cat: "desserts", emoji: "🍰", name: "Gâteaux Gamme", desc: "Selon disponibilité.", price: "450" },
  { cat: "desserts", emoji: "🍓", name: "Le Fraisier", desc: "Fraisier traditionnel.", price: "400" },
  { cat: "desserts", emoji: "🍫", name: "Gâteau au Chocolat", desc: "Gâteau tout chocolat.", price: "450" },
  { cat: "desserts", emoji: "🍫", name: "Gâteau 100% Nutella", desc: "Pour les fans de Nutella.", price: "600" },
  { cat: "desserts", emoji: "🍰", name: "Cheesecake", desc: "Nutella, Bueno ou Lotus.", price: "400", tag: "Populaire" },
  { cat: "desserts", emoji: "🍮", name: "Fondant au Chocolat", desc: "Solo avec boule gelato : 350 DA.", price: "550" },
  { cat: "desserts", emoji: "🍓", name: "Fondant aux Fruits", desc: "Fondant garni de fruits.", price: "450" },
  { cat: "desserts", emoji: "🍮", name: "Les Verrines", desc: "Tiramisu ou cheesecake.", price: "400" },
  { cat: "desserts", emoji: "🍮", name: "Tiramisu Gâteau", desc: "Tiramisu façon gâteau.", price: "400" },
  { cat: "desserts", emoji: "🍫", name: "Mousse au Chocolat", desc: "Mousse légère au chocolat.", price: "400" },
  { cat: "desserts", emoji: "🍮", name: "Crème Brûlée", desc: "Crème brûlée vanille.", price: "400" },
  { cat: "desserts", emoji: "🥐", name: "Croissant / Pain Chocolat", desc: "Viennoiserie du jour.", price: "50" },
  { cat: "desserts", emoji: "🥐", name: "Brownies", desc: "Brownie au chocolat.", price: "300" },
  { cat: "desserts", emoji: "🥧", name: "Mille-feuilles", desc: "Mille-feuilles crémeux.", price: "150" },
  { cat: "desserts", emoji: "🥧", name: "Tartes", desc: "Fraises, pommes ou fruits.", price: "300" },
  { cat: "desserts", emoji: "🥧", name: "Quiche", desc: "Quiche salée.", price: "120" },

  /* --- Bar à jus --- */
  { cat: "jus", emoji: "🍊", name: "Jus d'Orange", desc: "Pressé minute.", price: "400" },
  { cat: "jus", emoji: "🍹", name: "Cocktail de Fruits", desc: "Mélange de fruits frais.", price: "450" },
  { cat: "jus", emoji: "🍹", name: "Bleu Star", desc: "Cocktail signature.", price: "450" },
  { cat: "jus", emoji: "🍹", name: "American Pie", desc: "Cocktail fruité.", price: "450" },
  { cat: "jus", emoji: "🍹", name: "Sweet Valentine", desc: "Cocktail doux.", price: "400" },
  { cat: "jus", emoji: "🌈", name: "Cocktail Sauvage", desc: "Arc-en-ciel.", price: "500" },
  { cat: "jus", emoji: "🥤", name: "Milk-Shake", desc: "Fraise, banane, Nutella, Oreo ou Kinder Bueno.", price: "500", tag: "Populaire" },
  { cat: "jus", emoji: "🥤", name: "Smoothie", desc: "Banane, fraise ou Twelve.", price: "500" },
  { cat: "jus", emoji: "🍃", name: "Mojito", desc: "Classique, Azur, Rojo ou Aflas.", price: "400 - 500" },
  { cat: "jus", emoji: "🧋", name: "Frappuccino", desc: "Chocolat, vanille ou caramel.", price: "350 - 400" },

  /* --- Boissons fraîches --- */
  { cat: "boissons", emoji: "💧", name: "Eau Minérale", desc: "Petite (50) ou grande (80) bouteille.", price: "50 / 80" },
  { cat: "boissons", emoji: "🥤", name: "Soda", desc: "Hamoud Boualem, Coca-Cola, Schweppes, Pepsi.", price: "100" },
  { cat: "boissons", emoji: "🧃", name: "Jus 33cl", desc: "Ramy, Rouiba, Ifruit.", price: "100" },
  { cat: "boissons", emoji: "🥫", name: "Canette", desc: "Coca-Cola, Schweppes, Rouiba Excellence.", price: "150" },
];

/* ===== Render menu ===== */
const grid = document.getElementById("menuGrid");

function renderMenu(filter = "all") {
  const items = filter === "all" ? MENU : MENU.filter((d) => d.cat === filter);
  grid.innerHTML = items
    .map(
      (d) => `
      <article class="dish">
        <div class="dish__top">
          <div class="dish__emoji">${d.emoji}</div>
          <div class="dish__body">
            <h3 class="dish__name">${d.name}</h3>
            <p class="dish__desc">${d.desc}</p>
          </div>
          <div class="dish__pricing">
            <span class="dish__price">${d.price} DA</span>
            ${d.note ? `<span class="dish__pnote">${d.note}</span>` : ""}
          </div>
        </div>
        ${d.tag ? `<span class="dish__tag">${d.tag}</span>` : ""}
      </article>`
    )
    .join("");
}
renderMenu();

/* ===== Menu filters ===== */
const filters = document.getElementById("menuFilters");
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderMenu(btn.dataset.filter);
});

/* ===== Mobile nav ===== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});
navMenu.addEventListener("click", (e) => {
  if (e.target.matches(".nav__link")) {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
  }
});

/* ===== Header shadow + active link on scroll ===== */
const header = document.getElementById("header");
const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll(".nav__link")];

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);

  const pos = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const sec of sections) {
    if (pos >= sec.offsetTop) current = sec.id;
  }
  links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${current}`));
});

/* ===== Reveal on scroll ===== */
const revealTargets = document.querySelectorAll(
  ".about__text, .about__media, .menu__filters, .menu__grid, .service, .gallery__item, .contact__info, .contact__form, .section__head"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

/* ===== Contact form -> WhatsApp ===== */
const WHATSAPP_NUMBER = "213561988434"; // The Twelve — format international sans "+"
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.name.value.trim() || !form.phone.value.trim()) {
    form.reportValidity();
    return;
  }

  const text =
    `Bonjour The Twelve ! 👋\n\n` +
    `*Nom :* ${form.name.value.trim()}\n` +
    `*Téléphone :* ${form.phone.value.trim()}\n` +
    `*Motif :* ${form.reason.value}\n` +
    (form.message.value.trim() ? `*Message :* ${form.message.value.trim()}\n` : "");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");

  note.hidden = false;
  form.reset();
  setTimeout(() => (note.hidden = true), 6000);
});

/* ===== Footer year ===== */
document.getElementById("year").textContent = new Date().getFullYear();
