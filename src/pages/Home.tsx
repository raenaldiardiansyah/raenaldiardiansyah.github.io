import FeaturedProjectsRail, { FeaturedProject } from "@/components/ui/featured-projects-rail.tsx";
import RobotScene from "@/components/ui/RobotScene";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Code2, 
  Award, 
  ChevronRight,
  Download,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const projects: FeaturedProject[] = [
  {
    id: "Smart-Lock Door",
    title: "Smart-Lock Door",
    description: "ESP32-based door lock system with real-time monitoring and web dashboard.",
    tags: ["|ESP32|", "|SENSOR & AKTUATOR|", "|MQTT|", "|C/C++|"],
    image: "/images/smartlock-door.png"
    //link: "#"
  },
  {
    id: "3d-website",
    title: "3D Website",
    description: "Interactive 3D website built using Three.js.",
    tags: ["React", "Tailwind", "Framer Motion", "JavaScript"],
  
  },
  {
    id: "iot-agv",
    title: "Line-Following AGV — In Progress",
    description:
      "Line-following AGV with control and monitoring via IoT.",
    tags: ["ESP32", "MQTT", "C/C++", "PCB"],
    image: "/images/AGV Line.png"
    
  },
];

const skills = {
  programming: ["TypeScript", "JavaScript", "C/C++", "Java"],
  iot: ["Arduino", "ESP32", "Electronic Schematic", "MQTT", "Sensors", "Aktuator"],
  tools: ["Git", "KiCad", "Vite", "Figma", "VS Code","Arduino IDE"]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter">RAENALDI ARDIANSYAH S.</span>
            <div className="hidden md:flex h-full items-center absolute left-1/2 transform -translate-x-1/2">
              <a 
                href="#about" 
                className="group relative h-full flex items-center px-6 overflow-hidden border-r border-border/50"
              >
                <span className="relative z-10 transition-all duration-200 group-hover:text-white">About</span>
                <div className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"></div>
                {/* Glitch effect layer */}
                <div className="absolute inset-0 bg-black/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"></div>
              </a>

              <a 
                href="#skills" 
                className="group relative h-full flex items-center px-6 overflow-hidden border-r border-border/50"
              >
                <span className="relative z-10 transition-all duration-200 group-hover:text-white">Skills</span>
                <div className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"></div>
                {/* Glitch effect layer */}
                <div className="absolute inset-0 bg-black/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"></div>
              </a>

              <a 
                href="#projects" 
                className="group relative h-full flex items-center px-6 overflow-hidden border-r border-border/50"
              >
                <span className="relative z-10 transition-all duration-200 group-hover:text-white">Projects</span>
                <div className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"></div>
                {/* Glitch effect layer */}
                <div className="absolute inset-0 bg-black/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"></div>
              </a>

              <a 
                href="#contact" 
                className="group relative h-full flex items-center px-6 overflow-hidden"
              >
                <span className="relative z-10 transition-all duration-200 group-hover:text-white">Contact</span>
                <div className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out"></div>
                {/* Glitch effect layer */}
                <div className="absolute inset-0 bg-black/50 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"></div>
              </a>
            </div>
            
            {/* Resume Button - Right */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="w-4 h-4 mr-2" /> Resume
            </Button>
          </div>
        </nav>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Badge variant="secondary" className="px-4 py-1 text-sm font-mono">
              WEBSITE + ELECTRICAL SCHEMATIC + IoT 
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              COMPUTER <span className="text-muted-foreground">ENGINEER.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Designing and building integrated web and IoT systems with real-time connectivity and scalable architecture. </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I approach system development with the belief that systems are a flexible medium for connecting interfaces and physical devices.              </p>
              <p>
                I’m interested in how web applications and electrical systems work together, how connectivity enables real-time interaction, and how tools can be designed to feel clear and dependable.
                My work spans web development and electrical system design, with connectivity used as a bridge rather than the focus.              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-bold">Web Development</span>
                  <span className="text-sm">Frontend focused, clean UI</span>
                </div>
                <div className="w-px bg-border h-12" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-bold">IoT & Embedded</span>
                  <span className="text-sm">Sensors, MCU, Connectivity</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square max-w-sm mx-auto w-full bg-muted rounded-3xl overflow-hidden border">
            {/* 3D Robot Scene (full container) */}
            <RobotScene url="/robot_model.glb" />
            
            {/* Text overlay di bawah */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/90 backdrop-blur-sm rounded-2xl border pointer-events-none">
              <p className="text-xs font-mono text-center text-blue-950">Developing the future, one byte at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-10 scroll-mt-28">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
            <p className="text-muted-foreground">Tools dan teknologi yang saya gunakan sehari-hari.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">IoT & Embedded</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.iot.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects"  className="space-y-10 scroll-mt-12">
          <FeaturedProjectsRail
            title="Featured Projects"
            subtitle="Eksperimen dan hasil karya terbaru."
            projects={projects}
          />
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-center">Experience & Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2024 - Now", title: "Teknik Computer", org: "Telkom University", type: "Education" },
             // { year: "2024", title: "IoT Research Assistant", org: "Telkom University", type: "Experience" },
             // { year: "2023", title: "Web Developer Intern", org: "Tech Startup", type: "Experience" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="w-32 pt-1 text-sm text-muted-foreground font-mono">{item.year}</div>
                <div className="flex-1 space-y-1 pb-8 border-b group-last:border-none">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <Badge variant="outline" className="text-[10px]">{item.type}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
       <section id="contact">  
        <footer className="border-t py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-6">
              <h3 className="font-mono font-bold text-2xl tracking-tighter">RAENALDI ARDIANSYAH S.</h3>
            </div>
              <div className="flex gap-6 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a 
                      href="mailto:raenaldi.ardiansyah30@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      raenaldi.ardiansyah30@gmail.com
                    </a>
                  </div>
                  <a 
                    href="https://github.com/raenaldiardiansyah" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5"/>
                  </a>
                  <a 
                    href="https://www.instagram.com/renaldi.ardynshs/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raenaldi-ardiansyah/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Linkedin">
                      <Linkedin className= "w-5 h-5"/>
                  </a>
              </div>
          </div>
        </footer>
      </section> 
    </div>
  );
}
