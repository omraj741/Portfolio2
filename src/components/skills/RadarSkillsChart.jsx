import { motion } from 'framer-motion';

const radarSkills = [
  { label: 'Development', value: 85 },
  { label: 'Tools', value: 80 },
  { label: 'Design', value: 77 },
  { label: 'Backend', value: 87 },
  { label: 'Frontend', value: 90 },
  { label: 'Data', value: 76 },
];

const size = 560;
const center = size / 2;
const maxValue = 90;
const minValue = 74;
const rings = 8;
const outerRadius = 230;

const getPoint = (index, value) => {
  const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / radarSkills.length;
  const normalized = (value - minValue) / (maxValue - minValue);
  const radius = 35 + normalized * (outerRadius - 35);

  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
};

const RadarSkillsChart = () => {
  const polygonPoints = radarSkills.map((_, index) => {
    const point = getPoint(index, radarSkills[index].value);
    return `${point.x},${point.y}`;
  });

  return (
    <div className="glass-panel rounded-3xl p-4 md:p-8">
      <div className="mx-auto max-w-3xl">
        <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full">
          {Array.from({ length: rings }).map((_, ringIndex) => {
            const ringValue = minValue + ((maxValue - minValue) * (ringIndex + 1)) / rings;
            const ringPoints = radarSkills.map((__, axisIndex) => {
              const point = getPoint(axisIndex, ringValue);
              return `${point.x},${point.y}`;
            });

            return (
              <polygon
                key={ringIndex}
                points={ringPoints.join(' ')}
                fill="none"
                stroke="rgba(255,255,255,0.24)"
                strokeWidth="1.2"
              />
            );
          })}

          {radarSkills.map((_, axisIndex) => {
            const edge = getPoint(axisIndex, maxValue);
            return (
              <line
                key={radarSkills[axisIndex].label}
                x1={center}
                y1={center}
                x2={edge.x}
                y2={edge.y}
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.2"
              />
            );
          })}

          {radarSkills.map((skill, axisIndex) => {
            const labelPoint = getPoint(axisIndex, maxValue + 2);
            return (
              <text
                key={`${skill.label}-label`}
                x={labelPoint.x}
                y={labelPoint.y}
                fill="#ffffff"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                fontWeight="500"
              >
                {skill.label}
              </text>
            );
          })}

          <motion.polygon
            points={polygonPoints.join(' ')}
            fill="rgba(255,255,255,0.13)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2.5"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {radarSkills.map((skill, axisIndex) => {
            const point = getPoint(axisIndex, skill.value);
            return (
              <motion.circle
                key={`${skill.label}-dot`}
                cx={point.x}
                cy={point.y}
                r="5.5"
                fill="#ffffff"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: axisIndex * 0.08 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default RadarSkillsChart;
