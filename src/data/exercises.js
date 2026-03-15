export const EXERCISES = [
  // ═══════════════════════════════════════
  // DAY 0 — UPPER PUSH (Chest / Shoulders / Triceps)
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
    sets: 3,
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
  {
    id: 'cable-woodchops',
    name: 'Cable Woodchops (High-to-Low)',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [0],
    primaryMuscles: ['obliques'],
    secondaryMuscles: ['abs'],
    formTips: [
      'Start with cable at highest setting',
      'Rotate through torso, not arms',
      'Keep arms extended throughout',
      'Control the return — don\'t let cable snap back'
    ],
    avoidCues: [
      'Rounding the lower back',
      'Using momentum instead of core rotation'
    ],
    formCoachId: 'cable-woodchops'
  },

  // ═══════════════════════════════════════
  // DAY 1 — LOWER POSTERIOR (Hamstrings / Glutes / Calves)
  // ═══════════════════════════════════════
  {
    id: 'rdls',
    name: 'Romanian Deadlifts',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [1],
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
    dayIndices: [1],
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
    dayIndices: [1],
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
    dayIndices: [1],
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
    id: 'standing-calf-raises',
    name: 'Standing Calf Raises',
    sets: 4,
    minReps: 15,
    maxReps: 15,
    dayIndices: [1],
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
    id: 'seated-calf-raises',
    name: 'Seated Calf Raises',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [1],
    primaryMuscles: ['calves'],
    secondaryMuscles: [],
    formTips: [
      'Targets the soleus (60% of calf mass)',
      'Full range of motion',
      'Slow 2 second pause at the top',
      'Control the stretch at the bottom'
    ],
    avoidCues: [
      'Bouncing at the bottom',
      'Using too heavy a weight with short range'
    ],
    formCoachId: 'seated-calf-raises'
  },
  {
    id: 'hanging-leg-raises',
    name: 'Hanging Leg Raises',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [1],
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
    id: 'reverse-crunches',
    name: 'Reverse Crunches',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [1],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Curl hips up off the bench',
      'Focus on lower abs pulling knees toward chest',
      'Slow controlled lowering',
      'Keep upper back flat on bench'
    ],
    avoidCues: [
      'Using hip flexors to swing legs',
      'Letting feet drop with gravity'
    ],
    formCoachId: 'reverse-crunches'
  },

  // ═══════════════════════════════════════
  // DAY 2 — UPPER PULL (Back / Rear Delts / Biceps)
  // ═══════════════════════════════════════
  {
    id: 'pullups-lat-pulldown',
    name: 'Pullups or Lat Pulldown',
    sets: 4,
    minReps: 8,
    maxReps: 10,
    dayIndices: [2],
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
    dayIndices: [2],
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
    dayIndices: [2],
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
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [2],
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
    dayIndices: [2],
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
    dayIndices: [2],
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
    dayIndices: [2],
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
    id: 'pallof-press',
    name: 'Pallof Press',
    sets: 3,
    minReps: 10,
    maxReps: 12,
    dayIndices: [2],
    primaryMuscles: ['obliques', 'abs'],
    secondaryMuscles: [],
    formTips: [
      'Stand perpendicular to cable machine',
      'Press hands straight out from chest',
      'Resist the rotation — core stays locked',
      'Pause fully extended for 1–2 seconds'
    ],
    avoidCues: [
      'Letting cable pull you into rotation',
      'Shrugging shoulders'
    ],
    formCoachId: 'pallof-press'
  },

  // ═══════════════════════════════════════
  // DAY 3 — LOWER QUAD (Quads / Glutes / Calves)
  // ═══════════════════════════════════════
  {
    id: 'leg-press-quad',
    name: 'Leg Press (Quad Focus)',
    sets: 4,
    minReps: 10,
    maxReps: 12,
    dayIndices: [3],
    primaryMuscles: ['quads'],
    secondaryMuscles: ['glutes'],
    formTips: [
      'Feet shoulder-width, mid-to-low on platform',
      'Full range of motion — deep bend',
      'Control descent — slow 2 second lowering',
      'Knees track with toes'
    ],
    avoidCues: [
      'Locking knees at top',
      'Letting hips lift off the pad'
    ],
    formCoachId: 'leg-press'
  },
  {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    sets: 3,
    minReps: 10,
    maxReps: 10,
    dayIndices: [3],
    primaryMuscles: ['quads', 'glutes'],
    secondaryMuscles: ['hamstrings'],
    formTips: [
      'Long stride for glutes, short stride for quads',
      'Keep torso upright',
      'Front knee tracks over toes',
      'Push through front heel to stand'
    ],
    avoidCues: [
      'Knee caving inward',
      'Leaning forward excessively'
    ],
    formCoachId: 'walking-lunges'
  },
  {
    id: 'leg-extensions',
    name: 'Leg Extensions',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['quads'],
    secondaryMuscles: [],
    formTips: [
      'Squeeze quads hard at the top',
      'Slow 2–3 second lowering',
      'Full range of motion',
      'Lean slightly back for more stretch'
    ],
    avoidCues: [
      'Swinging the weight up',
      'Hyperextending the knee at the top'
    ],
    formCoachId: 'leg-extensions'
  },
  {
    id: 'hip-thrusts-d4',
    name: 'Hip Thrusts (Light)',
    sets: 3,
    minReps: 12,
    maxReps: 12,
    dayIndices: [3],
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['hamstrings'],
    formTips: [
      'Lighter weight, higher reps',
      'Drive through heels',
      'Squeeze glutes at top',
      'Chin tucked throughout'
    ],
    avoidCues: [
      'Hyperextending lower back'
    ],
    formCoachId: 'hip-thrusts'
  },
  {
    id: 'standing-calf-raises-d4',
    name: 'Standing Calf Raises',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [3],
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
    id: 'seated-calf-raises-d4',
    name: 'Seated Calf Raises',
    sets: 3,
    minReps: 15,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['calves'],
    secondaryMuscles: [],
    formTips: [
      'Targets the soleus (60% of calf mass)',
      'Full range of motion',
      'Slow 2 second pause at the top',
      'Control the stretch at the bottom'
    ],
    avoidCues: [
      'Bouncing at the bottom',
      'Using too heavy a weight with short range'
    ],
    formCoachId: 'seated-calf-raises'
  },
  {
    id: 'weighted-decline-crunches',
    name: 'Weighted Decline Crunches',
    sets: 3,
    minReps: 12,
    maxReps: 15,
    dayIndices: [3],
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    formTips: [
      'Hold plate or dumbbell across chest',
      'Curl spine up — don\'t sit up with flat back',
      'Pause and squeeze at top',
      'Slow 2–3 second descent'
    ],
    avoidCues: [
      'Pulling on neck',
      'Using momentum to swing up'
    ],
    formCoachId: 'weighted-decline-crunches'
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
