import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { WorkoutProvider } from './context/WorkoutContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/erber-fit">
    <AppProvider>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </AppProvider>
  </BrowserRouter>
)
