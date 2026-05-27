import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Index', id: 'hero' },
        { name: 'Works', id: 'projects' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <header style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 100, 
            padding: '2rem 0',
            pointerEvents: 'none'
        }}>
            <div className="container" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                pointerEvents: 'auto'
            }}>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontWeight: '900', 
                        fontSize: '1.25rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => scrollToSection('hero')}
                >
                    GOWTHAM<span style={{ color: 'var(--accent-color)' }}>.</span>
                </motion.div>

                <nav style={{ 
                    background: scrolled ? 'rgba(9, 9, 11, 0.8)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    padding: '0.5rem',
                    borderRadius: '100px',
                    border: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
                    transition: 'all 0.4s var(--ease-out-expo)'
                }}>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '0.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="btn"
                                    style={{ 
                                        border: 'none', 
                                        padding: '0.5rem 1.25rem', 
                                        fontSize: '0.75rem',
                                        background: 'transparent'
                                    }}
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
