/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * Gowtham S — B.E. Computer Science & Engineering, Panimalar Engineering College.
 * Cybersecurity Researcher, Ethical Hacker, Bug Bounty Hunter, Penetration Tester.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2021",
    title: "The Curiosity Begins",
    place: "Chennai, Tamil Nadu, India",
    story:
      "I started becoming curious about computers and how things worked behind the screen. I spent time exploring programming, learning the basics of Python, and getting familiar with the command line. At first, I was just trying things out, but the more I learned, the more interested I became in understanding how software and systems actually work.",
    bridge: "It all started with curiosity and a willingness to learn.",
    fr: {
      title: "La curiosité commence",
      place: "Chennai, Tamil Nadu, Inde",
      story:
        "J'ai commencé à devenir curieux des ordinateurs et du fonctionnement des choses derrière l'écran. J'ai exploré la programmation, appris les bases de Python et pris en main la ligne de commande. Au début, je testais juste des choses, mais plus j'apprenais, plus je voulais comprendre comment les logiciels et les systèmes fonctionnent réellement.",
      bridge: "Tout a commencé par la curiosité et une volonté d'apprendre.",
    },
  },
  {
    id: "hacking",
    year: "2022",
    title: "Exploring Cybersecurity",
    place: "Panimalar Engineering College · Chennai",
    story:
      "During my B.E. in Computer Science and Engineering at Panimalar Engineering College, I became interested in cybersecurity. I started learning Linux, networking, and web application security, and experimenting with tools like Burp Suite and Nmap. I also explored capture-the-flag challenges and began writing small Bash and Python scripts to automate repetitive tasks.",
    bridge: "I realized that understanding how something works also means understanding where it can go wrong.",
    fr: {
      title: "Explorer la cybersécurité",
      place: "Panimalar Engineering College · Chennai",
      story:
        "Pendant mon B.E. en Informatique à Panimalar Engineering College, je me suis intéressé à la cybersécurité. J'ai appris Linux, les réseaux et la sécurité des applications web, et j'ai expérimenté avec Burp Suite et Nmap. J'ai aussi exploré les challenges CTF et commencé à écrire des scripts Bash et Python pour automatiser des tâches.",
      bridge: "J'ai réalisé que comprendre comment quelque chose fonctionne signifie aussi comprendre où cela peut mal tourner.",
    },
  },
  {
    id: "automation",
    year: "2023",
    title: "From Learning to Building",
    place: "Security Automation · Software Development",
    story:
      "As I continued learning cybersecurity, I wanted to build something of my own. That's when I started working on EchoVulnX, a tool designed to automate reconnaissance and simplify security testing workflows. I also spent time learning backend development with Python, Flask, PHP, and Node.js. Working on these projects helped me understand how applications are built and how security fits into the development process.",
    bridge: "Using tools helped me learn, but building my own taught me even more.",
    fr: {
      title: "De l'apprentissage à la construction",
      place: "Automatisation de sécurité · Développement logiciel",
      story:
        "En continuant d'apprendre la cybersécurité, j'ai voulu construire quelque chose par moi-même. C'est là que j'ai commencé à travailler sur EchoVulnX, un outil pour automatiser la reconnaissance et simplifier les workflows de tests de sécurité. J'ai aussi appris le développement backend avec Python, Flask, PHP et Node.js.",
      bridge: "Utiliser des outils m'a aidé à apprendre, mais construire les miens m'a appris encore plus.",
    },
  },
  {
    id: "golang",
    year: "2024",
    title: "Learning Through Real Experience",
    place: "NIT Tiruchirappalli · Tamil Nadu",
    story:
      "In June 2024, I worked as a Web Development Intern at the National Institute of Technology, Tiruchirappalli. I worked with faculty members to understand requirements and helped develop an online examination system for more than 200 students. My work involved authentication, examination workflows, testing, and resolving issues before deployment. Around this period, I also explored Go and worked on VulnX, focusing on modular security automation and configurable workflows.",
    bridge: "This experience taught me that building software isn't just about writing code. It's also about understanding requirements, working with people, and making things reliable.",
    fr: {
      title: "Apprendre par l'expérience réelle",
      place: "NIT Tiruchirappalli · Tamil Nadu",
      story:
        "En juin 2024, j'ai travaillé comme stagiaire en développement web au National Institute of Technology, Tiruchirappalli. J'ai collaboré avec des enseignants pour comprendre les besoins et développé un système d'examen en ligne pour plus de 200 étudiants. Mon travail incluait l'authentification, les workflows d'examen, les tests et la résolution de problèmes avant déploiement. J'ai aussi exploré Go et travaillé sur VulnX.",
      bridge: "Cette expérience m'a appris que construire un logiciel ne se résume pas à écrire du code. C'est aussi comprendre les besoins, travailler avec les gens et rendre les choses fiables.",
    },
  },
  {
    id: "research",
    year: "2025",
    title: "Exploring New Technologies",
    place: "Rust · Red Team Research · Software Engineering",
    story:
      "I continued expanding my skills in software development and cybersecurity, exploring Rust and working on ZTL (Zero Trust Link). The project gave me opportunities to work on modular architecture, encrypted communications, and other security-related features. Alongside security research, I continued exploring full-stack development and learning how to design and build software that's practical, maintainable, and useful.",
    bridge: "Every project brings a different challenge, and that's what keeps me interested in building things.",
    fr: {
      title: "Explorer de nouvelles technologies",
      place: "Rust · Red Team · Ingénierie logicielle",
      story:
        "J'ai continué à développer mes compétences en développement logiciel et en cybersécurité, explorant Rust et travaillant sur ZTL (Zero Trust Link). Le projet m'a donné l'occasion de travailler sur une architecture modulaire, des communications chiffrées et d'autres fonctionnalités liées à la sécurité. En parallèle, j'ai continué à explorer le développement full-stack.",
      bridge: "Chaque projet apporte un défi différent, et c'est ce qui me maintient intéressé à construire des choses.",
    },
  },
  {
    id: "mission",
    year: "2026",
    title: "Still Learning, Still Building",
    place: "Panimalar Engineering College · Chennai",
    story:
      "After completing my B.E. in Computer Science and Engineering, I started pursuing my MBA at Panimalar Engineering College. Alongside my studies, I'm currently building ZC, a project focused on anonymous voice calling and file sharing through the Tor network. It's still under development, and I'm working on turning the idea into a functional application. I'm also continuing to explore cybersecurity, software development, and product design while learning more about project management and business.",
    bridge: "There's still a lot I want to learn, plenty of ideas I want to try, and more things I want to build.",
    fr: {
      title: "Toujours apprendre, toujours construire",
      place: "Panimalar Engineering College · Chennai",
      story:
        "Après mon B.E. en Informatique, j'ai commencé un MBA à Panimalar Engineering College. En parallèle de mes études, je construis actuellement ZC, un projet axé sur les appels vocaux anonymes et le partage de fichiers via le réseau Tor. C'est encore en développement. Je continue aussi à explorer la cybersécurité, le développement logiciel et le design produit.",
      bridge: "Il y a encore beaucoup que je veux apprendre, des idées que je veux essayer, et des choses que je veux construire.",
    },
  },
];
