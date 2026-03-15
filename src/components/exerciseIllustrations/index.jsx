import {
  InclineDbPress,
  FlatDbPress,
  SeatedShoulderPress,
  DbLateralRaises,
  CableLateralRaises,
  RopeTricepPushdowns,
  OverheadTricepExtensions,
  PullupsLatPulldown,
  SeatedCableRow,
  SingleArmDbRow,
  ReversePecDeck,
  FacePulls,
  HammerCurls,
  InclineDbCurls,
  RomanianDeadlifts,
  HipThrusts,
  HamstringCurl,
  StepUps,
  LegPress,
  StandingCalfRaises,
  SeatedCalfRaises,
  HangingLegRaises,
  WalkingLunges,
  LegExtensions,
  AbWheelRollouts,
  CableWoodchops,
  ReverseCrunches,
  PallofPress,
  WeightedDeclineCrunches,
  FallbackIllustration
} from './illustrations'

// Keyed by formCoachId (used by ExerciseCard, FormTipAccordion, Flashcard, Library)
const ILLUSTRATION_MAP = {
  'incline-db-press': InclineDbPress,
  'flat-db-press': FlatDbPress,
  'seated-shoulder-press': SeatedShoulderPress,
  'db-lateral-raises': DbLateralRaises,
  'cable-lateral-raises': CableLateralRaises,
  'rope-tricep-pushdowns': RopeTricepPushdowns,
  'overhead-tricep-extensions': OverheadTricepExtensions,
  'cable-woodchops': CableWoodchops,
  'rdls': RomanianDeadlifts,
  'hip-thrusts': HipThrusts,
  'hamstring-curl': HamstringCurl,
  'step-ups': StepUps,
  'standing-calf-raises': StandingCalfRaises,
  'seated-calf-raises': SeatedCalfRaises,
  'hanging-leg-raises': HangingLegRaises,
  'reverse-crunches': ReverseCrunches,
  'pullups-lat-pulldown': PullupsLatPulldown,
  'seated-cable-row': SeatedCableRow,
  'single-arm-db-row': SingleArmDbRow,
  'reverse-pec-deck': ReversePecDeck,
  'face-pulls': FacePulls,
  'hammer-curls': HammerCurls,
  'incline-db-curls': InclineDbCurls,
  'pallof-press': PallofPress,
  'leg-press': LegPress,
  'walking-lunges': WalkingLunges,
  'leg-extensions': LegExtensions,
  'weighted-decline-crunches': WeightedDeclineCrunches,
  'ab-wheel-rollouts': AbWheelRollouts
}

const SIZES = {
  sm: 48,
  md: 80,
  lg: 120
}

export default function ExerciseIllustration({ exerciseId, size = 'md', className = '' }) {
  const Illustration = ILLUSTRATION_MAP[exerciseId] || FallbackIllustration
  const px = SIZES[size] || SIZES.md

  return (
    <svg
      viewBox="0 0 64 64"
      width={px}
      height={px}
      className={className}
      role="img"
      aria-label={`${exerciseId?.replace(/-/g, ' ') || 'exercise'} illustration`}
    >
      <Illustration />
    </svg>
  )
}
