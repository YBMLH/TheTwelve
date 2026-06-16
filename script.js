/* ===== Menu data ===== */
const MENU = [
  { cat: "coffee", emoji: "☕", name: "Espresso", desc: "Notre café signature, intense et velouté.", price: "150 DA" },
  { cat: "coffee", emoji: "🥛", name: "Cappuccino", desc: "Espresso, lait vapeur et mousse onctueuse.", price: "250 DA", tag: "Populaire" },
  { cat: "coffee", emoji: "🧋", name: "Latte Caramel", desc: "Café latte au caramel maison.", price: "300 DA" },
  { cat: "coffee", emoji: "🍫", name: "Chocolat chaud", desc: "Chocolat noir fondant et crème fouettée.", price: "280 DA" },
  { cat: "coffee", emoji: "🧊", name: "Iced Latte", desc: "Café glacé rafraîchissant.", price: "320 DA" },
  { cat: "coffee", emoji: "🍹", name: "Mojito Détox", desc: "Citron vert, menthe fraîche, eau pétillante.", price: "350 DA" },

  { cat: "food", emoji: "🍔", name: "The Twelve Burger", desc: "Double steak, cheddar, sauce maison.", price: "850 DA", tag: "Signature" },
  { cat: "food", emoji: "🍗", name: "Chicken Crispy", desc: "Poulet pané croustillant, frites & coleslaw.", price: "750 DA" },
  { cat: "food", emoji: "🌯", name: "Tacos Twelve", desc: "Viande, fromage fondu, sauce algérienne.", price: "650 DA", tag: "Populaire" },
  { cat: "food", emoji: "🍕", name: "Pizza Mixte", desc: "Mozzarella, viande, champignons, olives.", price: "900 DA" },
  { cat: "food", emoji: "🥗", name: "Salade César", desc: "Poulet grillé, parmesan, croûtons.", price: "600 DA" },
  { cat: "food", emoji: "🍝", name: "Pâtes Alfredo", desc: "Crème, poulet et parmesan.", price: "700 DA" },

  { cat: "breakfast", emoji: "🥐", name: "Petit-déj Complet", desc: "Viennoiseries, œufs, jus & café.", price: "550 DA", tag: "Le matin" },
  { cat: "breakfast", emoji: "🥞", name: "Pancakes", desc: "Pile de pancakes, miel et fruits.", price: "450 DA" },
  { cat: "breakfast", emoji: "🍳", name: "Œufs Brouillés", desc: "Œufs crémeux, pain toasté, avocat.", price: "400 DA" },
  { cat: "breakfast", emoji: "🥪", name: "Croque Twelve", desc: "Jambon, fromage, pain doré.", price: "420 DA" },

  { cat: "dessert", emoji: "🍰", name: "Cheesecake", desc: "Crémeux au coulis de fruits rouges.", price: "350 DA" },
  { cat: "dessert", emoji: "🧇", name: "Gaufre Nutella", desc: "Gaufre tiède, Nutella et banane.", price: "400 DA", tag: "Gourmand" },
  { cat: "dessert", emoji: "🍮", name: "Tiramisu", desc: "Classique italien au café.", price: "380 DA" },
  { cat: "dessert", emoji: "🍦", name: "Coupe Glacée", desc: "3 boules, chantilly et toppings.", price: "320 DA" },
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
          <div>
            <h3 class="dish__name">${d.name}</h3>
            <p class="dish__desc">${d.desc}</p>
          </div>
          <span class="dish__price">${d.price}</span>
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
