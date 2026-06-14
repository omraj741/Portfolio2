import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../utils/data';

const AchievementsSection = () => (
  <section id="achievements" className="section-shell">
    <SectionTitle eyebrow="Achievements" title="Achievements" subtitle="Community and event leadership outcomes." />

    <motion.article
      className="glass-panel rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-white">{achievements.title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
        {achievements.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.article>
  </section>
);

export default AchievementsSection;
