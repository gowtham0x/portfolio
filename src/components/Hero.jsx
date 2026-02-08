import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const roles = ['Cybersecurity Engineer', 'Penetration Tester', 'Security Researcher'];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="hero-section">
            {/* Cursor Glow Effect */}
            <div
                className="cursor-glow"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y
                }}
            />

            {/* Grid Background */}
            <div className="hero-grid"></div>

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        '--delay': `${i * 0.5}s`,
                        '--x': `${Math.random() * 100}%`,
                        '--duration': `${15 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-badge"
                >
                    <span className="status-dot"></span>
                    Available for opportunities
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="hero-greeting">Hi, I'm</span>
                    <span className="hero-name glitch" data-text="Gowtham">Gowtham</span>
                </motion.h1>

                <motion.div
                    className="hero-role-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="hero-role-prefix">&gt; </span>
                    <span className="hero-role typed-text">
                        {roles[currentRole]}
                        <span className="cursor-blink">_</span>
                    </span>
                </motion.div>

                <motion.p
                    className="hero-bio"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Building security tools and hunting vulnerabilities.
                    Passionate about ethical hacking, automation, and building
                    systems that help protect digital infrastructure.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button className="btn btn-primary" onClick={scrollToProjects}>
                        <span>View Projects</span>
                        <FaArrowRight />
                    </button>
                    <a href={`${import.meta.env.BASE_URL}Gowtham.pdf`} className="btn btn-secondary" download>
                        <span>Download Resume</span>
                        <FaDownload />
                    </a>
                </motion.div>

                {/* Tech Stack Preview */}
                <motion.div
                    className="hero-tech-stack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-icons">
                        <span className="tech-item">Python</span>
                        <span className="tech-item">Go</span>
                        <span className="tech-item">Bash</span>
                        <span className="tech-item">Linux</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line">
                    <div className="scroll-dot"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
