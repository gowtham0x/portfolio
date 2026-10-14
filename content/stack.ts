/* Gowtham's Security & Dev Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.

   Groups:
     Security    — hacking/recon/exploit tools
     Languages   — programming languages
     Backend     — frameworks & databases
     Dev         — editors, platforms, OS
     RedTeam     — advanced red-team & malware dev (rust-zlt)
     ReverseEng  — reverse engineering & binary analysis
     AI          — AI tools used in workflow */

export type Tool = {
  name: string;
  group: "Security" | "Languages" | "Backend" | "Dev" | "RedTeam" | "ReverseEng" | "AI";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Security Tools — */
  { name: "Burp Suite", group: "Security", mono: "BS", color: "#FF6633" },
  { name: "Nmap", group: "Security", mono: "Nm", color: "#4A90D9" },
  { name: "Subfinder", group: "Security", mono: "Sf", color: "#6C3483" },
  { name: "HTTPX", group: "Security", mono: "Hx", color: "#117A65" },
  { name: "Amass", group: "Security", mono: "Am", color: "#1A5276" },
  { name: "Naabu", group: "Security", mono: "Nb", color: "#C0392B" },
  { name: "GAU", group: "Security", mono: "Gu", color: "#884EA0" },
  { name: "GF", group: "Security", mono: "GF", color: "#1E8449" },
  { name: "Metasploit", group: "Security", mono: "Ms", color: "#2E86C1" },
  { name: "Wireshark", group: "Security", mono: "Ws", color: "#1679A7" },
  { name: "SQLMap", group: "Security", mono: "SM", color: "#C0392B" },
  { name: "Nuclei", group: "Security", mono: "Nu", color: "#FF6B35" },
  { name: "FFUF", group: "Security", mono: "FF", color: "#27AE60" },

  /* — Languages — */
  { name: "Python", group: "Languages", mono: "Py", color: "#3572A5" },
  { name: "Golang", group: "Languages", mono: "Go", color: "#00ADD8" },
  { name: "Bash", group: "Languages", mono: "Sh", color: "#293133" },
  { name: "JavaScript", group: "Languages", mono: "JS", color: "#F7DF1E" },
  { name: "PHP", group: "Languages", mono: "Ph", color: "#777BB4" },
  { name: "SQL", group: "Languages", mono: "Sq", color: "#E48E00" },
  { name: "C / C++", group: "Languages", mono: "C2", color: "#659AD2" },

  /* — Backend / Frameworks — */
  { name: "Flask", group: "Backend", mono: "Fl", color: "#000000" },
  { name: "Node.js", group: "Backend", mono: "Nd", color: "#339933" },
  { name: "React", group: "Backend", mono: "Re", color: "#0E7C99" },
  { name: "MySQL", group: "Backend", mono: "My", color: "#4479A1" },
  { name: "MongoDB", group: "Backend", mono: "Mg", color: "#47A248" },

  /* — Dev & OS — */
  { name: "Linux", group: "Dev", mono: "Lx", color: "#FCC624" },
  { name: "GitHub", group: "Dev", mono: "GH", color: "#181717" },
  { name: "VS Code", group: "Dev", mono: "VS", color: "#0065A9" },
  { name: "Docker", group: "Dev", mono: "Dk", color: "#2496ED" },
  { name: "Tor", group: "Dev", mono: "Tr", color: "#7D4698" },

  /* — Red Team (Rust) — */
  { name: "Rust", group: "RedTeam", mono: "Rs", color: "#CE422B" },
  { name: "EDR Evasion", group: "RedTeam", mono: "EDR", color: "#4A235A" },
  { name: "Proc Inject", group: "RedTeam", mono: "PI", color: "#641E16" },
  { name: "UAC Bypass", group: "RedTeam", mono: "UAC", color: "#1A5276" },
  { name: "Anti-Debug", group: "RedTeam", mono: "AD", color: "#0E6655" },
  { name: "Syscalls", group: "RedTeam", mono: "NT", color: "#212F3D" },
  { name: "ETW Patch", group: "RedTeam", mono: "ETW", color: "#6E2F1A" },
  { name: "C2 / OPSEC", group: "RedTeam", mono: "C2", color: "#1B2631" },

  /* — Reverse Engineering — */
  { name: "Ghidra", group: "ReverseEng", mono: "Gh", color: "#FF0000" },
  { name: "x64dbg", group: "ReverseEng", mono: "x64", color: "#3A3A3A" },
  { name: "Radare2", group: "ReverseEng", mono: "R2", color: "#1565C0" },
  { name: "Frida", group: "ReverseEng", mono: "Fr", color: "#FF6B35" },

  /* — AI Tools — */
  { name: "ChatGPT", group: "AI", mono: "GP", color: "#10A37F" },
  { name: "Claude", group: "AI", mono: "Cl", color: "#D97706" },
];


