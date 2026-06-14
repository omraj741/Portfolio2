import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../utils/data';

const ProjectsSection = () => (
  <section id="projects" className="section-shell">
    <SectionTitle eyebrow="Selected builds" title="Project" subtitle="Large editorial case studies with outlined cards, oversized numbers, and live project actions." />

    <div className="space-y-7">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="outline-card group overflow-hidden rounded-[2.1rem] bg-black/70 p-5 md:p-7"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-5">
                <span className="cinematic-heading !text-[clamp(4rem,10vw,7rem)]">0{index + 1}</span>
                <div className="pt-4">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/55">Personal</p>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">{project.title}</h3>
                </div>
              </div>
              <a href={project.demo ?? project.github} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-white/35 px-4 py-2 text-[0.62rem] font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
                Live Project
              </a>
            </div>

            <div className="project-preview relative min-h-64 overflow-hidden rounded-[1.6rem] border border-white/15 p-5">
              <div className="absolute inset-0 transition duration-500 group-hover:scale-105" />
              <div className="relative grid h-full gap-4 md:grid-cols-2">
                <div className="rounded-[1.35rem] bg-white/[0.04] p-6 text-white shadow-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-white/45">Case Study</p>
                  <h4 className="mt-5 text-3xl font-black leading-none tracking-tight">{project.title}</h4>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/55">{project.role} · {project.duration}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">{project.description}</p>
                  <ul className="mt-4 space-y-1 text-xs leading-5 text-zinc-300">
                    {project.achievements.slice(0, 3).map((achievement) => <li key={achievement}>• {achievement}</li>)}
                  </ul>
                </div>
                <div className="rounded-[1.35rem] bg-black/75 p-6 text-white shadow-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-white">Stack</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-black text-black">{tech}</span>)}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="premium-button mt-8 px-4 py-3">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
