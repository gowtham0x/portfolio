import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBolt } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const projectIcons = [FaShieldAlt, FaBolt];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Security tools and automation projects I've built
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => {
                        const IconComponent = projectIcons[index % projectIcons.length];
                        return (
                            <motion.article
                                key={project.id}
                                className="project-card"
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                style={{ '--accent-color': project.color }}
                            >
                                {/* Card Background Effect */}
                                <div className="project-card-bg"></div>

                                {/* Top Border Gradient */}
                                <div className="project-card-border"></div>

                                <div className="project-card-content">
                                    <header className="project-header">
                                        <div className="project-icon">
                                            <IconComponent />
                                        </div>
                                        <div className="project-links">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label="View on GitHub"
                                            >
                                                <FaGithub />
                                            </motion.a>
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label="View live project"
                                            >
                                                <FaExternalLinkAlt />
                                            </motion.a>
                                        </div>
                                    </header>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <footer className="project-footer">
                                        <div className="project-tech">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </footer>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <a href="https://github.com/whoamikiddie" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        View All Projects on GitHub
                        <FaGithub />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
