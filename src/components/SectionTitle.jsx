const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <header className="mb-12 text-center">
    <p className="mb-3 text-xs font-black uppercase tracking-[0.42em] text-current/55">{eyebrow}</p>
    <h2 className="cinematic-heading">{title}</h2>
    {subtitle ? <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-current/55">{subtitle}</p> : null}
  </header>
);

export default SectionTitle;
