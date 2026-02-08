import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const socialLinks = [
        {
            name: 'Email Me',
            icon: FaEnvelope,
            href: 'mailto:sgowtham28122004@gmail.com',
            color: '#00f5c4'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/whoamikiddie',
            color: '#ffffff'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/gowtham-s-b79478275',
            color: '#0077b5'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                </motion.div>

                <motion.p
                    className="contact-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Want to collaborate or talk security & tech?<br />
                    Feel free to reach out.
                </motion.p>

                <motion.div
                    className="contact-links"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="contact-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            style={{ '--btn-color': link.color }}
                        >
                            <link.icon />
                            <span>{link.name}</span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    className="footer"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p>Built with ❤️ by Gowtham © {new Date().getFullYear()}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
