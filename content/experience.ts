/* Gowtham S — Professional experience & academic background.
   Cybersecurity researcher, ethical hacker, bug bounty hunter. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "rust-zlt — Red Team Tool Research",
    role: "Red Team Tool Developer (Rust)",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    period: "2025 – Present",
    summary:
      "Advanced red-team tool development in Rust — combining Windows internals, EDR evasion, anti-forensics, and encrypted C2 communication into a single phase-based offensive framework. The same skill set used by Cobalt Strike, Sliver, and Havoc developers.",
    achievements: [
      "ETW patching, NTDLL unhooking and direct syscalls for EDR evasion — bypassing endpoint detection at the kernel API layer",
      "Anti-debug techniques: PEB flag inspection, RDTSC timing attacks, heap flag checks, and parent process validation",
      "UAC bypass via CMSTPLUA COM elevation (ICMLuaUtil) replacing the original fodhelper registry hijack",
      "Process injection via VirtualAllocEx + CreateRemoteThread and Pool Party injection technique",
      "Compile-time string obfuscation with obfstr!() macro — strings never appear in binary plaintext",
      "PE header erasure post-load (.rodata wipe) and binary hardening: strip, panic=abort, lto=fat, opt-level=z",
      "Persistence via registry run keys and scheduled tasks; token manipulation and integrity level inspection",
      "Phase-based execution pipeline (Phase 1 → Phase 6) for clean, ordered offensive operation flow",
    ],
    outcome: "Production-grade red-team framework in Rust with full EDR evasion, C2, and anti-forensics capability",
    skills: ["Rust", "EDR Evasion", "Process Injection", "UAC Bypass", "Anti-Debug", "Direct Syscalls", "ETW Patching", "Windows Internals", "COM Objects", "PEB Manipulation", "Binary Hardening", "C2 Communication"],
    color: "#E02438",
    fg: "light",
    fr: {
      role: "Développeur d'outils red team (Rust)",
      summary:
        "Développement avancé d'outils red team en Rust — combinant les mécanismes internes de Windows, l'évasion EDR, l'anti-forensics et la communication C2 chiffrée en un seul framework offensif à phases. Le même ensemble de compétences utilisé par les développeurs de Cobalt Strike, Sliver et Havoc.",
      outcome: "Framework red team de niveau production en Rust avec évasion EDR complète, C2 et capacités anti-forensics",
      achievements: [
        "Patching ETW, unhooking NTDLL et syscalls directs pour l'évasion EDR — contournement de la détection endpoint au niveau de l'API noyau",
        "Techniques anti-debug : inspection du flag PEB, attaques temporelles RDTSC, vérifications des flags heap et validation du processus parent",
        "Contournement UAC via élévation COM CMSTPLUA (ICMLuaUtil) remplaçant le détournement de registre fodhelper original",
        "Injection de processus via VirtualAllocEx + CreateRemoteThread et technique d'injection Pool Party",
        "Obfuscation de chaînes à la compilation avec la macro obfstr!() — les chaînes n'apparaissent jamais en clair dans le binaire",
        "Effacement de l'en-tête PE après chargement (.rodata wipe) et durcissement binaire : strip, panic=abort, lto=fat, opt-level=z",
      ],
    },
  },

  {
    company: "Independent Researcher",
    role: "Cybersecurity Researcher & Ethical Hacker",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    period: "2023 – Present",
    summary:
      "Full-time vulnerability research, bug bounty hunting, and security tool development. Building Echovulnx and Vulnx while conducting penetration testing and vulnerability research across web applications, APIs, and network infrastructure.",
    achievements: [
      "Built Echovulnx — a full security automation platform chaining Subfinder, HTTPX, Amass, Naabu, GAU, Waybackurls and GF into a unified bug bounty pipeline",
      "Developed Vulnx in Golang — a high-performance concurrent penetration-testing tool leveraging Go's goroutines for large-scale scanning",
      "Conducted vulnerability research across SQL injection, XSS, SSRF, IDOR, and exploit development",
      "Participated in bug bounty programmes on major platforms, identifying and responsibly disclosing vulnerabilities",
      "Automated security recon workflows reducing manual hunting time significantly",
    ],
    outcome: "Active vulnerability researcher with published open-source security tooling",
    skills: ["Python", "Golang", "Bash", "Burp Suite", "Nmap", "Subfinder", "HTTPX", "Amass", "Security Automation", "Bug Bounty"],
    color: "#0D1117",
    fg: "light",
    fr: {
      role: "Chercheur en cybersécurité & hacker éthique",
      summary:
        "Recherche de vulnérabilités à temps plein, chasse aux bugs et développement d'outils de sécurité. Construction d'Echovulnx et Vulnx tout en menant des tests d'intrusion et des recherches de vulnérabilités sur des applications web, des API et des infrastructures réseau.",
      outcome: "Chercheur en vulnérabilités actif avec des outils de sécurité open-source publiés",
      achievements: [
        "Construction d'Echovulnx — une plateforme complète d'automatisation sécurité chaînant Subfinder, HTTPX, Amass, Naabu, GAU, Waybackurls et GF en un pipeline de bug bounty unifié",
        "Développement de Vulnx en Golang — un outil de tests d'intrusion concurrent haute performance exploitant les goroutines de Go pour un scan à grande échelle",
        "Recherche de vulnérabilités sur injection SQL, XSS, SSRF, IDOR et développement d'exploits",
        "Participation à des programmes de bug bounty sur les grandes plateformes, identification et divulgation responsable de vulnérabilités",
        "Automatisation des workflows de reconnaissance sécurité réduisant significativement le temps de chasse manuelle",
      ],
    },
  },
  {
    company: "Panimalar Engineering College",
    role: "B.E. Computer Science & Engineering",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    period: "2021 – 2025",
    summary:
      "Bachelor of Engineering in Computer Science and Engineering. Built a strong foundation in algorithms, networking, operating systems and software development — all directly applied to cybersecurity research. Academic projects spanned machine learning, deep learning, full-stack development and security research.",
    achievements: [
      "Developed Wireless Intrusion Detection System using Random Forest and SMOTE on the AWID dataset — precision, recall, F1-score and ROC-AUC evaluation",
      "Built Medical Plant Identification system using MobileNet-based deep learning and computer vision in Python",
      "Created Pricegram — Flask/Python price tracking system with MySQL backend and Telegram/email alert pipeline for Amazon and Flipkart",
      "Mastered full programming stack: Python, Golang, Bash, JavaScript, PHP, HTML, CSS, SQL",
      "Applied networking and OS fundamentals to penetration testing and vulnerability research",
    ],
    outcome: "B.E. Computer Science & Engineering — strong technical foundation underpinning security research",
    skills: ["Python", "Machine Learning", "Flask", "MySQL", "Deep Learning", "Computer Vision", "Node.js", "React"],
    color: "#1A3A5C",
    fg: "light",
    fr: {
      role: "B.E. Informatique & Génie logiciel",
      summary:
        "Licence en informatique et génie logiciel. Construction d'une solide base en algorithmes, réseaux, systèmes d'exploitation et développement logiciel — tout appliqué directement à la recherche en cybersécurité. Les projets académiques ont couvert le machine learning, l'apprentissage profond, le développement full-stack et la recherche en sécurité.",
      outcome: "B.E. Informatique & Génie logiciel — solide base technique sous-tendant la recherche en sécurité",
      achievements: [
        "Développement d'un système de détection d'intrusion sans fil utilisant Random Forest et SMOTE sur le jeu de données AWID — évaluation précision, rappel, F1-score et ROC-AUC",
        "Construction du système d'identification de plantes médicinales utilisant l'apprentissage profond basé sur MobileNet et la vision par ordinateur en Python",
        "Création de Pricegram — système de suivi des prix Flask/Python avec backend MySQL et pipeline d'alertes Telegram/email pour Amazon et Flipkart",
        "Maîtrise de la pile de programmation complète : Python, Golang, Bash, JavaScript, PHP, HTML, CSS, SQL",
        "Application des fondamentaux de réseaux et d'OS aux tests d'intrusion et à la recherche de vulnérabilités",
      ],
    },
  },
  {
    company: "Security Research — Backend Development",
    role: "Backend Developer & Security Engineer",
    type: "Freelance",
    location: "Chennai, Tamil Nadu, India",
    period: "2022 – 2023",
    summary:
      "Freelance backend development and security engineering work. Built web applications in Flask, PHP CodeIgniter, and Node.js while simultaneously deepening offensive security skills. Understanding application architecture from a developer's perspective directly informs better vulnerability research.",
    achievements: [
      "Built full-stack web applications using Flask, PHP CodeIgniter, and Node.js",
      "Designed and implemented MySQL and MongoDB database schemas for production applications",
      "Applied OWASP Top 10 knowledge to identify and remediate vulnerabilities in web applications",
      "Developed SQLite-backed lightweight applications for internal tooling",
      "Bridged developer and security mindsets — understanding how applications are built to understand how they break",
    ],
    outcome: "Solid full-stack development foundation that directly enhances offensive security research",
    skills: ["Flask", "PHP CodeIgniter", "Node.js", "MySQL", "MongoDB", "SQLite", "JavaScript", "PHP"],
    color: "#117A65",
    fg: "light",
    fr: {
      role: "Développeur backend & ingénieur sécurité",
      summary:
        "Travail de développement backend et d'ingénierie sécurité en freelance. Construction d'applications web en Flask, PHP CodeIgniter et Node.js tout en approfondissant simultanément les compétences en sécurité offensive. Comprendre l'architecture applicative du point de vue d'un développeur informe directement une meilleure recherche de vulnérabilités.",
      outcome: "Solide base de développement full-stack qui renforce directement la recherche en sécurité offensive",
      achievements: [
        "Construction d'applications web full-stack en Flask, PHP CodeIgniter et Node.js",
        "Conception et implémentation de schémas de bases de données MySQL et MongoDB pour des applications en production",
        "Application des connaissances OWASP Top 10 pour identifier et corriger les vulnérabilités dans les applications web",
        "Développement d'applications légères basées sur SQLite pour les outils internes",
        "Pont entre les mentalités développeur et sécurité — comprendre comment les applications sont construites pour comprendre comment elles se brisent",
      ],
    },
  },
];
