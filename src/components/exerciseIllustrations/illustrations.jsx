// 28 unique exercise SVG illustrations
// Style: simple stick-figure, green figure (#39FF14), gray equipment (#3a3a3a)
// viewBox="0 0 64 64" for all illustrations

const S = { stroke: '#39FF14', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
const E = { stroke: '#3a3a3a', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
const Ed = { stroke: '#3a3a3a', strokeWidth: 1.5, strokeLinecap: 'round', fill: 'none' }

// === PUSH DAY ===

export function InclineDbPress() {
  return (
    <g>
      {/* Incline bench */}
      <line x1="14" y1="52" x2="50" y2="52" {...E} />
      <line x1="18" y1="52" x2="26" y2="22" {...E} />
      <line x1="26" y1="22" x2="34" y2="20" {...E} />
      {/* Figure lying on incline */}
      <circle cx="33" cy="18" r="4" {...S} />
      <line x1="31" y1="22" x2="22" y2="42" {...S} />
      {/* Arms pressing up with dumbbells */}
      <line x1="26" y1="30" x2="20" y2="18" {...S} />
      <line x1="28" y1="32" x2="36" y2="20" {...S} />
      {/* Dumbbells */}
      <line x1="17" y1="16" x2="23" y2="20" {...Ed} />
      <line x1="33" y1="18" x2="39" y2="22" {...Ed} />
      {/* Legs */}
      <line x1="22" y1="42" x2="18" y2="52" {...S} />
      <line x1="22" y1="42" x2="26" y2="52" {...S} />
    </g>
  )
}

export function FlatDbPress() {
  return (
    <g>
      {/* Flat bench */}
      <rect x="12" y="36" width="40" height="4" rx="1" {...E} />
      <line x1="16" y1="40" x2="16" y2="52" {...E} />
      <line x1="48" y1="40" x2="48" y2="52" {...E} />
      {/* Figure lying flat */}
      <circle cx="42" cy="30" r="4" {...S} />
      <line x1="42" y1="34" x2="20" y2="36" {...S} />
      {/* Arms pressing up */}
      <line x1="34" y1="34" x2="30" y2="20" {...S} />
      <line x1="26" y1="35" x2="22" y2="20" {...S} />
      {/* Dumbbells */}
      <line x1="27" y1="18" x2="33" y2="22" {...Ed} />
      <line x1="19" y1="18" x2="25" y2="22" {...Ed} />
      {/* Legs */}
      <line x1="20" y1="36" x2="16" y2="48" {...S} />
      <line x1="16" y1="48" x2="14" y2="52" {...S} />
    </g>
  )
}

export function SeatedShoulderPress() {
  return (
    <g>
      {/* Bench seat */}
      <line x1="22" y1="44" x2="42" y2="44" {...E} />
      <line x1="40" y1="44" x2="42" y2="24" {...E} />
      {/* Figure seated */}
      <circle cx="32" cy="20" r="4" {...S} />
      <line x1="32" y1="24" x2="32" y2="44" {...S} />
      {/* Arms pressing overhead */}
      <line x1="32" y1="30" x2="22" y2="32" {...S} />
      <line x1="22" y1="32" x2="20" y2="14" {...S} />
      <line x1="32" y1="30" x2="42" y2="32" {...S} />
      <line x1="42" y1="32" x2="44" y2="14" {...S} />
      {/* Dumbbells */}
      <line x1="17" y1="12" x2="23" y2="16" {...Ed} />
      <line x1="41" y1="12" x2="47" y2="16" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="44" x2="24" y2="54" {...S} />
      <line x1="32" y1="44" x2="40" y2="54" {...S} />
    </g>
  )
}

export function DbLateralRaises() {
  return (
    <g>
      {/* Figure standing */}
      <circle cx="32" cy="12" r="4" {...S} />
      <line x1="32" y1="16" x2="32" y2="38" {...S} />
      {/* Arms raised to sides */}
      <line x1="32" y1="22" x2="14" y2="22" {...S} />
      <line x1="32" y1="22" x2="50" y2="22" {...S} />
      {/* Dumbbells at ends */}
      <line x1="12" y1="19" x2="12" y2="25" {...Ed} />
      <line x1="52" y1="19" x2="52" y2="25" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="38" x2="26" y2="54" {...S} />
      <line x1="32" y1="38" x2="38" y2="54" {...S} />
      {/* Feet */}
      <line x1="26" y1="54" x2="22" y2="54" {...S} />
      <line x1="38" y1="54" x2="42" y2="54" {...S} />
    </g>
  )
}

export function CableLateralRaises() {
  return (
    <g>
      {/* Cable machine post */}
      <line x1="10" y1="8" x2="10" y2="56" {...E} />
      <rect x="8" y="8" width="4" height="6" rx="1" {...E} />
      {/* Cable line */}
      <line x1="10" y1="50" x2="40" y2="24" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Figure standing */}
      <circle cx="40" cy="12" r="4" {...S} />
      <line x1="40" y1="16" x2="40" y2="38" {...S} />
      {/* Working arm raised to side */}
      <line x1="40" y1="24" x2="54" y2="24" {...S} />
      {/* Other arm at side */}
      <line x1="40" y1="24" x2="38" y2="34" {...S} />
      {/* Legs */}
      <line x1="40" y1="38" x2="36" y2="54" {...S} />
      <line x1="40" y1="38" x2="44" y2="54" {...S} />
    </g>
  )
}

export function AssistedDips() {
  return (
    <g>
      {/* Dip bars */}
      <line x1="18" y1="14" x2="18" y2="56" {...E} />
      <line x1="46" y1="14" x2="46" y2="56" {...E} />
      <line x1="18" y1="24" x2="22" y2="24" {...E} />
      <line x1="42" y1="24" x2="46" y2="24" {...E} />
      {/* Figure between bars, slightly forward lean */}
      <circle cx="32" cy="14" r="4" {...S} />
      <line x1="32" y1="18" x2="34" y2="36" {...S} />
      {/* Arms on bars */}
      <line x1="32" y1="22" x2="22" y2="24" {...S} />
      <line x1="32" y1="22" x2="42" y2="24" {...S} />
      {/* Legs bent back */}
      <line x1="34" y1="36" x2="36" y2="46" {...S} />
      <line x1="36" y1="46" x2="32" y2="52" {...S} />
      <line x1="34" y1="36" x2="38" y2="46" {...S} />
      <line x1="38" y1="46" x2="34" y2="52" {...S} />
    </g>
  )
}

export function RopeTricepPushdowns() {
  return (
    <g>
      {/* Cable machine */}
      <line x1="32" y1="4" x2="32" y2="8" {...E} />
      <rect x="28" y="4" width="8" height="4" rx="1" {...E} />
      {/* Cable */}
      <line x1="32" y1="8" x2="32" y2="26" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Figure */}
      <circle cx="32" cy="18" r="4" {...S} />
      <line x1="32" y1="22" x2="32" y2="42" {...S} />
      {/* Arms pushing down - elbows at sides */}
      <line x1="32" y1="26" x2="26" y2="26" {...S} />
      <line x1="26" y1="26" x2="24" y2="38" {...S} />
      <line x1="32" y1="26" x2="38" y2="26" {...S} />
      <line x1="38" y1="26" x2="40" y2="38" {...S} />
      {/* Rope ends */}
      <circle cx="24" cy="39" r="1.5" {...Ed} />
      <circle cx="40" cy="39" r="1.5" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="42" x2="28" y2="56" {...S} />
      <line x1="32" y1="42" x2="36" y2="56" {...S} />
    </g>
  )
}

export function OverheadTricepExtensions() {
  return (
    <g>
      {/* Cable machine above */}
      <line x1="10" y1="4" x2="10" y2="56" {...E} />
      <rect x="8" y="4" width="4" height="4" rx="1" {...E} />
      {/* Cable */}
      <line x1="10" y1="8" x2="38" y2="12" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Figure facing away */}
      <circle cx="38" cy="16" r="4" {...S} />
      <line x1="38" y1="20" x2="38" y2="42" {...S} />
      {/* Arms overhead extending */}
      <line x1="38" y1="24" x2="34" y2="14" {...S} />
      <line x1="34" y1="14" x2="32" y2="8" {...S} />
      <line x1="38" y1="24" x2="42" y2="14" {...S} />
      <line x1="42" y1="14" x2="44" y2="8" {...S} />
      {/* Legs */}
      <line x1="38" y1="42" x2="34" y2="56" {...S} />
      <line x1="38" y1="42" x2="42" y2="56" {...S} />
    </g>
  )
}

// === PULL DAY ===

export function PullupsLatPulldown() {
  return (
    <g>
      {/* Pulldown bar */}
      <line x1="14" y1="8" x2="50" y2="8" {...E} />
      <line x1="32" y1="4" x2="32" y2="8" {...E} />
      {/* Figure */}
      <circle cx="32" cy="18" r="4" {...S} />
      <line x1="32" y1="22" x2="32" y2="42" {...S} />
      {/* Arms pulling bar down */}
      <line x1="32" y1="26" x2="20" y2="18" {...S} />
      <line x1="20" y1="18" x2="18" y2="10" {...S} />
      <line x1="32" y1="26" x2="44" y2="18" {...S} />
      <line x1="44" y1="18" x2="46" y2="10" {...S} />
      {/* Legs on seat */}
      <line x1="32" y1="42" x2="26" y2="52" {...S} />
      <line x1="32" y1="42" x2="38" y2="52" {...S} />
      {/* Seat */}
      <line x1="22" y1="44" x2="42" y2="44" {...E} />
    </g>
  )
}

export function SeatedCableRow() {
  return (
    <g>
      {/* Cable origin */}
      <rect x="4" y="30" width="4" height="6" rx="1" {...E} />
      {/* Cable */}
      <line x1="8" y1="33" x2="24" y2="33" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Seat/platform */}
      <line x1="20" y1="44" x2="52" y2="44" {...E} />
      {/* Figure seated */}
      <circle cx="40" cy="20" r="4" {...S} />
      <line x1="40" y1="24" x2="38" y2="44" {...S} />
      {/* Arms pulling to ribs */}
      <line x1="40" y1="28" x2="30" y2="30" {...S} />
      <line x1="30" y1="30" x2="24" y2="33" {...S} />
      {/* V-bar handle */}
      <line x1="22" y1="31" x2="22" y2="35" {...Ed} />
      {/* Legs extended */}
      <line x1="38" y1="44" x2="20" y2="48" {...S} />
      <line x1="20" y1="48" x2="14" y2="46" {...S} />
      {/* Foot plate */}
      <line x1="12" y1="42" x2="12" y2="50" {...E} />
    </g>
  )
}

export function SingleArmDbRow() {
  return (
    <g>
      {/* Bench */}
      <rect x="14" y="34" width="30" height="3" rx="1" {...E} />
      <line x1="18" y1="37" x2="18" y2="52" {...E} />
      <line x1="40" y1="37" x2="40" y2="52" {...E} />
      {/* Figure bent over, one hand on bench */}
      <circle cx="44" cy="22" r="4" {...S} />
      <line x1="44" y1="26" x2="32" y2="34" {...S} />
      {/* Support arm on bench */}
      <line x1="38" y1="30" x2="34" y2="34" {...S} />
      {/* Rowing arm */}
      <line x1="38" y1="28" x2="46" y2="30" {...S} />
      <line x1="46" y1="30" x2="48" y2="40" {...S} />
      {/* Dumbbell */}
      <line x1="46" y1="40" x2="50" y2="40" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="34" x2="26" y2="52" {...S} />
      <line x1="32" y1="34" x2="36" y2="52" {...S} />
    </g>
  )
}

export function ReversePecDeck() {
  return (
    <g>
      {/* Machine post */}
      <line x1="32" y1="4" x2="32" y2="56" {...E} />
      {/* Chest pad */}
      <rect x="28" y="26" width="8" height="12" rx="2" {...E} />
      {/* Figure chest on pad */}
      <circle cx="22" cy="22" r="4" {...S} />
      <line x1="22" y1="26" x2="28" y2="32" {...S} />
      {/* Arms wide pulling back */}
      <line x1="24" y1="28" x2="14" y2="20" {...S} />
      <line x1="14" y1="20" x2="8" y2="22" {...S} />
      <line x1="24" y1="28" x2="14" y2="36" {...S} />
      <line x1="14" y1="36" x2="8" y2="34" {...S} />
      {/* Machine arms */}
      <path d="M8,22 Q4,28 8,34" {...Ed} />
      {/* Seat */}
      <line x1="22" y1="44" x2="36" y2="44" {...E} />
      {/* Legs */}
      <line x1="28" y1="38" x2="26" y2="44" {...S} />
      <line x1="26" y1="44" x2="24" y2="54" {...S} />
    </g>
  )
}

export function FacePulls() {
  return (
    <g>
      {/* Cable machine */}
      <line x1="8" y1="4" x2="8" y2="56" {...E} />
      <rect x="6" y="14" width="4" height="4" rx="1" {...E} />
      {/* Cable */}
      <line x1="10" y1="16" x2="28" y2="18" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Figure */}
      <circle cx="40" cy="14" r="4" {...S} />
      <line x1="40" y1="18" x2="40" y2="40" {...S} />
      {/* Arms pulling rope to face, elbows high */}
      <line x1="40" y1="22" x2="34" y2="16" {...S} />
      <line x1="34" y1="16" x2="28" y2="18" {...S} />
      <line x1="40" y1="22" x2="46" y2="16" {...S} />
      <line x1="46" y1="16" x2="50" y2="18" {...S} />
      {/* Rope */}
      <circle cx="28" cy="18" r="1.5" {...Ed} />
      {/* Legs */}
      <line x1="40" y1="40" x2="36" y2="56" {...S} />
      <line x1="40" y1="40" x2="44" y2="56" {...S} />
    </g>
  )
}

export function HammerCurls() {
  return (
    <g>
      {/* Figure standing */}
      <circle cx="32" cy="10" r="4" {...S} />
      <line x1="32" y1="14" x2="32" y2="38" {...S} />
      {/* Arms - neutral grip curl */}
      <line x1="32" y1="22" x2="24" y2="22" {...S} />
      <line x1="24" y1="22" x2="22" y2="16" {...S} />
      <line x1="32" y1="22" x2="40" y2="22" {...S} />
      <line x1="40" y1="22" x2="42" y2="16" {...S} />
      {/* Dumbbells vertical (neutral grip) */}
      <line x1="22" y1="13" x2="22" y2="19" {...Ed} />
      <line x1="42" y1="13" x2="42" y2="19" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="38" x2="26" y2="54" {...S} />
      <line x1="32" y1="38" x2="38" y2="54" {...S} />
      {/* Feet */}
      <line x1="26" y1="54" x2="22" y2="54" {...S} />
      <line x1="38" y1="54" x2="42" y2="54" {...S} />
    </g>
  )
}

export function InclineDbCurls() {
  return (
    <g>
      {/* Incline bench */}
      <line x1="16" y1="52" x2="46" y2="52" {...E} />
      <line x1="20" y1="52" x2="28" y2="22" {...E} />
      <line x1="28" y1="22" x2="34" y2="20" {...E} />
      {/* Figure on incline bench */}
      <circle cx="33" cy="18" r="4" {...S} />
      <line x1="31" y1="22" x2="24" y2="42" {...S} />
      {/* Arms dangling/curling */}
      <line x1="28" y1="30" x2="22" y2="36" {...S} />
      <line x1="22" y1="36" x2="20" y2="28" {...S} />
      <line x1="26" y1="34" x2="18" y2="40" {...S} />
      <line x1="18" y1="40" x2="16" y2="32" {...S} />
      {/* Dumbbells */}
      <line x1="18" y1="26" x2="22" y2="30" {...Ed} />
      <line x1="14" y1="30" x2="18" y2="34" {...Ed} />
      {/* Legs */}
      <line x1="24" y1="42" x2="20" y2="52" {...S} />
      <line x1="24" y1="42" x2="28" y2="52" {...S} />
    </g>
  )
}

export function ReverseCurls() {
  return (
    <g>
      {/* Figure standing */}
      <circle cx="32" cy="10" r="4" {...S} />
      <line x1="32" y1="14" x2="32" y2="38" {...S} />
      {/* Arms - overhand grip curl */}
      <line x1="32" y1="22" x2="24" y2="24" {...S} />
      <line x1="24" y1="24" x2="22" y2="16" {...S} />
      <line x1="32" y1="22" x2="40" y2="24" {...S} />
      <line x1="40" y1="24" x2="42" y2="16" {...S} />
      {/* Bar (overhand) */}
      <line x1="20" y1="15" x2="24" y2="17" {...Ed} />
      <line x1="40" y1="15" x2="44" y2="17" {...Ed} />
      {/* Small dots for overhand indicator */}
      <circle cx="22" cy="16" r="1" fill="#3a3a3a" />
      <circle cx="42" cy="16" r="1" fill="#3a3a3a" />
      {/* Legs */}
      <line x1="32" y1="38" x2="26" y2="54" {...S} />
      <line x1="32" y1="38" x2="38" y2="54" {...S} />
    </g>
  )
}

// === LEGS & CORE DAY ===

export function RomanianDeadlifts() {
  return (
    <g>
      {/* Figure hinging at hips */}
      <circle cx="38" cy="14" r="4" {...S} />
      <line x1="38" y1="18" x2="28" y2="30" {...S} />
      {/* Arms hanging with bar */}
      <line x1="32" y1="24" x2="28" y2="36" {...S} />
      <line x1="30" y1="22" x2="24" y2="34" {...S} />
      {/* Barbell */}
      <line x1="18" y1="36" x2="34" y2="34" {...Ed} />
      <circle cx="16" cy="36" r="3" {...Ed} />
      <circle cx="36" cy="34" r="3" {...Ed} />
      {/* Legs slightly bent */}
      <line x1="28" y1="30" x2="30" y2="44" {...S} />
      <line x1="30" y1="44" x2="28" y2="54" {...S} />
      <line x1="28" y1="30" x2="34" y2="44" {...S} />
      <line x1="34" y1="44" x2="36" y2="54" {...S} />
      {/* Floor */}
      <line x1="10" y1="56" x2="54" y2="56" {...E} />
    </g>
  )
}

export function HipThrusts() {
  return (
    <g>
      {/* Bench */}
      <rect x="30" y="24" width="22" height="4" rx="1" {...E} />
      <line x1="48" y1="28" x2="48" y2="52" {...E} />
      {/* Figure - upper back on bench, hips elevated */}
      <circle cx="44" cy="20" r="4" {...S} />
      <line x1="42" y1="24" x2="42" y2="26" {...S} />
      {/* Torso from bench to hips */}
      <line x1="42" y1="26" x2="22" y2="24" {...S} />
      {/* Barbell across hips */}
      <line x1="14" y1="22" x2="30" y2="22" {...Ed} />
      <circle cx="12" cy="22" r="3" {...Ed} />
      <circle cx="32" cy="22" r="2" {...Ed} />
      {/* Legs planted */}
      <line x1="22" y1="24" x2="16" y2="38" {...S} />
      <line x1="16" y1="38" x2="12" y2="52" {...S} />
      {/* Floor */}
      <line x1="6" y1="52" x2="54" y2="52" {...E} />
    </g>
  )
}

export function HamstringCurl() {
  return (
    <g>
      {/* Machine pad/bench */}
      <rect x="10" y="28" width="40" height="3" rx="1" {...E} />
      <line x1="14" y1="31" x2="14" y2="52" {...E} />
      <line x1="46" y1="31" x2="46" y2="52" {...E} />
      {/* Figure lying face down */}
      <circle cx="16" cy="24" r="4" {...S} />
      <line x1="18" y1="26" x2="42" y2="28" {...S} />
      {/* Legs curling up */}
      <line x1="42" y1="28" x2="50" y2="26" {...S} />
      <line x1="50" y1="26" x2="48" y2="16" {...S} />
      {/* Ankle pad */}
      <rect x="46" y="14" width="4" height="4" rx="1" {...Ed} />
      {/* Arms hanging */}
      <line x1="16" y1="26" x2="12" y2="34" {...S} />
    </g>
  )
}

export function StepUps() {
  return (
    <g>
      {/* Box/step */}
      <rect x="20" y="38" width="20" height="14" rx="1" {...E} />
      {/* Figure stepping up */}
      <circle cx="30" cy="10" r="4" {...S} />
      <line x1="30" y1="14" x2="30" y2="30" {...S} />
      {/* Leading leg on box */}
      <line x1="30" y1="30" x2="28" y2="38" {...S} />
      {/* Trailing leg behind */}
      <line x1="30" y1="30" x2="16" y2="40" {...S} />
      <line x1="16" y1="40" x2="14" y2="52" {...S} />
      {/* Arms with dumbbells at sides */}
      <line x1="30" y1="20" x2="22" y2="34" {...S} />
      <line x1="30" y1="20" x2="38" y2="34" {...S} />
      {/* Dumbbells */}
      <line x1="20" y1="34" x2="24" y2="34" {...Ed} />
      <line x1="36" y1="34" x2="40" y2="34" {...Ed} />
      {/* Floor */}
      <line x1="6" y1="52" x2="54" y2="52" {...E} />
    </g>
  )
}

export function LegPress() {
  return (
    <g>
      {/* Machine track angled */}
      <line x1="12" y1="10" x2="44" y2="48" {...E} />
      <line x1="16" y1="10" x2="48" y2="48" {...E} />
      {/* Seat/back pad */}
      <line x1="36" y1="50" x2="52" y2="42" {...E} />
      <line x1="52" y1="42" x2="54" y2="30" {...E} />
      {/* Figure seated, pushing platform */}
      <circle cx="50" cy="26" r="4" {...S} />
      <line x1="48" y1="30" x2="42" y2="46" {...S} />
      {/* Legs pushing up on platform */}
      <line x1="42" y1="46" x2="34" y2="38" {...S} />
      <line x1="34" y1="38" x2="28" y2="28" {...S} />
      {/* Foot plate */}
      <rect x="24" y="24" width="8" height="8" rx="1" {...Ed} />
    </g>
  )
}

export function StandingCalfRaises() {
  return (
    <g>
      {/* Platform edge */}
      <rect x="20" y="44" width="24" height="4" rx="1" {...E} />
      {/* Figure standing on toes */}
      <circle cx="32" cy="8" r="4" {...S} />
      <line x1="32" y1="12" x2="32" y2="32" {...S} />
      {/* Arms at sides */}
      <line x1="32" y1="18" x2="24" y2="28" {...S} />
      <line x1="32" y1="18" x2="40" y2="28" {...S} />
      {/* Legs straight */}
      <line x1="32" y1="32" x2="28" y2="42" {...S} />
      <line x1="32" y1="32" x2="36" y2="42" {...S} />
      {/* Feet on toes - heels raised */}
      <line x1="28" y1="42" x2="28" y2="44" {...S} />
      <line x1="36" y1="42" x2="36" y2="44" {...S} />
      {/* Arrow showing up motion */}
      <line x1="50" y1="20" x2="50" y2="10" {...S} />
      <line x1="48" y1="14" x2="50" y2="10" {...S} />
      <line x1="52" y1="14" x2="50" y2="10" {...S} />
    </g>
  )
}

export function HangingLegRaises() {
  return (
    <g>
      {/* Bar */}
      <line x1="14" y1="6" x2="50" y2="6" {...E} />
      {/* Figure hanging */}
      <circle cx="32" cy="14" r="4" {...S} />
      {/* Arms up to bar */}
      <line x1="32" y1="10" x2="26" y2="6" {...S} />
      <line x1="32" y1="10" x2="38" y2="6" {...S} />
      <line x1="32" y1="18" x2="32" y2="34" {...S} />
      {/* Legs raised forward */}
      <line x1="32" y1="34" x2="20" y2="36" {...S} />
      <line x1="32" y1="34" x2="22" y2="38" {...S} />
      {/* Feet */}
      <line x1="20" y1="36" x2="16" y2="34" {...S} />
      <line x1="22" y1="38" x2="18" y2="36" {...S} />
    </g>
  )
}

export function CableCrunch() {
  return (
    <g>
      {/* Cable machine top */}
      <line x1="32" y1="4" x2="32" y2="8" {...E} />
      <rect x="28" y="4" width="8" height="4" rx="1" {...E} />
      {/* Cable */}
      <line x1="32" y1="8" x2="32" y2="18" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Rope */}
      <circle cx="30" cy="20" r="1.5" {...Ed} />
      <circle cx="34" cy="20" r="1.5" {...Ed} />
      {/* Figure kneeling, crunched forward */}
      <circle cx="32" cy="26" r="4" {...S} />
      <line x1="32" y1="30" x2="32" y2="40" {...S} />
      {/* Arms holding rope at head */}
      <line x1="32" y1="24" x2="30" y2="20" {...S} />
      <line x1="32" y1="24" x2="34" y2="20" {...S} />
      {/* Knees on ground */}
      <line x1="32" y1="40" x2="28" y2="50" {...S} />
      <line x1="28" y1="50" x2="24" y2="50" {...S} />
      <line x1="32" y1="40" x2="36" y2="50" {...S} />
      <line x1="36" y1="50" x2="40" y2="50" {...S} />
      {/* Floor */}
      <line x1="16" y1="52" x2="48" y2="52" {...E} />
    </g>
  )
}

// === SHOULDERS & V-TAPER DAY ===

export function RearDeltFly() {
  return (
    <g>
      {/* Figure bent over */}
      <circle cx="32" cy="16" r="4" {...S} />
      <line x1="32" y1="20" x2="32" y2="32" {...S} />
      {/* Torso bent forward */}
      <line x1="32" y1="32" x2="32" y2="28" {...S} />
      {/* Arms wide to sides */}
      <line x1="32" y1="24" x2="14" y2="16" {...S} />
      <line x1="32" y1="24" x2="50" y2="16" {...S} />
      {/* Dumbbells */}
      <line x1="12" y1="14" x2="16" y2="18" {...Ed} />
      <line x1="48" y1="14" x2="52" y2="18" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="32" x2="26" y2="52" {...S} />
      <line x1="32" y1="32" x2="38" y2="52" {...S} />
      {/* Feet */}
      <line x1="26" y1="52" x2="22" y2="52" {...S} />
      <line x1="38" y1="52" x2="42" y2="52" {...S} />
    </g>
  )
}

export function WideGripLatPulldown() {
  return (
    <g>
      {/* Wide bar */}
      <line x1="8" y1="8" x2="56" y2="8" {...E} />
      <line x1="32" y1="4" x2="32" y2="8" {...E} />
      {/* Figure */}
      <circle cx="32" cy="18" r="4" {...S} />
      <line x1="32" y1="22" x2="32" y2="42" {...S} />
      {/* Arms wide pulling down */}
      <line x1="32" y1="26" x2="16" y2="18" {...S} />
      <line x1="16" y1="18" x2="12" y2="10" {...S} />
      <line x1="32" y1="26" x2="48" y2="18" {...S} />
      <line x1="48" y1="18" x2="52" y2="10" {...S} />
      {/* Seat */}
      <line x1="22" y1="44" x2="42" y2="44" {...E} />
      {/* Legs */}
      <line x1="32" y1="42" x2="26" y2="54" {...S} />
      <line x1="32" y1="42" x2="38" y2="54" {...S} />
    </g>
  )
}

export function StraightArmPulldown() {
  return (
    <g>
      {/* Cable machine top */}
      <line x1="32" y1="4" x2="32" y2="10" {...E} />
      <rect x="28" y="4" width="8" height="4" rx="1" {...E} />
      {/* Cable */}
      <line x1="32" y1="10" x2="32" y2="18" style={{stroke: '#3a3a3a', strokeWidth: 1, strokeDasharray: '2 2'}} />
      {/* Figure standing slightly back */}
      <circle cx="32" cy="16" r="4" {...S} />
      <line x1="32" y1="20" x2="32" y2="42" {...S} />
      {/* Arms straight pushing down to thighs */}
      <line x1="32" y1="24" x2="26" y2="20" {...S} />
      <line x1="26" y1="20" x2="24" y2="38" {...S} />
      <line x1="32" y1="24" x2="38" y2="20" {...S} />
      <line x1="38" y1="20" x2="40" y2="38" {...S} />
      {/* Bar */}
      <line x1="22" y1="38" x2="42" y2="38" {...Ed} />
      {/* Legs */}
      <line x1="32" y1="42" x2="28" y2="56" {...S} />
      <line x1="32" y1="42" x2="36" y2="56" {...S} />
    </g>
  )
}

export function AbWheelRollouts() {
  return (
    <g>
      {/* Figure kneeling, extended forward */}
      <circle cx="22" cy="28" r="4" {...S} />
      <line x1="24" y1="32" x2="38" y2="38" {...S} />
      {/* Arms extended to wheel */}
      <line x1="22" y1="30" x2="12" y2="30" {...S} />
      <line x1="12" y1="30" x2="8" y2="44" {...S} />
      {/* Ab wheel */}
      <circle cx="8" cy="46" r="3" {...Ed} />
      <line x1="5" y1="46" x2="11" y2="46" {...Ed} />
      {/* Knees on ground */}
      <line x1="38" y1="38" x2="44" y2="46" {...S} />
      <line x1="44" y1="46" x2="48" y2="46" {...S} />
      {/* Floor */}
      <line x1="4" y1="50" x2="52" y2="50" {...E} />
    </g>
  )
}

// Fallback illustration (generic dumbbell)
export function FallbackIllustration() {
  return (
    <g>
      {/* Dumbbell */}
      <rect x="10" y="26" width="8" height="12" rx="2" {...Ed} />
      <line x1="18" y1="32" x2="46" y2="32" {...Ed} />
      <rect x="46" y="26" width="8" height="12" rx="2" {...Ed} />
      {/* Question mark */}
      <path d="M30,14 Q30,8 36,8 Q42,8 42,14 Q42,18 36,20 L36,22" {...S} />
      <circle cx="36" cy="26" r="1" fill="#39FF14" />
    </g>
  )
}
