import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaLinux, FaTerminal
} from 'react-icons/fa';
import {
    SiTailwindcss, SiFramer, SiGo
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: FaReact },
            { name: "JavaScript (ES6+)", icon: FaJs },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer }
        ]
    },
    {
        title: "Backend / Security",
        skills: [
            { name: "Python", icon: FaPython },
            { name: "Golang", icon: SiGo },
            { name: "Bash", icon: FaTerminal },
            { name: "REST APIs", icon: FaJs },
            { name: "Web Security", icon: FaTerminal }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git & GitHub", icon: FaGitAlt },
            { name: "Linux", icon: FaLinux },
            { name: "VS Code", icon: VscCode },
            { name: "Burp Suite", icon: FaTerminal }
        ]
    }
];
