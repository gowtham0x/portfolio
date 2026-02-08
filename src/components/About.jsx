import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaTerminal, FaShieldAlt, FaCode, FaBug, FaServer } from 'react-icons/fa';

// Animated Counter Component
const Counter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const startValue = 0;
        const endValue = parseInt(end);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * (endValue - startValue) + startValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        {
            icon: FaShieldAlt,
            label: "Security Tools",
            value: "2",
            suffix: "+",
            description: "Built from scratch"
        },
        {
            icon: FaCode,
            label: "Technologies",
            value: "8",
            suffix: "+",
            description: "In my arsenal"
        },
        {
            icon: FaServer,
            label: "Projects",
            value: "5",
            suffix: "+",
            description: "Completed"
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="about-header"
                >
                    <span className="section-label">Get to Know Me</span>
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="about-layout">
                    {/* Main Content */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-text">
                            <p>
                                I thrive on <span className="highlight">understanding systems at their core</span> — dissecting how they work, identifying vulnerabilities, and engineering solutions that are both robust and elegant.
                            </p>
                            <p>
                                My expertise lies at the intersection of <span className="highlight">cybersecurity</span> and <span className="highlight">software engineering</span>. From building automated vulnerability assessment tools to crafting secure, scalable applications — I approach every project with a security-first mindset.
                            </p>
                            <p>
                                I'm passionate about <span className="highlight">ethical hacking</span>, <span className="highlight">penetration testing</span>, and developing tools that empower security professionals.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="about-highlights">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="highlight-card"
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -8,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className="highlight-card-glow"></div>
                                    <div className="highlight-icon-wrapper">
                                        <item.icon className="highlight-icon" />
                                    </div>
                                    <div className="highlight-value">
                                        <Counter end={item.value} suffix={item.suffix} />
                                    </div>
                                    <div className="highlight-label">{item.label}</div>
                                    <div className="highlight-description">{item.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Terminal Card */}
                    <motion.div
                        className="about-terminal"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="terminal-title">sgowtham28122004@gmail.com</span>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">whoami</span>
                            </div>
                            <div className="terminal-output">cybersecurity_enthusiast</div>

                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">cat interests.txt</span>
                            </div>
                            <div className="terminal-output">
                                → Penetration Testing<br />
                                → Security Automation<br />
                                → Bug Bounty Hunting<br />
                                → Tool Development
                            </div>

                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">cat skills.json | jq '.top'</span>
                            </div>
                            <div className="terminal-output output-code">
                                ["Python", "Go", "Linux", "Burp Suite"]
                            </div>

                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command typing">./exploit.sh<span className="cursor">_</span></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
