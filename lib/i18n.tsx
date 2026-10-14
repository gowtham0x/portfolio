"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr?: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Cybersecurity Researcher & Ethical Hacker",
    fr: "Chercheur en cybersécurité & hacker éthique",
  },
  "hero.h1a": { en: "Security that", fr: "La sécurité qui" },
  "hero.h1aEm": { en: "protects.", fr: "protège." },
  "hero.h1b": { en: "Hacking that", fr: "Le hacking qui" },
  "hero.h1bEm": { en: "reveals.", fr: "révèle." },
  "hero.sub": {
    en: "I enjoy learning how things work, experimenting with new ideas, and building things of my own. I'm always curious about what's possible and how I can make something better.",
    fr: "J'aime comprendre le fonctionnement des choses, expérimenter de nouvelles idées et créer mes propres projets. Toujours curieux d'explorer et d'optimiser.",
  },
  "hero.cta1": { en: "View My Projects", fr: "Voir mes projets" },
  "hero.cta2": { en: "My Journey", fr: "Mon parcours" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Security Projects", fr: "Projets sécurité" },
  "stat.years": { en: "Years in Security", fr: "Ans en cybersécurité" },
  "stat.countries": { en: "Bug Bounty Targets", fr: "Cibles bug bounty" },
  "stat.satisfaction": { en: "CVEs Researched", fr: "CVE recherchées" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "Security is how I think —", fr: "La sécurité, c'est ma façon de penser —" },
  "about.h2b": { en: "breaking things is how I", fr: "le hacking, ma façon de la" },
  "about.h2Em": { en: "fix", fr: "corriger" },
  "about.h2c": { en: "them.", fr: "." },
  "about.m1": {
    en: "Computer Science & Engineering",
    fr: "Informatique & Ingénierie",
  },
  "about.m2": {
    en: "Currently Pursuing at Panimalar Engineering College",
    fr: "Actuellement à Panimalar Engineering College",
  },
  "about.m3": {
    en: "Years of Security Research",
    fr: "Ans de recherche en sécurité",
  },
  "about.m4": {
    en: "Vulnerabilities Identified",
    fr: "Vulnérabilités identifiées",
  },
  "about.edu": {
    en: "B.E. Computer Science & Engineering · MBA Candidate at Panimalar Engineering College · Chennai, Tamil Nadu · Languages: Tamil, English",
    fr: "B.E. Informatique & Ingénierie · Candidat MBA à Panimalar Engineering College · Chennai, Tamil Nadu · Langues: Tamoul, Anglais",
  },
  "about.cta": { en: "Explore My Projects", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From curiosity to code — a journey of building, breaking, and learning.",
    fr: "De la curiosité au code — un parcours d'exploration, de création et d'apprentissage continu.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Outils" },
  "stack.h2": { en: "My Security &", fr: "Mon arsenal de" },
  "stack.h2Em": { en: "Dev Stack.", fr: "sécurité." },
  "stack.lede": {
    en: "The tools I use to research, exploit, automate and build — from Burp Suite and Nmap to Python, Golang, Rust red-team tooling and full-stack development.",
    fr: "Les outils que j'utilise pour rechercher, exploiter, automatiser et construire — de Burp Suite et Nmap à Python, Golang, l'outillage red-team Rust et le développement full-stack.",
  },
  "stack.count": { en: "tools", fr: "outils" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Projects", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Security tools,", fr: "Des outils de sécurité," },
  "work.h2b": { en: "built to", fr: "conçus pour" },
  "work.h2Em": { en: "hunt.", fr: "traquer." },
  "work.lede": {
    en: "Security automation, penetration testing, bug bounty tooling and software development — each project a different weapon, one mission.",
    fr: "Automatisation de la sécurité, tests d'intrusion, bug bounty et développement logiciel — chaque projet une arme différente, une seule mission.",
  },
  "work.open": { en: "Open project", fr: "Voir le projet" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I built my", fr: "Là où j’ai forgé mon" },
  "exp.h2Em": { en: "judgment.", fr: "jugement." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across cybersecurity, penetration testing, security automation and machine learning — the technical base underneath the vulnerability research.",
    fr: "Un apprentissage continu et appliqué en cybersécurité, tests d'intrusion, automatisation de la sécurité et machine learning — la base technique de la recherche en vulnérabilités.",
  },
  "cert.introNote": {
    en: "Five skill areas · ethical hacking, web security, bug bounty automation, network security and security tooling.",
    fr: "Cinq domaines de compétences · hacking éthique, sécurité web, automatisation bug bounty, sécurité réseau et outillage sécurité.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Credentials", fr: "Certifications" },
  "cert.lede": {
    en: "Security credentials, skill areas and hands-on research earned throughout my cybersecurity journey.",
    fr: "Certifications en sécurité, domaines de compétences et recherches pratiques obtenus tout au long de mon parcours en cybersécurité.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "Cybersecurity Researcher", fr: "Chercheur en cybersécurité" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Organisme — à confirmer" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential on request", fr: "Justificatif sur demande" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verify credential ↗", fr: "Vérifier le justificatif ↗" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let's Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let's build what's", fr: "Construisons ce qui" },
  "connect.h2Em": { en: "secure.", fr: "est sécurisé." },
  "connect.lede": {
    en: "I'm open to bug bounty collaborations, security research opportunities, penetration testing engagements and interesting conversations — if you're building something that needs to be bulletproof, let's talk.",
    fr: "Je suis ouvert aux collaborations bug bounty, aux opportunités de recherche en sécurité, aux missions de pentest et aux bonnes conversations — si vous construisez quelque chose qui doit être inviolable, parlons-en.",
  },
  "connect.cta": { en: "Start a Conversation", fr: "Démarrer la conversation" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => { },
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
