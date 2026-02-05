import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Cpu, 
  Globe, 
  Download,
  Terminal,
  ChevronRight,
  Zap,
  CircuitBoard,
  ArrowUpRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import FeaturedProjectsRail from "../components/ui/featured-projects-rail";
import { useEffect, useRef } from "react";


// // Typing Effect Component
// const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setStarted(true), delay);
//     return () => clearTimeout(timeout);
//   }, [delay]);

//   useEffect(() => {
//     if (!started) return;
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index <= text.length) {
//         setDisplayText(text.slice(0, index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 80);
//     return () => clearInterval(interval);
//   }, [started, text]);

//   return (
//     <span className="typing-cursor">{displayText}</span>
//   );
// };

// Social Link with Glitch Effect
const SocialLink = ({ 
  href, 
  icon: Icon, 
  label 
}: { 
  href: string; 
  icon: React.ElementType; 
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-4 border border-white/20 hover:border-white/80 transition-all duration-300 corner-brackets"
      aria-label={label}
    >
      <GlitchIcon>
        <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
      </GlitchIcon>
    </a>
  );
};

// Glitch Icon Component
const GlitchIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="glitch-icon inline-flex">
      {children}
    </span>
  );
};

// Skill Category Component
const SkillCategory = ({ 
  icon: Icon, 
  title, 
  skills, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  skills: string[];
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative border border-white/10 p-8 hover:border-white/50 transition-all duration-500 hover-lift"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/50 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/50 transition-all duration-300" />
      
      <div className="space-y-6">
        <div className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/5 transition-all duration-300">
            <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-lg font-semibold tracking-wide font-outfit">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1.5 hover:border-white/40 hover:text-white/80 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Navigation Link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="group relative px-4 py-2 text-sm font-mono text-white/50 hover:text-white transition-colors overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  );
};

// Section Header
const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-12"
  >
    <span className="text-xs font-mono text-white/30">{number}</span>
    <div className="w-16 h-px bg-gradient-to-r from-white/30 to-transparent" />
    <h2 className="text-sm font-mono text-white/60 tracking-widest">{title}</h2>
  </motion.div>
);

// Abstract Background Component
const AbstractBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Hanya setinggi viewport
    
    // Particles for abstract effect
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }> = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const draw = () => {
      // Clear with slight fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach((particle, i) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        // Draw connections to nearby particles
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 150) * 0.2})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    };
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-x-0 top-0 h-screen pointer-events-none z-0 opacity-30"
    />
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      id: "smart-lock",
      title: "Smart-Lock Door",
      description: "ESP32-based door lock system with real-time monitoring and web dashboard. Secure access control with MQTT communication protocol.",
      tags: ["ESP32", "SENSOR & AKTUATOR", "MQTT", "C/C++"],
      image: "/images/smartlock-door.png",
      color: "from-neutral-700 to-neutral-800",
      link: "/Smart-Lock Door",
    },
    {
      id: "3d-website",
      title: "3D Interactive Website",
      description: "Interactive 3D website built using Three.js with immersive user experience and smooth animations.",
      tags: ["React", "Tailwind", "Framer Motion", "JavaScript"],
      color: "from-neutral-700 to-neutral-800",
    },
    {
      id: "iot-agv",
      title: "Line-Following AGV",
      description: "Autonomous guided vehicle with line-following capability, control and monitoring via IoT connectivity.",
      tags: ["ESP32", "MQTT", "C/C++", "PCB Design"],
      image: "/images/AGV Line.png",
      color: "from-neutral-700 to-neutral-800",
      link: "/AGV-LineFollower",
    },
  ];

  const skills = {
    programming: ["TypeScript", "JavaScript", "C/C++", "Java"],
    iot: ["Arduino", "ESP32", "Electronic Schematic", "MQTT", "Sensors", "Aktuator"],
    tools: ["Git", "KiCad", "Vite", "Figma", "VS Code", "Arduino IDE"],
  };
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-outfit">
      <AbstractBackground />
      <div className="scanlines" />
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-semibold text-lg tracking-tighter"
          >
            <span className="text-white">RAENALDI ARDIANSYAH</span>
            <span className="text-white/40">.S</span>
          </motion.span>
          
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#skills">SKILLS</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs border-white/20 hover:border-white/60 hover:bg-white/5 transition-all rounded-none"
            >
              <GlitchIcon>
              <Download className="w-3 h-3 mr-2" />
              RESUME
              </GlitchIcon>
            </Button>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-40">
        {/* Hero Section */}
        <motion.section 
          style={{ opacity, scale }}
          className="min-h-[85vh] flex flex-col justify-center items-start"
        >
            <div className="-mt-20 md:-mt-32 lg:-mt-40 space-y-10 max-w-4xl">
              <div className="space-y-10 max-w-4xl">
                <div className="space-y-2">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none font-outfit text-white">
                    COMPUTER
                  </h1>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none font-outfit block text-white/30">
                    ENGINEER
                  </h1>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed"
                >
                  Developing front-end web interfaces, designing and implementing embedded systems, and building Internet of Things (IoT) solutions.            </motion.p>
              </div>
            </div>
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono text-white/80">SCROLL</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
          </motion.div>
        </motion.section>
        

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <SectionHeader number="01" title="ABOUT" />
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-white/60 leading-relaxed text-lg">
                <p>
                  I approach system development with the belief that systems are a flexible medium for connecting interfaces and physical devices.
                </p>
                <p>
                  I'm interested in how web applications and electrical systems work together, how connectivity enables real-time interaction, and how tools can be designed to feel clear and dependable.
                </p>
                <p>
                  My work spans web development and electrical system design, with connectivity used as a bridge rather than the focus.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="group border border-white/10 p-6 hover:border-white/30 transition-all duration-500 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                    <GlitchIcon>
                      <Code2 className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                    </GlitchIcon>
                  </div>
                  <h3 className="font-semibold text-lg font-outfit">Web Development</h3>
                </div>
                <p className="text-sm text-white/40">Frontend focused, clean UI with modern technologies</p>
              </div>

              <div className="group border border-white/10 p-6 hover:border-white/30 transition-all duration-500 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/5 transition-all">
                    <GlitchIcon>
                      <CircuitBoard className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                    </GlitchIcon>
                  </div>
                  <h3 className="font-semibold text-lg font-outfit">IoT & Embedded</h3>
                </div>
                <p className="text-sm text-white/40">Sensors, MCU, Connectivity and real-time systems</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeader number="02" title="TECH STACK" />

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCategory 
              icon={Code2} 
              title="Programming" 
              skills={skills.programming}
              delay={0}
            />
            <SkillCategory 
              icon={Cpu} 
              title="IoT & Embedded" 
              skills={skills.iot}
              delay={0.15}
            />
            <SkillCategory 
              icon={Globe} 
              title="Tools" 
              skills={skills.tools}
              delay={0.3}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-12">
          <FeaturedProjectsRail 
            title="FEATURED PROJECTS"
            subtitle="Eksperimen dan hasil karya terbaru."
            projects={projects}
          />
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeader number="03" title="EXPERIENCE & EDUCATION" />

          <div className="max-w-2xl space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex gap-8 py-8 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="w-32 pt-1">
                <span className="text-xs font-mono text-white/30">2024 — NOW</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-lg font-outfit group-hover:text-white transition-colors">Teknik Computer</h4>
                  <Badge variant="outline" className="text-[10px] font-mono border-white/20 text-white/50 rounded-none">EDUCATION</Badge>
                </div>
                <p className="text-sm text-white/40">Telkom University</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-white/50 transition-all" />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative border border-white/10 p-16 md:p-18 text-center space-y-10 hover:border-white/30 transition-all duration-500"
          >

            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
            <div className="absolute -bottom-10 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
            <div className="absolute -bottom-10 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight font-outfit">
                LET'S WORK <span className="text-white/30">TOGETHER</span>
              </h2>
              <p className="text-white/40 max-w-md mx-auto">
                Have a project in mind? Let's discuss how we can bring your ideas to life.
              </p>
            </div>
            
            <a 
              href="mailto:raenaldi.ardiansyah30@gmail.com"
              className="inline-flex items-center gap-4 px-10 py-5 border border-white/30 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm group"
            >
              <Mail className="w-4 h-4" />
              GET IN TOUCH
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-white/60">
              RAENALDI ARDIANSYAH S.
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:raenaldi.ardiansyah30@gmail.com" 
              className="text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
            >
              raenaldi.ardiansyah30@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink 
              href="https://github.com/raenaldiardiansyah" 
              icon={Github} 
              label="GitHub" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/raenaldi-ardiansyah/" 
              icon={Linkedin} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="mailto:raenaldi.ardiansyah30@gmail.com" 
              icon={Mail} 
              label="Email" 
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
