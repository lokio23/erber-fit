export const EXERCISES = [
  // ═══════════════════════════════════════
  // DAY 0 — PUSH (Chest / Shoulders / Triceps)
  // ═══════════════════════════════════════
  {
    id: 'incline-db-press',
    name: 'Incline Dumbbell Press',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [0],
    primaryMuscles: ['chest'],
    secondaryMuscles: ['front-delts', 'triceps'],
    formTips: [
      'Bench at 30–45°',
      'Keep shoulder blades pulled back',
      'Lower dumbbells to upper chest',
      'Drive elbows slightly inward (not flared)'
    ],
    avoidCues: [
      'Bouncing weight',
      'Arching lower back excessively'
    ],
    formCoachId: 'incline-db-press'
  },
  {
    id: 'flat-db-press',
    name: 'Flat Dumbbell Press',
    sets: 3,
    minReps: 8,
    maxReps: 10,
    dayIndices: [0],
    primaryMuscles: ['chest'],
    secondaryMuscles: ['front-delts', 'triceps'],
    formTips: [
      'Feet planted firmly',
      'Shoulder blades locked back',
      'Slow 2–3 second lowering'
    ],
    avoidCues: [
      'Letting elbows flare straight out'
    ],
    formCoachId: 'flat-db-press'
  },
  {
    id: 'seated-db-shoulder-press',
    name: 'Seated Dumbbell Shoulder Press',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [0],
    primaryMuscles: ['front-delts', 'side-delts'],
    secondaryMuscles: ['triceps'],
    formTips: [
      'Dumbbells start ear level',
      'Press slightly inward at the top',
      'Keep core tight'
    ],
    avoidCues: [
      'Excessive lower-back arch'
    ],
    formCoachId: 'seated-shoulder-press'
  },
  {
    id: 'db-lateral-raises',
    name: 'Dumbbell Lateral Raises',
    sets: 4,
    minReps: 12,
    maxReps: 15,
    dayIndices: [0],
    primaryMuscles: ['side-delts'],
    secondaryMuscles: [],
    formTips: [
      'Slight lean forward',
      'Raise slightly in front of body',
      'Stop at shoulder height',
      'Control lowering'
    ],
    avoidCues: [
      'Swinging',
      'Shrugging traps'
    ],
    formCoachId: 'db-lateral-raises'
  },
  {
    id: 'cable-lateral-raises',
    name: 'Cable Lateral Raises',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [0],
    primaryMuscles: ['side-delts'],
    secondaryMuscles: [],
    formTips: [
      'Cable behind body',
      'Small bend in elbow',
      'Lift with side delt, not traps'
    ],
    avoidCues: [],
    formCoachId: 'cable-lateral-raises'
  },
  {
    id: 'assisted-dips',
    name: 'Assisted Dips',
    sets: 3,
    minReps: 10,
    maxReps: 12,
    dayIndices: [0],
    primaryMuscles: ['chest', 'triceps'],
    secondaryMuscles: ['front-delts'],
    formTips: [
      'Lean slightly forward',
      'Lower until elbows ~90°'
    ],
    avoidCues: [
      'Dropping too deep (shoulder stress)'
    ],
    formCoachId: 'assisted-dips'
  },
  {
    id: 'rope-tricep-pushdowns',
    name: 'Rope Tricep Pushdowns',
    sets: 3,
    minReps: 12,
    maxReps: 12,
    dayIndices: [0],
    primaryMuscles: ['triceps'],
    secondaryMuscles: [],
    formTips: [
      'Elbows pinned to sides',
      'Spread rope at bottom'
    ],
    avoidCues: [
      'Shoulders moving forward'
    ],
    formCoachId: 'rope-tricep-pushdowns'
  },
  {
    id: 'overhead-tricep-extensions',
    name: 'Overhead Tricep Extensions',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [0],
    primaryMuscles: ['triceps'],
    secondaryMuscles: [],
    formTips: [
      'Keep elbows narrow',
      'Full stretch behind head'
    ],
    avoidCues: [
      'Arching lower back'
    ],
    formCoachId: 'overhead-tricep-extensions'
  },

  // ═══════════════════════════════════════
  // DAY 1 — PULL (Back / Rear Delts / Biceps)
  // ═══════════════════════════════════════
  {
    id: 'pullups-lat-pulldown',
    name: 'Pullups or Lat Pulldown',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [1],
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'forearms'],
    formTips: [
      'Pull elbows down toward ribs',
      'Slight lean back',
      'Chest up'
    ],
    avoidCues: [
      'Pulling with arms only'
    ],
    formCoachId: 'pullups-lat-pulldown'
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    sets: 4,
    minReps: 10,
    maxReps: 10,
    dayIndices: [1],
    primaryMuscles: ['lats', 'traps-rhomboids'],
    secondaryMuscles: ['biceps'],
    formTips: [
      'Neutral spine',
      'Pull to lower ribs',
      'Squeeze shoulder blades'
    ],
    avoidCues: [
      'Leaning too far backward'
    ],
    formCoachId: 'seated-cable-row'
  },
  {
    id: 'single-arm-db-row',
    name: 'Single Arm Dumbbell Row',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [1],
    primaryMuscles: ['lats', 'traps-rhomboids'],
    secondaryMuscles: ['biceps'],
    formTips: [
      'Flat back',
      'Pull elbow toward hip'
    ],
    avoidCues: [
      'Rotating torso'
    ],
    formCoachId: 'single-arm-db-row'
  },
  {
    id: 'reverse-pec-deck',
    name: 'Reverse Pec Deck',
    sets: 4,
    minReps: 12,
    maxReps: 15,
    dayIndices: [1],
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['traps-rhomboids'],
    formTips: [
      'Chest on pad',
      'Arms slightly bent',
      'Pull wide'
    ],
    avoidCues: [
      'Squeezing traps'
    ],
    formCoachId: 'reverse-pec-deck'
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [1],
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['traps-rhomboids'],
    formTips: [
      'Pull rope to upper face',
      'Elbows high',
      'Pause briefly'
    ],
    avoidCues: [
      'Pulling too low'
    ],
    formCoachId: 'face-pulls'
  },
  {
    id: 'hammer-curls',
    name: 'Hammer Curls',
    sets: 3,
    minReps: 10,
    maxReps: 12,
    dayIndices: [1],
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    formTips: [
      'Neutral grip',
      'Elbows fixed'
    ],
    avoidCues: [
      'Swinging weight'
    ],
    formCoachId: 'hammer-curls'
  },
  {
    id: 'incline-db-curls',
    name: 'Incline Dumbbell Curls',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [1],
    primaryMuscles: ['biceps'],
    secondaryMuscles: [],
    formTips: [
      'Full stretch at bottom',
      'Curl slowly'
    ],
    avoidCues: [
      'Lifting elbows forward'
    ],
    formCoachId: 'incline-db-curls'
  },
  {
    id: 'reverse-curls',
    name: 'Reverse Curls',
    sets: 3,
    minReps: 12,
    maxReps: 12,
    dayIndices: [1],
    primaryMuscles: ['forearms'],
    secondaryMuscles: ['biceps'],
    formTips: [
      'Overhand grip',
      'Slow negatives'
    ],
    avoidCues: [],
    formCoachId: 'reverse-curls'
  },

  // ═══════════════════════════════════════
  // DAY 2 — KNEE-FRIENDLY LEGS + CORE
  // ═══════════════════════════════════════
  {
    id: 'rdls',
    name: 'Romanian Deadlifts',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [2],
    primaryMuscles: ['hamstrings', 'glutes'],
    secondaryMuscles: [],
    formTips: [
      'Hinge hips back',
      'Slight knee bend',
      'Keep bar close to legs'
    ],
    avoidCues: [
      'Rounding lower back'
    ],
    formCoachId: 'rdls'
  },
  {
    id: 'hip-thrusts',
    name: 'Hip Thrusts or Glute Bridges',
    sets: 4,
    minReps: 10,
    maxReps: 10,
    dayIndices: [2],
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['hamstrings'],
    formTips: [
      'Chin tucked',
      'Drive through heels',
      'Squeeze glutes at top'
    ],
    avoidCues: [
      'Hyperextending lower back'
    ],
    formCoachId: 'hip-thrusts'
  },
  {
    id: 'hamstring-curl',
    name: 'Seated or Lying Hamstring Curl',
    sets: 3,
    minReps: 12,
    maxReps: 12,
    dayIndices: [2],
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: [],
    formTips: [
      'Slow negatives',
      'Full contraction'
    ],
    avoidCues: [
      'Jerking weight'
    ],
    formCoachId: 'hamstring-curl'
  },
  {
    id: 'step-ups',
    name: 'Step-Ups',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [2],
    primaryMuscles: ['quads', 'glutes'],
    secondaryMuscles: [],
    formTips: [
      'Low box height',
      'Push through heel'
    ],
    avoidCues: [
      'Pushing off back foot'
    ],
    formCoachId: 'step-ups'
  },
  {
    id: 'leg-press',
    name: 'Leg Press (Feet High)',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [2],
    primaryMuscles: ['quads'],
    secondaryMuscles: ['glutes', 'hamstrings'],
    formTips: [
      'Feet high on platform',
      'Control descent',
      'Knees track with toes'
    ],
    avoidCues: [
      'Locking knees'
    ],
    formCoachId: 'leg-press'
  },
  {
    id: 'standing-calf-raises',
    name: 'Standing Calf Raises',
    sets: 4,
    minReps: 15,
    maxReps: 15,
    dayIndices: [2],
    primaryMuscles: ['calves'],
    secondaryMuscles: [],
    formTips: [
      'Full stretch at bottom',
      'Pause at top'
    ],
    avoidCues: [
      'Bouncing'
    ],
    formCoachId: 'standing-calf-raises'
  },
  {
    id: 'hanging-leg-raises',
    name: 'Hanging Leg Raises',
    sets: 4,
    minReps: 12,
    maxReps: 15,
    dayIndices: [2],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Raise legs using abs',
      'Slow control'
    ],
    avoidCues: [
      'Swinging'
    ],
    formCoachId: 'hanging-leg-raises'
  },
  {
    id: 'cable-crunch',
    name: 'Cable Crunch',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [2],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Curl spine downward',
      'Use abs, not hips'
    ],
    avoidCues: [],
    formCoachId: 'cable-crunch'
  },

  // ═══════════════════════════════════════
  // DAY 3 — SHOULDERS + V-TAPER
  // ═══════════════════════════════════════
  {
    id: 'seated-shoulder-press-d4',
    name: 'Seated Shoulder Press',
    sets: 4,
    minReps: 8,
    maxReps: 8,
    dayIndices: [3],
    primaryMuscles: ['front-delts', 'side-delts'],
    secondaryMuscles: ['triceps'],
    formTips: [
      'Focus on controlled movement',
      'Keep core tight',
      'Press slightly inward at top'
    ],
    avoidCues: [
      'Excessive lower-back arch'
    ],
    formCoachId: 'seated-shoulder-press'
  },
  {
    id: 'db-lateral-raises-d4',
    name: 'Dumbbell Lateral Raises',
    sets: 5,
    minReps: 15,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['side-delts'],
    secondaryMuscles: [],
    formTips: [
      'Keep weight moderate for perfect form',
      'Slight lean forward',
      'Stop at shoulder height',
      'Control lowering'
    ],
    avoidCues: [
      'Swinging',
      'Shrugging traps'
    ],
    formCoachId: 'db-lateral-raises'
  },
  {
    id: 'cable-lateral-raises-d4',
    name: 'Cable Lateral Raises',
    sets: 4,
    minReps: 12,
    maxReps: 12,
    dayIndices: [3],
    primaryMuscles: ['side-delts'],
    secondaryMuscles: [],
    formTips: [
      'Constant tension = bigger side delts',
      'Cable behind body',
      'Small bend in elbow'
    ],
    avoidCues: [],
    formCoachId: 'cable-lateral-raises'
  },
  {
    id: 'rear-delt-fly',
    name: 'Rear Delt Fly',
    sets: 4,
    minReps: 15,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: [],
    formTips: [
      'Keep arms wide',
      'Chest on pad or bent over',
      'Squeeze at peak contraction'
    ],
    avoidCues: [
      'Squeezing traps'
    ],
    formCoachId: 'rear-delt-fly'
  },
  {
    id: 'wide-grip-lat-pulldown',
    name: 'Wide Grip Lat Pulldown',
    sets: 4,
    minReps: 10,
    maxReps: 10,
    dayIndices: [3],
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps'],
    formTips: [
      'Pull elbows outward and down',
      'Chest up',
      'Squeeze lats at bottom'
    ],
    avoidCues: [
      'Pulling with arms only'
    ],
    formCoachId: 'wide-grip-lat-pulldown'
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Straight Arm Pulldown',
    sets: 3,
    minReps: 12,
    maxReps: 12,
    dayIndices: [3],
    primaryMuscles: ['lats'],
    secondaryMuscles: [],
    formTips: [
      'Focus on lat contraction, not arms',
      'Keep arms nearly straight',
      'Controlled tempo'
    ],
    avoidCues: [
      'Bending elbows excessively'
    ],
    formCoachId: 'straight-arm-pulldown'
  },
  {
    id: 'incline-db-press-d4',
    name: 'Incline Dumbbell Press',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [3],
    primaryMuscles: ['chest'],
    secondaryMuscles: ['front-delts', 'triceps'],
    formTips: [
      'Upper chest builder',
      'Bench at 30–45°',
      'Keep shoulder blades pulled back'
    ],
    avoidCues: [
      'Bouncing weight',
      'Arching lower back excessively'
    ],
    formCoachId: 'incline-db-press'
  },
  {
    id: 'hanging-leg-raises-d4',
    name: 'Hanging Leg Raises',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Raise legs using abs',
      'Slow control'
    ],
    avoidCues: [
      'Swinging'
    ],
    formCoachId: 'hanging-leg-raises'
  },
  {
    id: 'ab-wheel-rollouts',
    name: 'Ab Wheel Rollouts',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [3],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Keep core tight',
      'Controlled extension',
      'Don\'t let hips drop'
    ],
    avoidCues: [
      'Letting hips drop'
    ],
    formCoachId: 'ab-wheel-rollouts'
  }
]

// Quick lookup map
export const EXERCISE_MAP = Object.fromEntries(
  EXERCISES.map(ex => [ex.id, ex])
)
