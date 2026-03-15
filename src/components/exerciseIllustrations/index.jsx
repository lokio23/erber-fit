import {
  InclineDbPress,
  FlatDbPress,
  SeatedShoulderPress,
  DbLateralRaises,
  CableLateralRaises,
  RopeTricepPushdowns,
  OverheadTricepExtensions,
  CableFlyes,
  DbShrugs,
  PullupsLatPulldown,
  SeatedCableRow,
  SingleArmDbRow,
  ReversePecDeck,
  FacePulls,
  HammerCurls,
  InclineDbCurls,
  CableCrunch,
  RomanianDeadlifts,
  HipThrusts,
  HamstringCurl,
  StepUps,
  DeadBugs,
  LegPress,
  ReverseLunges,
  StandingCalfRaises,
  SeatedCalfRaises,
  HangingLegRaises,
  LegExtensions,
  BicycleCrunches,
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
  'cable-flyes': CableFlyes,
  'seated-shoulder-press': SeatedShoulderPress,
  'db-lateral-raises': DbLateralRaises,
  'cable-lateral-raises': CableLateralRaises,
  'rope-tricep-pushdowns': RopeTricepPushdowns,
  'overhead-tricep-extensions': OverheadTricepExtensions,
  'db-shrugs': DbShrugs,
  'rdls': RomanianDeadlifts,
  'hip-thrusts': HipThrusts,
  'hamstring-curl': HamstringCurl,
  'step-ups': StepUps,
  'standing-calf-raises': StandingCalfRaises,
  'seated-calf-raises': SeatedCalfRaises,
  'hanging-leg-raises': HangingLegRaises,
  'reverse-crunches': ReverseCrunches,
  'dead-bugs': DeadBugs,
  'pullups-lat-pulldown': PullupsLatPulldown,
  'seated-cable-row': SeatedCableRow,
  'single-arm-db-row': SingleArmDbRow,
  'reverse-pec-deck': ReversePecDeck,
  'face-pulls': FacePulls,
  'hammer-curls': HammerCurls,
  'incline-db-curls': InclineDbCurls,
  'pallof-press': PallofPress,
  'cable-crunches': CableCrunch,
  'leg-press': LegPress,
  'reverse-lunges': ReverseLunges,
  'leg-extensions': LegExtensions,
  'weighted-decline-crunches': WeightedDeclineCrunches,
  'cable-woodchops': CableWoodchops,
  'bicycle-crunches': BicycleCrunches
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
