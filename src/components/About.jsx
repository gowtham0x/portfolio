import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt, FaCode, FaServer } from 'react-icons/fa';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        {
            icon: FaShieldAlt,
            label: "Security Tools",
            value: "2+",
            description: "Built from scratch"
        },
        {
            icon: FaCode,
            label: "Stack",
            value: "10+",
            description: "Tools in arsenal"
        },
        {
            icon: FaServer,
            label: "Projects",
            value: "5+",
            description: "Completed"
        }
    ];

    return (
        <section id="about" className="section" style={{ background: 'var(--surface-color)' }}>
            <div className="container">
                <div className="about-layout grid-2-col" style={{ alignItems: 'center' }}>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="section-title">
                            Digital <span className="text-gradient">Architect</span>
                            <br />
                            of Defense
                        </h2>
                        <div className="about-text" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                I specialize in dissecting complex systems to uncover hidden vulnerabilities. 
                                My approach combines engineering precision with a hacker's intuition.
                            </p>
                            <p>
                                Currently focused on automating security workflows and building tools 
                                that protect digital infrastructure at scale.
                            </p>
                        </div>
                    </motion.div>

                    <div className="about-visuals" style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {highlights.slice(0, 2).map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="bento-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                    style={{ padding: '2rem', background: 'var(--bg-color)', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <span style={{ fontSize: '2.5rem', fontWeight: '900', display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                        {item.value}
                                    </span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-color)', textTransform: 'uppercase' }}>
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="bento-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            style={{ padding: '2rem', background: 'var(--bg-color)', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                             <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                                Focus Areas
                             </span>
                             <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                <li># Penetration Testing</li>
                                <li># Security Automation</li>
                                <li># Bug Bounty Hunting</li>
                                <li># Tool Development</li>
                             </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
