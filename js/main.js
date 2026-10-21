const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

// ---------- Work list ----------
const list = $("#work-list");
const preview = $("#work-preview");
const previewImg = $("img", preview);

PROJECTS.forEach((p, i) => {
  const li = el("li", "work__item");
  const a = el("a", "work__link");
  a.href = `#${p.id}`;
  a.dataset.open = p.id;

  a.append(
    el("span", "work__num", String(i + 1).padStart(2, "0")),
    el("span", "work__title", p.title),
    el("span", "work__meta", `${p.kicker} · ${p.year}`),
  );

  const sub = el("span", "work__sub");
  sub.append(el("span", "work__summary", p.summary));
  if (p.cover) {
    const img = el("img", "work__thumb");
    img.src = p.cover;
    img.alt = "";
    img.loading = "lazy";
    sub.append(img);
  }
  a.append(sub);

  a.addEventListener("mouseenter", () => {
    if (!p.cover) return preview.classList.remove("is-on");
    previewImg.src = p.cover;
    preview.classList.add("is-on");
  });
  a.addEventListener("mouseleave", () => preview.classList.remove("is-on"));

  li.append(a);
  list.append(li);
});

list.addEventListener("mousemove", (e) => {
  preview.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 120}px)`;
});

// ---------- Archive ----------
const archive = $("#archive-list");
ARCHIVE.forEach(([year, title, text, context]) => {
  const li = el("li", "archive__item");
  const body = el("div");
  body.append(el("h3", null, title), el("p", null, text));
  li.append(el("span", "archive__year", year), body, el("span", "archive__ctx", context));
  archive.append(li);
});

// ---------- Case study overlay ----------
const dialog = $("#case");
const inner = $("#case-inner");

function renderCase(p) {
  $("#case-kicker").textContent = `${p.kicker} · ${p.year}`;
  inner.replaceChildren();

  const head = el("header", "case__head");
  const h = el("h2", "display", p.title);
  h.id = "case-title";
  head.append(h, el("p", "case__summary", p.summary));

  const tags = el("ul", "tags");
  p.tags.forEach((t) => tags.append(el("li", null, t)));
  head.append(tags);
  inner.append(head);

  if (p.cover) {
    const fig = el("figure", "case__cover");
    const img = el("img");
    img.src = p.cover;
    const match = p.gallery.find(([src]) => src === p.cover);
    img.alt = match ? match[1] : p.title;
    fig.append(img);
    inner.append(fig);
  }

  const grid = el("div", "case__grid");
  const facts = el("dl", "case__facts");
  p.facts.forEach(([k, v]) => facts.append(el("dt", null, k), el("dd", null, v)));
  if (p.links.length) {
    const dd = el("dd", "case__links");
    p.links.forEach(([text, href]) => {
      const a = el("a", "link-arrow", text);
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener";
      dd.append(a);
    });
    facts.append(el("dt", null, "Links"), dd);
  }

  const body = el("div", "case__body");
  p.sections.forEach((s) => {
    const sec = el("section");
    sec.append(el("h3", "label", s.heading), el("p", null, s.body));
    body.append(sec);
  });
  grid.append(facts, body);
  inner.append(grid);

  // The cover is already shown above, so leave it out of the gallery.
  const rest = p.gallery.filter(([src]) => src !== p.cover);
  if (rest.length) {
    const gal = el("div", "case__gallery");
    rest.forEach(([src, caption]) => {
      const fig = el("figure");
      let media;
      if (src.endsWith(".mp4")) {
        media = el("video");
        media.src = src;
        media.muted = true;
        media.loop = true;
        media.autoplay = true;
        media.playsInline = true;
        media.controls = true;
        media.preload = "metadata";
        media.setAttribute("aria-label", caption);
      } else {
        media = el("img");
        media.src = src;
        media.alt = caption;
        media.loading = "lazy";
      }
      fig.append(media, el("figcaption", null, caption));
      gal.append(fig);
    });
    inner.append(gal);
  }

  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextLink = el("a", "case__next");
  nextLink.href = `#${next.id}`;
  nextLink.dataset.open = next.id;
  nextLink.append(el("span", "label", "Next project"), el("span", "display", next.title));
  inner.append(nextLink);
}

function openCase(id, push = true) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  renderCase(p);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.documentElement.classList.add("is-locked");
  if (push && location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
}

function closeCase(push = true) {
  if (dialog.open) dialog.close();
  document.documentElement.classList.remove("is-locked");
  if (push) history.pushState(null, "", location.pathname + location.search);
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-open]");
  if (!trigger) return;
  e.preventDefault();
  openCase(trigger.dataset.open);
});
$("#case-close").addEventListener("click", () => closeCase());
dialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeCase();
});

function syncFromHash() {
  const id = location.hash.slice(1);
  if (PROJECTS.some((p) => p.id === id)) openCase(id, false);
  else closeCase(false);
}
window.addEventListener("popstate", syncFromHash);
syncFromHash();

// ---------- Small things ----------
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view.
const navLinks = [...document.querySelectorAll(".nav__links a")];
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-active", a.hash === `#${entry.target.id}`));
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
navLinks.forEach((a) => spy.observe($(a.hash)));

$("#year").textContent = new Date().getFullYear();

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".section-head, .work__item, .about__grid, .timeline li, .skills__grid > div, .archive__item, .contact__big")
  .forEach((node) => {
    node.classList.add("reveal");
    io.observe(node);
  });
