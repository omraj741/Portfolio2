import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../utils/data';

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <SectionTitle eyebrow="Timeline" title="Experience" subtitle="Hands-on industry experience with DevOps delivery, deployment workflows, and production support." />

    <motion.article
      className="glass-panel relative rounded-[2rem] p-7 md:p-10"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-white via-white/20 to-transparent md:block" />
      <div className="md:pl-14">
        <span className="mb-4 inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">{experience.duration}</span>
        <h3 className="text-3xl font-black uppercase tracking-tight text-white">{experience.role}</h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-white">{experience.company} · {experience.location}</p>
        <ul className="mt-6 grid gap-4 text-zinc-300">
          {experience.points.map((point) => (
            <li key={point} className="rounded-2xl border border-white/10 bg-black/25 p-4">{point}</li>
          ))}
        </ul>
        <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white">{experience.technologies.join(' • ')}</p>
      </div>
    </motion.article>
  </section>
);

export default ExperienceSection;
