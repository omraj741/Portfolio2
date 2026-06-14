import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { contact, contactLinks } from '../utils/data';

const initialForm = { name: '', email: '', message: '' };

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell pb-32">
      <SectionTitle eyebrow="Connect" title="Contact" subtitle="Open to DevOps, full-stack, cloud, and software testing opportunities." />

      <motion.div
        className="glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/60 focus:shadow-glow"
              placeholder="Name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
            {errors.name ? <p className="mt-2 text-xs text-zinc-300">{errors.name}</p> : null}
          </div>
          <div>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/60 focus:shadow-glow"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
            {errors.email ? <p className="mt-2 text-xs text-zinc-300">{errors.email}</p> : null}
          </div>
          <div>
            <textarea
              className="h-36 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/60 focus:shadow-glow"
              placeholder="Message"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
            {errors.message ? <p className="mt-2 text-xs text-zinc-300">{errors.message}</p> : null}
          </div>
          <button className="premium-button" type="submit">
            Send Message
          </button>
          {submitted ? <p className="text-sm text-zinc-300">Thanks! Your message is ready to be sent.</p> : null}
        </form>

        <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/30 p-6 text-zinc-300">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white">Contact</p>
            <p className="mt-3 text-2xl font-black text-white">{contact.name}</p>
            <p className="mt-3 text-lg font-bold text-white">{contact.email}</p>
            <p className="mt-2 text-sm text-zinc-300">{contact.phone}</p>
            <p className="mt-2 text-sm text-zinc-300">{contact.location}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm transition duration-300 hover:-translate-y-1 hover:border-white/70 hover:text-zinc-300 hover:shadow-glow"
              >
                <span className="mr-2 transition group-hover:scale-110">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
