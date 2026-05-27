import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
    FaReact, FaPython, FaLinux, FaShieldAlt
} from 'react-icons/fa';
import { SiGo, SiRust, SiDocker, SiKubernetes } from 'react-icons/si';

const SkillCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth return
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // Exaggerated 3D rotation for dramatic effect
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);
    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "-20px"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                gridColumn: item.size?.col || 'span 1',
                gridRow: item.size?.row || 'span 1',
                marginTop: index % 2 === 0 ? '3rem' : '0', // Exaggerated asymmetric offset
                position: 'relative',
                zIndex: 10,
            }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="skill-card-wrapper group"
        >
            {/* Dynamic Drop Shadow tied to mouse position */}
            <motion.div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.8)',
                filter: 'blur(30px)',
                x: shadowX,
                y: shadowY,
                zIndex: -1,
                borderRadius: '2rem'
            }} />

            <div style={{
                position: 'relative',
                padding: '3rem',
                background: 'linear-gradient(145deg, rgba(30, 30, 35, 0.9), rgba(15, 15, 18, 0.95))',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
            }}>
                {/* 3D Floating Icon Layer */}
                <div style={{ transform: "translateZ(80px)", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '100px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.65rem', 
                        color: 'var(--accent-color)',
                        letterSpacing: '0.1em'
                    }}>
                        MODULE_0{index + 1}
                    </div>
                    {item.icon && <item.icon style={{ fontSize: '2.5rem', color: 'var(--text-primary)', opacity: 0.9, filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.2))' }} />}
                </div>

                {/* 3D Floating Text Layer */}
                <div style={{ transform: "translateZ(50px)" }}>
                    <h3 style={{ 
                        fontFamily: 'var(--font-display)', 
                        fontSize: '2rem', 
                        fontWeight: 900, 
                        lineHeight: 0.9, 
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.04em',
                        color: 'white'
                    }}>
                        {item.title}
                    </h3>
                    {item.description && (
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '90%' }}>
                            {item.description}
                        </p>
                    )}
                </div>

                {/* Interactive Background Glow */}
                <motion.div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150%',
                    height: '150%',
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
                    x: useTransform(x, [-0.5, 0.5], ['-25%', '25%']),
                    y: useTransform(y, [-0.5, 0.5], ['-25%', '25%']),
                    translateX: '-50%',
                    translateY: '-50%',
                    pointerEvents: 'none',
                    zIndex: -1
                }} />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const bentoItems = [
        {
            title: "Advanced Exploitation",
            icon: FaShieldAlt,
            size: { col: 'span 2', row: 'span 2' },
            description: "Deep dive into kernel vulnerabilities and custom exploit development. Breaking systems to build them stronger."
        },
        {
            title: "Go",
            icon: SiGo,
        },
        {
            title: "Python",
            icon: FaPython,
        },
        {
            title: "Cloud Security",
            icon: SiKubernetes,
            size: { col: 'span 2', row: 'span 1' },
            description: "Securing distributed microservices and containerized environments at scale."
        },
        {
            title: "Rust",
            icon: SiRust,
        },
        {
            title: "Docker",
            icon: SiDocker,
        },
        {
            title: "Linux",
            icon: FaLinux,
        },
        {
            title: "React",
            icon: FaReact,
        }
    ];

    return (
        <section id="skills" className="section" style={{ perspective: '2000px' }}>
            <div className="container">
                <div style={{ marginBottom: '8rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent-color)', borderRadius: '50%' }} />
                            <span className="section-label" style={{ margin: 0, color: 'var(--text-muted)' }}>Capability Matrix</span>
                        </div>
                        <h2 className="section-title" style={{ margin: 0 }}>
                            Technical<br />
                            <span className="text-gradient">Arsenal</span>
                        </h2>
                    </div>
                </div>

                <div className="grid-4-col" style={{ 
                    gridAutoRows: '280px',
                    position: 'relative'
                }}>
                    {/* Ambient Background Grid for depth context */}
                    <div style={{
                        position: 'absolute',
                        inset: '-10%',
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        zIndex: -1,
                        transform: 'translateZ(-100px)',
                        opacity: 0.5
                    }} />

                    {bentoItems.map((item, i) => (
                        <SkillCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
