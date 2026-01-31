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

const projects = [
  {
    title: "Smart Monitoring IoT",
    desc: "Sistem monitoring lingkungan berbasis ESP32 dan Dashboard Web real-time.",
    tech: ["ESP32", "React", "MQTT", "C++"],
    link: "#"
  },
  {
    title: "Eco-Tracker App",
    desc: "Aplikasi pelacak jejak karbon pribadi dengan visualisasi data interaktif.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Embedded Gate System",
    desc: "Kontrol gerbang otomatis dengan pengenalan wajah melalui Raspberry Pi.",
    tech: ["Raspberry Pi", "Python", "OpenCV"],
    link: "#"
  }
];

const skills = {
  programming: ["TypeScript", "JavaScript", "Python", "C++", "Java"],
  iot: ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "Sensors"],
  tools: ["Git", "Docker", "Vite", "Figma", "VS Code"]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter">PORTFOLIO.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
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
              Mahasiswa Informatika + IoT + Web
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              DESIGN <span className="text-muted-foreground">ENGINEER.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Membangun jembatan antara dunia digital dan fisik melalui perangkat lunak yang elegan dan solusi IoT yang cerdas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Halo! Saya seorang pengembang yang bersemangat mengeksplorasi titik temu antara pengembangan web modern dan teknologi IoT.
              </p>
              <p>
                Fokus utama saya adalah menciptakan antarmuka pengguna yang intuitif dan sistem embedded yang handal untuk memecahkan masalah dunia nyata.
              </p>
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
          <div className="relative aspect-square bg-muted rounded-3xl overflow-hidden border">
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Terminal className="w-24 h-24 opacity-20" />
             </div>
             <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-2xl border">
                <p className="text-sm font-mono">"Developing the future, one byte at a time."</p>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
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
        <section id="projects" className="space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground">Eksperimen dan hasil karya terbaru.</p>
            </div>
            <Button variant="ghost" className="group">
              View all <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={p.title}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden border-border group">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.tech.map(t => <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{t}</span>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-center">Experience & Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2022 - Now", title: "Teknik Informatika", org: "Universitas Indonesia", type: "Education" },
              { year: "2024", title: "IoT Research Assistant", org: "Academic Lab", type: "Experience" },
              { year: "2023", title: "Web Developer Intern", org: "Tech Startup", type: "Experience" }
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary text-primary-foreground rounded-[3rem] text-center space-y-8 px-6">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black">Let's build something together.</h2>
            <p className="opacity-80 text-lg">Tertarik berkolaborasi atau sekadar ingin menyapa? Hubungi saya melalui media sosial di bawah ini.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8">
              <Mail className="w-4 h-4 mr-2" /> Email Me
            </Button>
            <div className="flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Crafted with ❤️ using React & Tailwind.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">GitHub</a>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
