import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaLinux, FaTerminal, FaShieldAlt, FaCode
} from 'react-icons/fa';
import { SiGo, SiGnubash } from 'react-icons/si';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Bento Grid Items with varied sizes
    const bentoItems = [
        {
            id: 1,
            title: "Python",
            subtitle: "Primary Language",
            icon: FaPython,
            size: "large",
            color: "#3776ab",
            description: "Building security tools & automation scripts"
        },
        {
            id: 2,
            title: "Golang",
            subtitle: "Systems Programming",
            icon: SiGo,
            size: "medium",
            color: "#00add8",
            description: "High-performance security tools"
        },
        {
            id: 3,
            title: "Linux",
            subtitle: "Daily Driver",
            icon: FaLinux,
            size: "medium",
            color: "#fcc624",
            description: "System administration & pentesting"
        },
        {
            id: 4,
            title: "Bash",
            subtitle: "Scripting",
            icon: SiGnubash,
            size: "small",
            color: "#4eaa25"
        },
        {
            id: 5,
            title: "React",
            subtitle: "Frontend",
            icon: FaReact,
            size: "small",
            color: "#61dafb"
        },
        {
            id: 6,
            title: "Security",
            subtitle: "Core Focus",
            icon: FaShieldAlt,
            size: "wide",
            color: "#00ff88",
            description: "Penetration Testing • Vulnerability Assessment • Ethical Hacking"
        },
        {
            id: 7,
            title: "JavaScript",
            subtitle: "Web Development",
            icon: FaJs,
            size: "small",
            color: "#f7df1e"
        },
        {
            id: 8,
            title: "HTML/CSS",
            subtitle: "Frontend Basics",
            icon: FaHtml5,
            size: "small",
            color: "#e34f26"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="skills-header"
                >
                    <span className="section-label">What I Work With</span>
                    <h2 className="section-title">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="bento-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {bentoItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`bento-item bento-${item.size}`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            style={{ '--item-color': item.color }}
                        >
                            <div className="bento-glow"></div>
                            <div className="bento-content">
                                <div className="bento-icon-wrapper">
                                    <item.icon className="bento-icon" />
                                </div>
                                <div className="bento-text">
                                    <h3 className="bento-title">{item.title}</h3>
                                    <span className="bento-subtitle">{item.subtitle}</span>
                                    {item.description && (
                                        <p className="bento-description">{item.description}</p>
                                    )}
                                </div>
                            </div>
                            <div className="bento-shine"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
