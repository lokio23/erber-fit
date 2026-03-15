const musclePaths = {
  'rear-delts': [
    'M44,90 Q50,84 56,90 L56,108 Q50,112 44,106 Z',
    'M144,90 Q150,84 156,90 L156,106 Q150,112 144,108 Z'
  ],
  triceps: [
    'M42,118 Q50,112 58,118 L56,165 Q50,170 42,165 Z',
    'M142,118 Q150,112 158,118 L158,165 Q150,170 144,165 Z'
  ],
  'traps-rhomboids': [
    'M78,82 Q90,76 100,76 Q110,76 122,82 L126,110 Q118,130 100,132 Q82,130 74,110 Z'
  ],
  lats: [
    'M64,118 Q72,112 78,120 L80,190 Q74,200 64,192 Z',
    'M122,120 Q128,112 136,118 L136,192 Q126,200 120,190 Z'
  ],
  glutes: [
    'M68,256 Q80,248 96,254 L96,304 Q82,312 68,304 Z',
    'M104,254 Q120,248 132,256 L132,304 Q118,312 104,304 Z'
  ],
  hamstrings: [
    'M68,310 Q80,304 90,308 L88,392 Q78,398 66,392 Z',
    'M110,308 Q120,304 132,310 L134,392 Q122,398 112,392 Z'
  ]
}

export default function BodySvgBack({ selectedMuscle, onMuscleClick, getMuscleColor }) {
  return (
    <svg viewBox="0 0 200 500" className="w-full max-w-[240px] mx-auto" role="img" aria-label="Back body muscle map">
      {/* Body silhouette */}
      <ellipse cx="100" cy="40" rx="20" ry="24" fill="none" stroke="#3a3a3a" strokeWidth="1.5" />
      <rect x="93" y="64" width="14" height="12" rx="3" fill="none" stroke="#3a3a3a" strokeWidth="1.5" />
      <path d="M54,88 Q70,76 93,76 L107,76 Q130,76 146,88 L158,92 Q162,96 160,104 L156,168 Q152,172 148,172 L138,240 Q134,248 130,248 L120,248 Q116,248 114,252 L114,272 Q120,270 132,278 L134,388 Q132,394 128,398 L128,462 Q126,470 120,472 L118,474 Q114,476 108,476 L100,476 Q96,476 92,476 L82,474 Q78,472 76,470 L72,462 Q68,462 66,388 L68,278 Q80,270 86,272 L86,252 Q84,248 80,248 L70,248 Q66,248 62,240 L52,172 Q48,172 44,168 L40,104 Q38,96 42,92 Z" fill="none" stroke="#3a3a3a" strokeWidth="1.5" />

      {/* Muscle groups */}
      {Object.entries(musclePaths).map(([muscleId, paths]) => (
        <g key={muscleId}>
          {paths.map((d, i) => (
            <path
              key={`${muscleId}-${i}`}
              d={d}
              fill={getMuscleColor(muscleId)}
              onClick={() => onMuscleClick(muscleId)}
              className="cursor-pointer transition-colors duration-200"
              stroke={selectedMuscle === muscleId ? '#39FF14' : 'transparent'}
              strokeWidth="1.5"
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
