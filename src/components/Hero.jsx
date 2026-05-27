import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="hero" className="section" style={{ minHeight: '100dvh' }}>
            <div className="container">
                <motion.div 
                    className="hero-layout"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    <motion.div variants={itemVariants}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }} />
                            <span className="section-label" style={{ margin: 0 }}>Protocol / 001 - Active</span>
                         </div>
                    </motion.div>
                    
                    <motion.h1 
                        className="section-title" 
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', lineHeight: 0.8, letterSpacing: '-0.06em' }}
                    >
                        <span className="text-gradient">GOWTHAM</span>
                        <br />
                        <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', color: 'transparent' }}>
                            SECURITY
                        </span>
                    </motion.h1>

                    <motion.div variants={itemVariants} style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: '10%' }}>
                        <p className="hero-bio" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.4, fontWeight: 300 }}>
                            Architecting <span style={{ color: 'white', fontWeight: 500 }}>Unbreakable</span> Systems. 
                            Specialized in automated threat detection and deep-kernel exploitation.
                        </p>
                    </motion.div>

                    <motion.div className="hero-buttons" variants={itemVariants} style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                        <Magnetic>
                            <button 
                                className="btn btn-primary" 
                                onClick={scrollToProjects}
                                style={{ 
                                    padding: '0.75rem 0.75rem 0.75rem 2.5rem', 
                                    borderRadius: '100px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '1.5rem' 
                                }}
                            >
                                <span style={{ fontWeight: 600, letterSpacing: '0.05em' }}>EXPLORE_ARSENAL</span>
                                <div style={{ 
                                    width: '3.5rem', 
                                    height: '3.5rem', 
                                    borderRadius: '50%', 
                                    background: 'white', 
                                    color: 'black', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '1.25rem'
                                }}>
                                    <FaArrowRight />
                                </div>
                            </button>
                        </Magnetic>
                        
                        <Magnetic>
                            <a href="#about" className="btn" style={{ borderRadius: '100px', padding: '1.5rem 2.5rem' }}>
                                CORE_IDENTITY
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
