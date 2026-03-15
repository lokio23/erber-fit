import { NavLink } from 'react-router-dom'

const tabs = [
  {
    path: '/',
    label: 'Home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    path: '/workout',
    label: 'Workout',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h-2a1 1 0 00-1 1v9a1 1 0 001 1h2" />
        <path d="M17.5 6.5h2a1 1 0 011 1v9a1 1 0 01-1 1h-2" />
        <rect x="6.5" y="4" width="3" height="16" rx="1" />
        <rect x="14.5" y="4" width="3" height="16" rx="1" />
        <line x1="9.5" y1="12" x2="14.5" y2="12" />
      </svg>
    )
  },
  {
    path: '/muscles',
    label: 'Muscles',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="10" x2="4" y2="14" />
        <line x1="16" y1="10" x2="20" y2="14" />
        <line x1="10" y1="16" x2="8" y2="22" />
        <line x1="14" y1="16" x2="16" y2="22" />
      </svg>
    )
  },
  {
    path: '/progress',
    label: 'Progress',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    path: '/library',
    label: 'Library',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    )
  },
  {
    path: '/form-coach',
    label: 'Form',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 018 8c0 6-8 12-8 12S4 16 4 10a8 8 0 018-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-surface-lighter z-50 safe-area-pb">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-1 py-1 text-[10px] font-medium transition-colors ${
                isActive ? 'text-accent' : 'text-text-secondary'
              }`
            }
          >
            {tab.icon}
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
