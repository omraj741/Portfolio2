const MusicToggle = ({ playing, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="fixed bottom-4 right-4 z-50 rounded-full border border-white/20 bg-slate-900/70 px-4 py-2 text-xs text-white backdrop-blur"
  >
    {playing ? 'Pause Music' : 'Play Music'}
  </button>
);

export default MusicToggle;
