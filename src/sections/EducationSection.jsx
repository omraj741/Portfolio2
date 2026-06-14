import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { education } from '../utils/data';

const EducationSection = () => (
  <section id="education" className="section-shell">
    <SectionTitle eyebrow="Academics" title="Education" subtitle="Strong academic foundation in computer science and engineering." />

    <div className="grid gap-5 md:grid-cols-2">
      {education.map((item, index) => (
        <motion.article
          key={item.program}
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <h3 className="text-lg font-semibold text-white">{item.program}</h3>
          <p className="mt-1 text-slate-300">{item.school}</p>
          <p className="mt-2 text-sm text-slate-400">{item.duration}</p>
          <p className="mt-2 text-sm text-white">{item.score}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default EducationSection;
