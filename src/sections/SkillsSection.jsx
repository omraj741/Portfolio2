import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { categorizedSkills } from '../utils/data';

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <SectionTitle eyebrow="Tech Stack" title="Skills" subtitle="Interactive tools and engineering fundamentals I use to build reliable software." />

    <div className="grid gap-5 md:grid-cols-3">
      {categorizedSkills.map((group, groupIndex) => (
        <motion.article
          key={group.category}
          className="glass-panel rounded-[2rem] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: groupIndex * 0.08 }}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-white">{group.category}</p>
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill) => (
              <motion.div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-black/35 px-4 py-3 transition hover:border-white/60 hover:bg-white/10 hover:shadow-glow"
                whileHover={{ scale: 1.08, rotate: -1 }}
              >
                <span className="block text-lg font-black text-white">{skill.name}</span>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-300">{skill.level}% proficiency</span>
              </motion.div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default SkillsSection;
