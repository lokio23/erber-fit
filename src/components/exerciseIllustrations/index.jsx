import {
  InclineDbPress,
  FlatDbPress,
  SeatedShoulderPress,
  DbLateralRaises,
  CableLateralRaises,
  AssistedDips,
  RopeTricepPushdowns,
  OverheadTricepExtensions,
  PullupsLatPulldown,
  SeatedCableRow,
  SingleArmDbRow,
  ReversePecDeck,
  FacePulls,
  HammerCurls,
  InclineDbCurls,
  ReverseCurls,
  RomanianDeadlifts,
  HipThrusts,
  HamstringCurl,
  StepUps,
  LegPress,
  StandingCalfRaises,
  HangingLegRaises,
  CableCrunch,
  RearDeltFly,
  WideGripLatPulldown,
  StraightArmPulldown,
  AbWheelRollouts,
  FallbackIllustration
} from './illustrations'

const ILLUSTRATION_MAP = {
  'incline-db-press': InclineDbPress,
  'flat-db-press': FlatDbPress,
  'seated-shoulder-press': SeatedShoulderPress,
  'db-lateral-raises': DbLateralRaises,
  'cable-lateral-raises': CableLateralRaises,
  'assisted-dips': AssistedDips,
  'rope-tricep-pushdowns': RopeTricepPushdowns,
  'overhead-tricep-extensions': OverheadTricepExtensions,
  'pullups-lat-pulldown': PullupsLatPulldown,
  'seated-cable-row': SeatedCableRow,
  'single-arm-db-row': SingleArmDbRow,
  'reverse-pec-deck': ReversePecDeck,
  'face-pulls': FacePulls,
  'hammer-curls': HammerCurls,
  'incline-db-curls': InclineDbCurls,
  'reverse-curls': ReverseCurls,
  'rdls': RomanianDeadlifts,
  'hip-thrusts': HipThrusts,
  'hamstring-curl': HamstringCurl,
  'step-ups': StepUps,
  'leg-press': LegPress,
  'standing-calf-raises': StandingCalfRaises,
  'hanging-leg-raises': HangingLegRaises,
  'cable-crunch': CableCrunch,
  'rear-delt-fly': RearDeltFly,
  'wide-grip-lat-pulldown': WideGripLatPulldown,
  'straight-arm-pulldown': StraightArmPulldown,
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
