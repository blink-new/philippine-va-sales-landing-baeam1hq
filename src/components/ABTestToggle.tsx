import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useABTest } from './ABTestProvider'
import { TestTube } from 'lucide-react'

export const ABTestToggle: React.FC = () => {
  const { variant, setVariant } = useABTest()

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-xs">
      <div className="flex items-center space-x-2 mb-3">
        <TestTube className="w-4 h-4 text-primary" />
        <span className="font-semibold text-sm">A/B Test</span>
        <Badge variant={variant === 'A' ? 'default' : 'secondary'}>
          Version {variant}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-gray-600 mb-2">
          {variant === 'A' ? 'Current: Original Design' : 'Current: Enhanced with Real Images'}
        </div>
        
        <div className="flex space-x-2">
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
        </div>
      </div>
    </div>
  )
}