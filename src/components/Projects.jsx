"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

// Project 1 SVG: Radar / Scanning Sweep
const RadarSVG = ({ color }) => (
  <motion.svg viewBox="0 0 200 200" style={{ width: '80%', height: '80%', position: 'absolute', zIndex: 1 }}>
    <circle cx="100" cy="100" r="90" fill="none" stroke={color} strokeWidth="1" opacity="0.2" />
    <circle cx="100" cy="100" r="60" fill="none" stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />
    <circle cx="100" cy="100" r="30" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
    <motion.path
      d="M100 100 L100 10 A90 90 0 0 1 190 100 Z"
      fill={`url(#radar-grad)`}
      opacity="0.5"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50%", originY: "50%" }}
    />
    <defs>
      <linearGradient id="radar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.8" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.circle cx="130" cy="70" r="4" fill="#ffffff" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 1] }} />
    <motion.circle cx="60" cy="140" r="3" fill="#ffffff" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2, times: [0, 0.1, 1] }} />
  </motion.svg>
);

// Project 2 SVG: Neural/Data Nodes
const NodesSVG = ({ color }) => (
  <motion.svg viewBox="0 0 200 200" style={{ width: '80%', height: '80%', position: 'absolute', zIndex: 1 }}>
    <motion.g animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ originX: "50%", originY: "50%" }}>
      <path d="M 100 50 L 150 100 L 100 150 L 50 100 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
      <path d="M 100 20 L 180 100 L 100 180 L 20 100 Z" fill="none" stroke={color} strokeWidth="1" strokeDasharray="10 10" opacity="0.2" />
      <line x1="100" y1="50" x2="150" y2="100" stroke={color} strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="100" x2="100" y2="150" stroke={color} strokeWidth="2" opacity="0.6" />
      <circle cx="100" cy="50" r="6" fill={color} />
      <circle cx="150" cy="100" r="6" fill={color} />
      <circle cx="100" cy="150" r="6" fill={color} />
      <circle cx="50" cy="100" r="6" fill={color} />
      <motion.circle cx="100" cy="100" r="15" fill="none" stroke={color} strokeWidth="2" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 3, repeat: Infinity }} />
    </motion.g>
  </motion.svg>
);

const AnimatedSecuritySVG = ({ color, index }) => {
  return index % 2 === 0 ? <RadarSVG color={color} /> : <NodesSVG color={color} />;
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Disable 3D tilt on mobile for performance and UX
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-8deg", "8deg"]);
  const translateZ = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0px", "0px"] : ["20px", "-20px"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;
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
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <div className="project-card" style={{ 
      minHeight: '100dvh', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'sticky',
      top: 0,
      perspective: '1500px',
      padding: '2rem 0' // extra padding for mobile breathing room
    }}>
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: '100%', 
          maxWidth: '1200px', 
        }}
      >
        <div className="project-inner grid-2-col" style={{
          padding: '4rem', 
          background: 'rgba(24, 24, 27, 0.8)', 
          backdropFilter: 'blur(20px)',
          alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '2rem',
          transformStyle: "preserve-3d",
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <div style={{ transform: isMobile ? "translateZ(0)" : "translateZ(40px)" }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: project.color, marginBottom: '1.5rem', display: 'block', letterSpacing: '0.2em' }}>
              PROTOCOL_0{project.id}
            </span>
            <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1, letterSpacing: '-0.04em' }}>{project.title}</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '90%' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', letterSpacing: '0.05em' }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ borderRadius: '100px', padding: '0.75rem 1.5rem' }}>
                <FaGithub /> Source
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn" style={{ borderRadius: '100px', padding: '0.75rem 1.5rem' }}>
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
          
          <motion.div className="project-visual" style={{ 
            height: 'clamp(300px, 40vh, 450px)', 
            background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`,
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            transformStyle: "preserve-3d",
            transform: isMobile ? "translateZ(0)" : "translateZ(60px)",
            width: '100%'
          }}>
            <AnimatedSecuritySVG color={project.color} index={index} />
            
            <motion.div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: `linear-gradient(45deg, transparent, ${project.color}10, transparent)`,
                x: translateZ,
                pointerEvents: 'none'
            }} />
            
            <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                color: project.color,
                letterSpacing: '0.2em',
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '100px',
                backdropFilter: 'blur(5px)',
                border: `1px solid ${project.color}40`
            }}>
              [ ANALYZING ]
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only apply complex scroll pinning on desktop to prevent mobile jank
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="projects-container">
      <div className="container" style={{ paddingBottom: '4rem', zIndex: 10, position: 'relative' }}>
        <span className="section-label">Selected Works</span>
        <h2 className="section-title">Case <span className="text-gradient">Studies</span></h2>
      </div>

      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
