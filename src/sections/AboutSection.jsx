import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutSummary } from '../utils/data';

const AboutSection = () => (
  <section id="about" className="section-shell">
    <SectionTitle eyebrow="Profile" title="About Me" subtitle="Computer Science Engineering student ready for impactful software and DevOps roles." />

    <motion.article
      className="glass-panel relative overflow-hidden rounded-[2rem] p-7 md:p-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-4xl space-y-5 text-lg leading-9 text-zinc-300">
        {aboutSummary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="relative mt-8 grid gap-4 md:grid-cols-3">
        {['Scalable Apps', 'Cloud Workflows', 'Data-Driven Insights'].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-bold uppercase tracking-[0.18em] text-white">
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  </section>
);

export default AboutSection;
