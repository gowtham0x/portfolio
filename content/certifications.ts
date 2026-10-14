/* Gowtham S — Security credentials, learning & skills.
 *
 * Reflects cybersecurity focus: ethical hacking, penetration testing,
 * bug bounty, security automation, and programming fundamentals.
 *
 * To complete a panel, fill in: issuer, year, credentialId, credentialUrl.
 * `verified` should only become true when a credential URL exists. */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "EC-Council / TryHackMe",
    title: "Ethical Hacking & Penetration Testing Fundamentals",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Reconnaissance & enumeration",
      "Exploitation techniques",
      "Post-exploitation & reporting",
    ],
    metric: { value: "CEH", label: "Track followed" },
    fr: {
      title: "Fondamentaux du hacking éthique & des tests d'intrusion",
      skills: [
        "Reconnaissance & énumération",
        "Techniques d'exploitation",
        "Post-exploitation & reporting",
      ],
      metricLabel: "Parcours suivi",
    },
  },
  {
    no: "2.2",
    issuer: "OWASP / PortSwigger",
    title: "Web Application Security — OWASP Top 10",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "SQL injection, XSS, SSRF, IDOR",
      "Authentication & access control flaws",
      "Burp Suite professional workflows",
    ],
    metric: { value: "OWASP", label: "Standard" },
    fr: {
      title: "Sécurité des applications web — OWASP Top 10",
      skills: [
        "Injection SQL, XSS, SSRF, IDOR",
        "Failles d'authentification & de contrôle d'accès",
        "Workflows professionnels Burp Suite",
      ],
      metricLabel: "Standard",
    },
  },
  {
    no: "2.3",
    issuer: null,
    title: "Bug Bounty Hunting — Advanced Recon & Automation",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Subdomain enumeration & asset discovery",
      "Automated vulnerability pipeline",
      "Responsible disclosure",
    ],
    metric: { value: "Echovulnx", label: "Tool built" },
    fr: {
      title: "Chasse aux bugs — Reconnaissance avancée & automatisation",
      skills: [
        "Énumération de sous-domaines & découverte d'actifs",
        "Pipeline de vulnérabilités automatisé",
        "Divulgation responsable",
      ],
      metricLabel: "Outil construit",
    },
  },
  {
    no: "2.4",
    issuer: null,
    title: "Network Security & Wireless Intrusion Detection",
    year: "2024",
    credentialId: null,
    verified: false,
    skills: [
      "802.11 wireless attack patterns",
      "Machine learning for anomaly detection",
      "AWID dataset & SMOTE oversampling",
    ],
    metric: { value: "RF+SMOTE", label: "ML approach" },
    fr: {
      title: "Sécurité réseau & détection d'intrusion sans fil",
      skills: [
        "Patterns d'attaque sans fil 802.11",
        "Machine learning pour la détection d'anomalies",
        "Jeu de données AWID & suréchantillonnage SMOTE",
      ],
      metricLabel: "Approche ML",
    },
  },
  {
    no: "2.5",
    issuer: null,
    title: "Security Automation & Tooling — Python & Golang",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Concurrent scanning with Go goroutines",
      "Python orchestration pipelines",
      "Bash scripting for recon automation",
    ],
    metric: { value: "Vulnx", label: "Tool built in Go" },
    fr: {
      title: "Automatisation sécurité & outillage — Python & Golang",
      skills: [
        "Scan concurrent avec les goroutines Go",
        "Pipelines d'orchestration Python",
        "Scripts Bash pour l'automatisation de reconnaissance",
      ],
      metricLabel: "Outil construit en Go",
    },
  },
];
