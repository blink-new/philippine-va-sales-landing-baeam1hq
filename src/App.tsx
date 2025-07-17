import { ABTestProvider, useABTest } from './components/ABTestProvider'
import { ABTestToggle } from './components/ABTestToggle'
import LandingPageVersionA from './components/LandingPageVersionA'
import LandingPageVersionB from './components/LandingPageVersionB'

function AppContent() {
  const { variant } = useABTest()

  return (
    <div className="relative">
      <ABTestToggle />
      {variant === 'A' ? <LandingPageVersionA /> : <LandingPageVersionB />}
    </div>
  )
}

function App() {
  return (
    <ABTestProvider>
      <AppContent />
    </ABTestProvider>
  )
}

export default App