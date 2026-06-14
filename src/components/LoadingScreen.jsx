import { Html, useProgress } from '@react-three/drei';

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="rounded-xl border border-white/20 bg-slate-900/80 px-6 py-4 text-center text-white shadow-glow">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white">Loading</p>
        <p className="text-xl font-semibold">{Math.round(progress)}%</p>
      </div>
    </Html>
  );
};

export default LoadingScreen;
