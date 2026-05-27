import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div style={{ 
                    padding: '1.5rem', 
                    background: 'rgba(255,255,255,0.02)', 
                    borderRadius: '3rem', 
                    border: '1px solid rgba(255,255,255,0.05)' 
                }}>
                    <div style={{ 
                        padding: '6rem 4rem', 
                        background: 'var(--bg-color)', 
                        borderRadius: 'calc(3rem - 0.5rem)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'center'
                    }}>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="section-label" style={{ color: 'var(--text-muted)' }}>Transmission_End</span>
                            <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '4rem', letterSpacing: '-0.04em' }}>
                                INIT_NEW_<span className="text-gradient">PROJECT</span>
                            </h2>
                            
                            <Magnetic>
                                <motion.a 
                                    href="mailto:sgowtham28122004@gmail.com"
                                    style={{ 
                                        fontSize: 'clamp(1rem, 5vw, 4rem)', 
                                        fontFamily: 'var(--font-display)', 
                                        fontWeight: 900,
                                        color: 'white',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        marginBottom: '6rem',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    sgowtham28122004@gmail.com
                                </motion.a>
                            </Magnetic>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    <Magnetic>
                                        <a href="https://github.com/gowtham0x" target="_blank" rel="noreferrer" className="btn" style={{ border: 'none', padding: '0', fontSize: '0.875rem', fontWeight: 600 }}>
                                            GITHUB_
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://www.linkedin.com/in/gowtham-s-b79478275" target="_blank" rel="noreferrer" className="btn" style={{ border: 'none', padding: '0', fontSize: '0.875rem', fontWeight: 600 }}>
                                            LINKEDIN_
                                        </a>
                                    </Magnetic>
                                </div>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                                    [ DESIGNED_BY_VANGUARD ]
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
