const musclePaths = {
  chest: [
    // Left pec
    'M68,108 Q80,100 98,104 L98,140 Q85,148 68,142 Z',
    // Right pec
    'M102,104 Q120,100 132,108 L132,142 Q115,148 102,140 Z'
  ],
  'front-delts': [
    'M52,94 Q60,86 68,92 L68,108 Q60,112 52,106 Z',
    'M132,92 Q140,86 148,94 L148,106 Q140,112 132,108 Z'
  ],
  'side-delts': [
    'M42,90 Q48,82 52,88 L52,106 Q48,110 42,104 Z',
    'M148,88 Q152,82 158,90 L158,104 Q152,110 148,106 Z'
  ],
  biceps: [
    'M46,118 Q52,112 58,118 L56,162 Q50,166 44,162 Z',
    'M142,118 Q148,112 154,118 L156,162 Q150,166 144,162 Z'
  ],
  forearms: [
    'M42,168 Q50,164 56,168 L52,228 Q46,232 40,228 Z',
    'M144,168 Q150,164 158,168 L160,228 Q154,232 148,228 Z'
  ],
  abs: [
    'M86,148 Q92,145 100,145 Q108,145 114,148 L114,252 Q108,256 100,256 Q92,256 86,252 Z'
  ],
  obliques: [
    // Left oblique
    'M68,148 Q78,145 86,148 L86,252 Q78,256 68,248 Z',
    // Right oblique
    'M114,148 Q122,145 132,148 L132,248 Q122,256 114,252 Z'
  ],
  quads: [
    'M70,278 Q80,272 90,276 L88,380 Q78,386 68,380 Z',
    'M110,276 Q120,272 130,278 L132,380 Q122,386 112,380 Z'
  ],
  calves: [
    'M72,400 Q80,394 88,398 L86,458 Q80,462 72,458 Z',
    'M112,398 Q120,394 128,400 L128,458 Q120,462 114,458 Z'
  ]
}

export default function BodySvgFront({ selectedMuscle, onMuscleClick, getMuscleColor }) {
  return (
    <svg viewBox="0 0 200 500" className="w-full max-w-[240px] mx-auto" role="img" aria-label="Front body muscle map">
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
