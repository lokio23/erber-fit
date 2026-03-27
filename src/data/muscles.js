export const MUSCLES = [
  {
    id: 'chest',
    name: 'Chest',
    view: 'front',
    description: 'The pectoralis major. Drives pushing movements and adds width to the upper body. Key for the V-taper look when combined with wide shoulders.'
  },
  {
    id: 'front-delts',
    name: 'Front Delts',
    view: 'front',
    description: 'Front of the shoulders. Assists in all pressing movements. Well-developed front delts give the shoulders a rounded, full appearance.'
  },
  {
    id: 'side-delts',
    name: 'Side Delts',
    view: 'front',
    description: 'The lateral deltoid. THE key V-taper muscle. Wide side delts create the illusion of a broader frame and narrower waist.'
  },
  {
    id: 'rear-delts',
    name: 'Rear Delts',
    view: 'back',
    description: 'Back of the shoulders. Essential for balanced shoulder development, posture, and the 3D shoulder look from all angles.'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    view: 'back',
    description: 'The three-headed muscle on the back of the upper arm. Makes up 2/3 of arm size. Key for arm thickness and pressing strength.'
  },
  {
    id: 'biceps',
    name: 'Biceps',
    view: 'front',
    description: 'The biceps brachii. Responsible for arm flexion. Developed biceps create the classic arm peak and complement the V-taper.'
  },
  {
    id: 'forearms',
    name: 'Forearms',
    view: 'front',
    description: 'Grip strength and arm vascularity. Well-developed forearms complete the arm and enhance overall aesthetic.'
  },
  {
    id: 'lats',
    name: 'Lats',
    view: 'back',
    description: 'The latissimus dorsi. THE other key V-taper muscle. Wide lats create the "wings" that taper down to a narrow waist.'
  },
  {
    id: 'traps-rhomboids',
    name: 'Traps & Rhomboids',
    view: 'back',
    description: 'Upper back thickness muscles. Traps frame the neck, rhomboids pull shoulder blades together for better posture and back detail.'
  },
  {
    id: 'glutes',
    name: 'Glutes',
    view: 'back',
    description: 'The gluteus maximus. The body\'s most powerful muscle. Strong glutes support all lower body and core movements.'
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    view: 'back',
    description: 'Back of the thighs. Balance out the quads and protect the knees. Essential for posterior chain strength.'
  },
  {
    id: 'quads',
    name: 'Quads',
    view: 'front',
    description: 'Front of the thighs. The quadriceps are the body\'s largest muscle group, driving leg extension and overall lower body power.'
  },
  {
    id: 'calves',
    name: 'Calves',
    view: 'front',
    description: 'Lower leg muscles. Trained calves complete the leg and give the lower body a finished, proportional look.'
  },
  {
    id: 'abs',
    name: 'Abs',
    view: 'front',
    description: 'The rectus abdominis and core. A strong core supports every lift and defines the midsection of the V-taper aesthetic.'
  },
  {
    id: 'obliques',
    name: 'Obliques',
    view: 'front',
    description: 'The internal and external obliques. Responsible for rotational power and lateral flexion. Well-developed obliques frame the abs and sharpen the V-taper waistline.'
  }
]

export const MUSCLE_MAP = Object.fromEntries(
  MUSCLES.map(m => [m.id, m])
)
