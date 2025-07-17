import React, { createContext, useContext, useEffect, useState } from 'react'

type ABTestVariant = 'A' | 'B' | 'C'

interface ABTestContextType {
  variant: ABTestVariant
  setVariant: (variant: ABTestVariant) => void
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined)

export const useABTest = () => {
  const context = useContext(ABTestContext)
  if (!context) {
    throw new Error('useABTest must be used within an ABTestProvider')
  }
  return context
}

interface ABTestProviderProps {
  children: React.ReactNode
}

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children }) => {
  const [variant, setVariant] = useState<ABTestVariant>('A')

  useEffect(() => {
    // Check if variant is stored in localStorage
    const storedVariant = localStorage.getItem('ab-test-variant') as ABTestVariant
    
    if (storedVariant && (storedVariant === 'A' || storedVariant === 'B' || storedVariant === 'C')) {
      setVariant(storedVariant)
    } else {
      // Randomly assign variant (33/33/33 split)
      const random = Math.random()
      const randomVariant: ABTestVariant = random < 0.33 ? 'A' : random < 0.66 ? 'B' : 'C'
      setVariant(randomVariant)
      localStorage.setItem('ab-test-variant', randomVariant)
    }
  }, [])

  const handleSetVariant = (newVariant: ABTestVariant) => {
    setVariant(newVariant)
    localStorage.setItem('ab-test-variant', newVariant)
  }

  return (
    <ABTestContext.Provider value={{ variant, setVariant: handleSetVariant }}>
      {children}
    </ABTestContext.Provider>
  )
}