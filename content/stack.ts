/* Gowtham's Security & Dev Stack — tools shown in the spiral orbit.
   `icon` is a react-icons component (rendered as SVG inline).
   `src`  is a /public image path (fallback for custom logos).
   `mono` is the 2-3 char monogram when no icon exists.

   Groups:
     Security    — hacking/recon/exploit tools
     Languages   — programming languages
     Backend     — frameworks & databases
     Dev         — editors, platforms, OS
     RedTeam     — advanced red-team & malware dev
     ReverseEng  — reverse engineering & binary analysis
     AI          — AI tools used in workflow */

import type { IconType } from "react-icons";
import {
  SiPython, SiGo, SiRust, SiJavascript, SiPhp,
  SiFlask, SiNodedotjs, SiReact, SiMysql, SiMongodb,
  SiLinux, SiGithub, SiDocker,
  SiWireshark, SiMetasploit, SiGnubash, SiBurpsuite,
  SiAnthropic, SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";

export type Tool = {
  name: string;
  group: "Security" | "Languages" | "Backend" | "Dev" | "RedTeam" | "ReverseEng" | "AI";
  /** react-icons component */
  icon?: IconType;
  /** /public image src (fallback) */
  src?: string;
  /** 2-3 char monogram (last fallback) */
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Security Tools — */
  { name: "Burp Suite",  group: "Security", icon: SiBurpsuite,   color: "#FF6633" },
  { name: "Nmap",        group: "Security", mono: "Nm",           color: "#4A90D9" },
  { name: "Subfinder",   group: "Security", mono: "Sf",           color: "#6C3483" },
  { name: "HTTPX",       group: "Security", mono: "Hx",           color: "#117A65" },
  { name: "Amass",       group: "Security", mono: "Am",           color: "#1A5276" },
  { name: "Naabu",       group: "Security", mono: "Nb",           color: "#E02438" },
  { name: "GAU",         group: "Security", mono: "Gu",           color: "#884EA0" },
  { name: "GF",          group: "Security", mono: "GF",           color: "#1E8449" },
  { name: "Metasploit",  group: "Security", icon: SiMetasploit,   color: "#2E86C1" },
  { name: "Wireshark",   group: "Security", icon: SiWireshark,    color: "#1679A7" },
  { name: "SQLMap",      group: "Security", mono: "SM",           color: "#E02438" },
  { name: "Nuclei",      group: "Security", mono: "Nu",           color: "#FF6B35" },
  { name: "FFUF",        group: "Security", mono: "FF",           color: "#27AE60" },

  /* — Languages — */
  { name: "Python",      group: "Languages", icon: SiPython,      color: "#3572A5" },
  { name: "Golang",      group: "Languages", icon: SiGo,          color: "#00ADD8" },
  { name: "Bash",        group: "Languages", icon: SiGnubash,     color: "#4EAA25" },
  { name: "JavaScript",  group: "Languages", icon: SiJavascript,  color: "#F7DF1E" },
  { name: "PHP",         group: "Languages", icon: SiPhp,         color: "#777BB4" },
  { name: "SQL",         group: "Languages", icon: FaDatabase,    color: "#E48E00" },
  { name: "C / C++",     group: "Languages", mono: "C++",         color: "#659AD2" },

  /* — Backend / Frameworks — */
  { name: "Flask",       group: "Backend", icon: SiFlask,         color: "#efefed" },
  { name: "Node.js",     group: "Backend", icon: SiNodedotjs,     color: "#339933" },
  { name: "React",       group: "Backend", icon: SiReact,         color: "#0E7C99" },
  { name: "MySQL",       group: "Backend", icon: SiMysql,         color: "#4479A1" },
  { name: "MongoDB",     group: "Backend", icon: SiMongodb,       color: "#47A248" },

  /* — Dev & OS — */
  { name: "Linux",       group: "Dev", icon: SiLinux,             color: "#FCC624" },
  { name: "GitHub",      group: "Dev", icon: SiGithub,            color: "#efefed" },
  { name: "VS Code",     group: "Dev", icon: VscVscode,           color: "#0065A9" },
  { name: "Docker",      group: "Dev", icon: SiDocker,            color: "#2496ED" },
  { name: "Tor",         group: "Dev", mono: "Tor",               color: "#7D4698" },

  /* — Red Team (Rust) — */
  { name: "Rust",        group: "RedTeam", icon: SiRust,          color: "#E02438" },
  { name: "EDR Evasion", group: "RedTeam", mono: "EDR",           color: "#4A235A" },
  { name: "Proc Inject", group: "RedTeam", mono: "PI",            color: "#641E16" },
  { name: "UAC Bypass",  group: "RedTeam", mono: "UAC",           color: "#1A5276" },
  { name: "Anti-Debug",  group: "RedTeam", mono: "AD",            color: "#0E6655" },
  { name: "ETW Patch",   group: "RedTeam", mono: "ETW",           color: "#6E2F1A" },
  { name: "C2 / OPSEC",  group: "RedTeam", mono: "C2",            color: "#1B2631" },

  /* — Reverse Engineering — */
  { name: "Ghidra",      group: "ReverseEng", mono: "Gh",         color: "#FF0000" },
  { name: "x64dbg",      group: "ReverseEng", mono: "x64",        color: "#5d5d5d" },
  { name: "Radare2",     group: "ReverseEng", mono: "R2",         color: "#1565C0" },
  { name: "Frida",       group: "ReverseEng", mono: "Fr",         color: "#FF6B35" },

  /* — AI Tools — */
  { name: "ChatGPT",     group: "AI", icon: AiOutlineOpenAI,      color: "#10A37F" },
  { name: "Claude",      group: "AI", icon: SiAnthropic,          color: "#D97706" },
];
