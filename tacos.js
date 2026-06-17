/* ===== Tacos builder ===== */
const WHATSAPP_NUMBER = "213561988434";

const PRICES = {
  poulet: { solo: { M: 550, L: 750, XL: 950 }, menu: { M: 700, L: 950, XL: 1150 } },
  viande: { solo: { M: 650, L: 850, XL: 1150 }, menu: { M: 850, L: 1050, XL: 1350 } },
};

const state = {
  base: "poulet",
  format: "solo",
  size: "M",
  meats: [],
  sauces: [],
  supps: [],   // { name, price }
  gratins: [], // { name, price }
};

const fr = (n) => n.toLocaleString("fr-FR").replace(/ | /g, " ");

/* --- Single-choice groups --- */
function bindSingle(containerId, key) {
  const box = document.getElementById(containerId);
  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".opt");
    if (!btn) return;
    box.querySelectorAll(".opt").forEach((o) => o.classList.remove("is-active"));
    btn.classList.add("is-active");
    state[key] = btn.dataset[key];
    render();
  });
}
bindSingle("optBase", "base");
bindSingle("optFormat", "format");
bindSingle("optSize", "size");

/* --- Multi-choice groups (no price) --- */
function bindMulti(containerId, dataKey, stateKey) {
  const box = document.getElementById(containerId);
  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".opt");
    if (!btn) return;
    btn.classList.toggle("is-active");
    const val = btn.dataset[dataKey];
    const i = state[stateKey].indexOf(val);
    if (i === -1) state[stateKey].push(val);
    else state[stateKey].splice(i, 1);
    render();
  });
}
bindMulti("optMeat", "meat", "meats");
bindMulti("optSauce", "sauce", "sauces");

/* --- Multi-choice groups (with price) --- */
function bindPriced(containerId, dataKey, stateKey) {
  const box = document.getElementById(containerId);
  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".opt");
    if (!btn) return;
    btn.classList.toggle("is-active");
    const name = btn.dataset[dataKey];
    const price = Number(btn.dataset.price);
    const i = state[stateKey].findIndex((x) => x.name === name);
    if (i === -1) state[stateKey].push({ name, price });
    else state[stateKey].splice(i, 1);
    render();
  });
}
bindPriced("optSupp", "supp", "supps");
bindPriced("optGratin", "gratin", "gratins");

/* --- Compute + render --- */
const listEl = document.getElementById("summaryList");
const totalEl = document.getElementById("summaryTotal");
const orderBtn = document.getElementById("orderBtn");

function computeTotal() {
  let t = PRICES[state.base][state.format][state.size];
  state.supps.forEach((s) => (t += s.price));
  state.gratins.forEach((g) => (t += g.price));
  return t;
}

function render() {
  const base = PRICES[state.base][state.format][state.size];
  const baseLabel = `Tacos ${cap(state.base)} ${state.size} · ${cap(state.format)}`;

  const rows = [`<li><span>${baseLabel}</span><span>${fr(base)} DA</span></li>`];
  if (state.meats.length) rows.push(line("Viande", state.meats.join(", ")));
  if (state.sauces.length) rows.push(line("Sauces", state.sauces.join(", ")));
  state.supps.forEach((s) => rows.push(`<li><span>Supp. ${s.name}</span><span>+${fr(s.price)} DA</span></li>`));
  state.gratins.forEach((g) => rows.push(`<li><span>Gratiné ${g.name}</span><span>+${fr(g.price)} DA</span></li>`));

  listEl.innerHTML = rows.join("");
  totalEl.textContent = `${fr(computeTotal())} DA`;
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const line = (label, val) => `<li class="summary__sub"><span>${label}</span><span>${val}</span></li>`;

/* --- WhatsApp order --- */
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const lines = [
    "Bonjour The Twelve ! 🌯 Je souhaite commander un tacos :",
    "",
    `• Tacos *${cap(state.base)}* — Taille ${state.size} — ${cap(state.format)}`,
  ];
  if (state.meats.length) lines.push(`• Viande : ${state.meats.join(", ")}`);
  if (state.sauces.length) lines.push(`• Sauces : ${state.sauces.join(", ")}`);
  if (state.supps.length) lines.push(`• Suppléments : ${state.supps.map((s) => s.name).join(", ")}`);
  if (state.gratins.length) lines.push(`• Gratiné : ${state.gratins.map((g) => g.name).join(", ")}`);
  lines.push("", `*Total : ${fr(computeTotal())} DA*`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
});

/* --- Mobile nav --- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});

document.getElementById("year").textContent = new Date().getFullYear();
render();
