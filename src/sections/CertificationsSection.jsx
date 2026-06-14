import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../utils/data';

const CertificationsSection = () => (
  <section id="certifications" className="section-shell">
    <SectionTitle eyebrow="Credentials" title="Certifications" subtitle="Professional learning milestones aligned with software engineering." />

    <div className="grid gap-5 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <motion.article
          key={cert}
          className="glass-panel rounded-[2rem] p-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -8, scale: 1.015 }}
        >
          <p className="text-lg font-bold text-white">{cert}</p>
          <p className="mt-2 text-sm text-zinc-500">Verified learning milestone</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
