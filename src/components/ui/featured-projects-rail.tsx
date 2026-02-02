import * as React from "react";
import { ChevronRight, X} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  color?: string;
  image?: string;
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-neutral-700 backdrop-blur-sm">
      {children}
    </span>
  );
}

function ProjectCard({ project, className }: { project: FeaturedProject; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex h-[345px] w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white",
        "shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-26px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className={cn("relative h-[150px] w-full bg-gradient-to-b", project.color ?? "from-neutral-200 to-neutral-100")}>
        {/* Gambar Background */}
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
            </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-base font-semibold text-neutral-950">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjectsRail({ title, subtitle, projects }: { title: string; subtitle?: string; projects: FeaturedProject[] }) {
  const [showAll, setShowAll] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  // Duplikasi projek agar animasi scroll tidak putus (infinite)
  const repeatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="relative overflow-hidden py-10">
        <div className="relative px-6 max-w-6xl mx-auto">
        {/* Title di tengah */}
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">{title}</h2>
        
        {/* Subtitle di kiri bawah */}
        <div className="flex items-end justify-between">
            <div>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
            </div>
            
            {/* Button View All di kanan */}
            <Button variant="ghost" onClick={() => setShowAll(!showAll)} className="group rounded-full text-neutral-700">
            {showAll ? <><X className="mr-2 h-4 w-4" /> Close</> : <>View all <ChevronRight className="ml-1 h-4 w-4" /></>}
            </Button>
        </div>
    </div>

      <div className="relative mt-8">
        <AnimatePresence mode="wait">
          {!showAll ? (
            <motion.div 
              key="auto-scroll" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-4 px-4"
                animate={{ x: isPaused ? undefined : [0, -1480] }} // Nilai X disesuaikan dengan jumlah card
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {repeatedProjects.map((p, idx) => (
                  <ProjectCard key={`${p.id}-${idx}`} project={p} />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="grid-view"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="max-w-6xl mx-auto px-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => <ProjectCard key={p.id} project={p} className="w-full" />)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showAll && (
          <>
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
          </>
        )}
      </div>
    </div>
  );
}