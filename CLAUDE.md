# ERBER FIT — Project Guide

## What This Is

ERBER FIT is a Progressive Web App (PWA) for tracking workouts, learning exercise form, and monitoring muscle development. It's built for a specific user (Collin) with a hypertrophy-optimized 4-day Upper/Lower split designed around a **knee injury**.

**Live site:** https://lokio23.github.io/erber-fit/
**Repo:** https://github.com/lokio23/erber-fit
**Branch:** `full-rewrite`

## Tech Stack

- **React 19** + **Vite 6** + **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7** (client-side routing)
- **Recharts** (progress charts)
- **vite-plugin-pwa** (service worker, offline support, installable)
- **GitHub Pages** deployment (base path: `/erber-fit/`)
- No backend — all data in `localStorage`

## Commands

- `npm run dev` — start dev server (port 5173)
- `npm run build` — production build + copy `index.html` → `404.html` for SPA routing
- `npx gh-pages -d dist` — deploy to GitHub Pages

## Project Structure

```
src/
├── App.jsx                          # Router setup, all routes
├── main.jsx                         # Entry point
├── index.css                        # Tailwind imports + global styles
├── data/
│   ├── exercises.js                 # All 34 exercises (sets, reps, muscles, form tips)
│   ├── days.js                      # 4-day split definition (exercise IDs per day)
│   ├── muscles.js                   # 15 muscle group definitions
│   ├── muscleExerciseMap.js         # Auto-derived: muscle → exercises lookup
│   └── exerciseLookup.js            # Auto-derived: ID → exercise lookup
├── pages/
│   ├── Dashboard.jsx                # Home page (today's workout, streak, stats)
│   ├── WorkoutSession.jsx           # Active workout (set logging, rest timer)
│   ├── MuscleMap.jsx                # Interactive body SVG → muscle detail
│   ├── ProgressTracker.jsx          # Charts (volume, strength over time)
│   ├── ExerciseLibrary.jsx          # All exercises, filterable by day/muscle
│   └── FormCoach.jsx                # Flashcard-based form learning
├── components/
│   ├── exerciseIllustrations/
│   │   ├── illustrations.jsx        # 40 SVG illustration components
│   │   └── index.jsx                # formCoachId → illustration mapping
│   ├── muscleMap/
│   │   ├── BodySvgFront.jsx         # Front body SVG (clickable muscle regions)
│   │   └── BodySvgBack.jsx          # Back body SVG
│   ├── workout/                     # ExerciseCard, SetRow, RestTimer, WarmupBanner
│   ├── dashboard/                   # WorkoutCard, WeekStrip, ExerciseList
│   ├── library/                     # LibraryCard, FilterBar
│   ├── formCoach/                   # Flashcard, FormTipAccordion
│   ├── progress/                    # VolumeChart, StrengthChart
│   ├── common/                      # Shared UI components
│   └── layout/                      # BottomNav
├── context/
│   ├── AppContext.jsx               # Global state (current day, workout history)
│   └── WorkoutContext.jsx           # Active workout session state
├── hooks/
│   ├── useLocalStorage.js           # Persistent state hook
│   ├── useWorkoutLog.js             # Workout history CRUD
│   ├── useRestTimer.js              # Countdown timer (30/60/90/120s)
│   ├── useStreak.js                 # Weekly workout streak tracking
│   ├── useFormCoach.js              # Flashcard progress (mastered/review)
│   └── usePersonalRecords.js        # PR tracking per exercise
└── utils/
    ├── storage.js                   # localStorage helpers
    ├── dateUtils.js                 # Date formatting
    ├── volumeCalc.js                # Volume calculations
    ├── progressionCalc.js           # Progression suggestions
    └── confetti.js                  # Celebration animation
```

## Key Architecture Decisions

### Exercise Data Schema
```js
{
  id: 'reverse-lunges',           // Unique ID, used in days.js
  name: 'Reverse Lunges (DB)',    // Display name
  sets: 3,
  minReps: 10,
  maxReps: 10,                    // If minReps === maxReps, shows "3x10" not "3x10-10"
  dayIndices: [3],                // Which days this exercise appears on (0-indexed)
  primaryMuscles: ['quads', 'glutes'],
  secondaryMuscles: ['hamstrings'],
  formTips: [...],                // Array of form instruction strings
  avoidCues: [...],               // Array of "what NOT to do" strings
  formCoachId: 'reverse-lunges'   // Key for illustration lookup (NOT the same as id)
}
```

### Illustration Lookup — IMPORTANT
The `ExerciseIllustration` component receives a prop called `exerciseId`, but **this is actually the `formCoachId`**, not the exercise `id`. All parent components (ExerciseCard, FormTipAccordion, Flashcard, Library) pass `exerciseData?.formCoachId` to this prop. The `ILLUSTRATION_MAP` in `index.jsx` must be keyed by `formCoachId` values.

This matters because some exercises share illustrations (e.g., `standing-calf-raises` and `standing-calf-raises-d4` both use formCoachId `'standing-calf-raises'`).

### SVG Illustration Style
All illustrations use `viewBox="0 0 64 64"` with these shared style constants:
- `S` — green figure: `stroke: '#39FF14'`, strokeWidth 2
- `E` — gray equipment: `stroke: '#3a3a3a'`, strokeWidth 2
- `Ed` — gray detail: `stroke: '#3a3a3a'`, strokeWidth 1.5

### Dynamic Data Derivation
`muscleExerciseMap.js` and `exerciseLookup.js` auto-derive from the `EXERCISES` and `MUSCLES` arrays. When adding/removing exercises, you only need to edit `exercises.js` and `days.js` — the rest auto-updates.

### PWA & Service Worker
The app uses `vite-plugin-pwa` with `registerType: 'autoUpdate'`. **After deploying, users may need to clear the service worker cache** to see updates. To clear programmatically:
```js
navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister()));
caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
```

## The Workout Program

### Split Structure
4-day Upper/Lower split, each muscle hit 2×/week:
- **Day 1: Upper Push** — Chest, Shoulders, Triceps, Traps (9 exercises)
- **Day 2: Lower Posterior** — Hamstrings, Glutes, Calves, Core (9 exercises)
- **Day 3: Upper Pull** — Back, Rear Delts, Biceps, Core (9 exercises)
- **Day 4: Lower Quad** — Quads, Glutes, Calves, Core (9 exercises)

Schedule: Push → Posterior → REST → Pull → Quad → REST → REST

### Knee Injury Accommodations
- **Reverse Lunges** instead of Walking Lunges (less PFJ shear force)
- **Leg Extensions limited to 90°-30° ROM** (avoid last 15° where PFJ stress peaks)
- **Leg Press** instead of Barbell Squats (controlled movement, no spinal load)
- No plyometrics, no jump movements, no barbell squats

### Volume Targets (Weekly Sets per Muscle)
All muscles within RP Strength's Maximum Adaptive Volume (MAV) range:
- Chest: 10 | Lats: 11 | Quads: 10 | Hamstrings: 7+
- Glutes: 14 | Calves: 14 | Abs: 18 | Obliques: 9
- Side Delts: 7 | Rear Delts: 6 | Triceps: 6+ | Biceps: 6+
- Traps: 3 direct + secondary | Front Delts: via pressing | Forearms: via pulling

### Ab Strategy (4 Regions)
- **Upper Abs:** Weighted Decline Crunches, Cable Crunches
- **Lower Abs:** Hanging Leg Raises, Reverse Crunches
- **Obliques:** Pallof Press, Cable Woodchops, Bicycle Crunches
- **Transverse Abdominis:** Dead Bugs

## Common Tasks

### Adding a New Exercise
1. Add object to `src/data/exercises.js` with all fields (id, name, sets, reps, muscles, formTips, avoidCues, formCoachId)
2. Add the exercise `id` to the appropriate day in `src/data/days.js`
3. Create SVG illustration function in `src/components/exerciseIllustrations/illustrations.jsx`
4. Import and map `formCoachId` → component in `src/components/exerciseIllustrations/index.jsx`
5. Build and verify: `npm run build`

### Deploying
```bash
npm run build && npx gh-pages -d dist
```
Then clear service worker on live site if needed.

### Checking for Fallback Illustrations
In browser console on any page with exercise cards:
```js
document.querySelectorAll('svg[role="img"]').forEach(s => {
  if (s.getAttribute('aria-label') === 'exercise illustration') console.warn('Fallback:', s)
})
```
