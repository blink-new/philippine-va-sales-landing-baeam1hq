import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useABTest } from './ABTestProvider'
import { TestTube } from 'lucide-react'

export const ABTestToggle: React.FC = () => {
  const { variant, setVariant } = useABTest()

  const getDescription = () => {
    switch (variant) {
      case 'A': return 'Current: Original Design'
      case 'B': return 'Current: Enhanced with Real Images'
      case 'C': return 'Current: Magic-Inspired Clean Design'
      default: return 'Current: Original Design'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-xs">
      <div className="flex items-center space-x-2 mb-3">
        <TestTube className="w-4 h-4 text-primary" />
        <span className="font-semibold text-sm">A/B/C Test</span>
        <Badge variant={variant === 'A' ? 'default' : 'secondary'}>
          Version {variant}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-gray-600 mb-2">
          {getDescription()}
        </div>
        
        <div className="flex space-x-1">
          <Button
            size="sm"
            variant={variant === 'A' ? 'default' : 'outline'}
            onClick={() => setVariant('A')}
            className="text-xs"
          >
            Version A
          </Button>
          <Button
            size="sm"
            variant={variant === 'B' ? 'default' : 'outline'}
            onClick={() => setVariant('B')}
            className="text-xs"
          >
            Version B
          </Button>
          <Button
            size="sm"
            variant={variant === 'C' ? 'default' : 'outline'}
            onClick={() => setVariant('C')}
            className="text-xs"
          >
            Version C
          </Button>
        </div>
      </div>
    </div>
  )
}