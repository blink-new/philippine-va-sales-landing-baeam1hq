import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CheckCircle, Star, Download, FileText, Calculator, Users, TrendingUp, Clock, Shield, Globe, Phone, Mail, MapPin, BookOpen, Award, Target, Zap, BarChart3, DollarSign, ChevronRight, Play, ArrowRight } from 'lucide-react'

function LandingPageVersionB() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    teamSize: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Philippine VA Sales Guide</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                🇵🇭 Trusted by 2,500+ Companies
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Real Images */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">
                  ✅ FREE Download
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">Limited Time</Badge>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Complete Guide to 
                <span className="text-primary block"> Scaling Your Sales Team</span> with 
                <span className="text-accent block"> Philippine VAs</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the proven strategies that 2,500+ companies use to increase sales by 40% 
                while reducing costs by 70% with Philippine virtual assistants.
              </p>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>87-Page Guide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <span>ROI Calculator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span>Templates Included</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Free Guide Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 What You'll Learn:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>How to hire and onboard top Philippine VAs in 7 days</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>The exact sales processes that generate 300% more leads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cost-saving strategies that reduce expenses by up to 70%</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Hero Image Section */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565350552203-b68085b104df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBmaWxpcGlubyUyMHZpcnR1YWwlMjBhc3Npc3RhbnQlMjB3b3JraW5nJTIwb24lMjBjb21wdXRlcnxlbnwwfDB8fHwxNzUyNzQ5NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Filipino Virtual Assistant"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold mb-2">Meet Your Future VA Team</h3>
                    <p className="text-sm opacity-90">Professional, English-fluent, and ready to scale your business</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2,500+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-xs text-gray-600">Cost Savings</div>
                </div>
              </div>

              {/* Guide Preview Card */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Free Guide Preview</h3>
                      <p className="text-gray-600">87 pages of actionable insights</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Chapter 1: Finding Top Talent</span>
                      <Badge variant="secondary">12 pages</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Chapter 2: Sales Process Setup</span>
                      <Badge variant="secondary">18 pages</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Chapter 3: ROI Optimization</span>
                      <Badge variant="secondary">15 pages</Badge>
                    </div>
                    <div className="text-center pt-4">
                      <span className="text-gray-500">+ 4 more chapters</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Instant Download</span>
                      <Download className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">PDF + Bonus Templates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories with Real Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories from Real Companies
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours transformed their sales with Philippine VAs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "https://images.unsplash.com/photo-1590649942161-2e7eb2032934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwwfDB8fHwxNzUyNzQ5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
                company: "TechStart Inc.",
                result: "247% Lead Increase",
                description: "Scaled from 2 to 15 sales reps using Philippine VAs for lead generation and initial outreach.",
                metric: "$2.1M additional revenue in 6 months"
              },
              {
                image: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwwfDB8fHwxNzUyNzQ5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
                company: "Growth Marketing Co.",
                result: "156% More Qualified Leads",
                description: "Implemented our VA hiring blueprint and saw immediate results in lead quality and quantity.",
                metric: "$180K annual savings on staffing costs"
              },
              {
                image: "https://images.unsplash.com/photo-1590650217455-f0cef0d1018f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwwfDB8fHwxNzUyNzQ5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
                company: "E-commerce Plus",
                result: "Sales Doubled",
                description: "Found and onboarded 3 amazing VAs in just 5 days using our exact hiring process.",
                metric: "ROI of 340% within first quarter"
              }
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-green-600 text-white mb-2">
                      {story.result}
                    </Badge>
                    <h3 className="font-bold text-lg">{story.company}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="text-sm font-semibold text-primary">{story.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition with Enhanced Visuals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Inside This Comprehensive Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully scale your sales team with Philippine virtual assistants, 
              backed by real data from 2,500+ successful implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Hiring Blueprint",
                description: "Step-by-step process to find, interview, and hire top-tier Philippine VAs in just 7 days.",
                highlights: ["Interview templates", "Skill assessments", "Background checks", "Onboarding checklist"],
                color: "bg-blue-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Sales Process Optimization",
                description: "Proven frameworks that have generated 300% more qualified leads for our clients.",
                highlights: ["Lead generation scripts", "CRM setup guides", "Follow-up sequences", "Conversion tactics"],
                color: "bg-green-500"
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "ROI Calculator & Templates",
                description: "Calculate your exact savings and ROI, plus ready-to-use templates for immediate implementation.",
                highlights: ["Cost analysis tool", "Job descriptions", "Contract templates", "Performance metrics"],
                color: "bg-purple-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Management Strategies",
                description: "How to effectively manage and scale your remote Philippine VA team for maximum productivity.",
                highlights: ["Communication protocols", "Performance tracking", "Team scaling plans", "Cultural integration"],
                color: "bg-orange-500"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real Case Studies",
                description: "Detailed analysis of 15 companies that achieved 40%+ revenue growth with Philippine VAs.",
                highlights: ["Before/after metrics", "Implementation timelines", "Challenge solutions", "Results breakdown"],
                color: "bg-red-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Legal & Compliance Guide",
                description: "Navigate international hiring laws, contracts, and compliance requirements with confidence.",
                highlights: ["Legal frameworks", "Tax implications", "Contract samples", "Compliance checklists"],
                color: "bg-indigo-500"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-primary/20 hover:border-l-primary group">
                <CardHeader>
                  <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced ROI Calculator Preview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600">
              See exactly how much you could save with Philippine VAs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Preview */}
            <Card className="shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  <CardTitle>ROI Calculator Preview</CardTitle>
                </div>
                <CardDescription>Interactive calculator included in guide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$127,000</div>
                    <div className="text-lg text-gray-600">Annual savings with 2 VAs</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Local hire cost (2 reps):</span>
                    <span className="font-semibold text-lg">$180,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-600">Philippine VA cost (2 VAs):</span>
                    <span className="font-semibold text-lg text-green-600">$53,000</span>
                  </div>
                  <div className="border-t-2 pt-4">
                    <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                      <span className="font-bold text-lg">Total annual savings:</span>
                      <span className="font-bold text-2xl text-green-600">$127,000</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Get Full Calculator in Guide
                </Button>
              </CardContent>
            </Card>

            {/* Benefits Visualization */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Philippine VAs?</h3>
                <div className="space-y-4">
                  {[
                    { label: "English Proficiency", value: "95%", color: "bg-blue-500" },
                    { label: "Cost Savings", value: "70%", color: "bg-green-500" },
                    { label: "Cultural Alignment", value: "90%", color: "bg-purple-500" },
                    { label: "Time Zone Overlap", value: "85%", color: "bg-orange-500" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: item.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Average Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">70%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">300%</div>
                    <div className="text-sm text-gray-600">More Leads</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">7 Days</div>
                    <div className="text-sm text-gray-600">To Hire</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lead Capture Form */}
      <section id="lead-form" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Guide Now
            </h2>
            <p className="text-xl text-gray-600">
              Join 2,500+ business leaders who have transformed their sales teams with Philippine VAs
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">2,500+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">4.9/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">87</div>
                <div className="text-sm text-gray-600">Pages</div>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            <Card className="shadow-2xl border-2 border-primary/20">
              <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="text-2xl">Download Your Free Guide</CardTitle>
                <CardDescription>
                  Step {currentStep} of 3 - This helps us personalize your experience
                </CardDescription>
                <div className="flex justify-center space-x-2 mt-4">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        step <= currentStep ? 'bg-primary scale-110' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Let's start with your basic info</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="firstName"
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <Input
                            name="lastName"
                            placeholder="Last Name *"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Business Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Tell us about your company</h3>
                      <div>
                        <Input
                          name="company"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          name="jobTitle"
                          placeholder="Your Job Title *"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Help us personalize your guide</h3>
                      <div>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Current Sales Team Size *</option>
                          <option value="1-5">1-5 people</option>
                          <option value="6-15">6-15 people</option>
                          <option value="16-50">16-50 people</option>
                          <option value="50+">50+ people</option>
                        </select>
                      </div>
                      
                      <div className="bg-accent/10 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">🎁 You'll receive instantly:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>87-page comprehensive guide (PDF)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>ROI calculator spreadsheet</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Job description templates</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Contract templates</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Bonus: 30-min consultation call</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={handlePrevStep} className="h-12">
                        Previous
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      className={`h-12 bg-accent hover:bg-accent/90 text-white font-semibold ${currentStep === 1 ? 'w-full' : 'ml-auto'}`}
                    >
                      {currentStep < 3 ? 'Continue' : (
                        <span className="flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Download Free Guide</span>
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-2xl text-center border-2 border-green-200">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Success! Check Your Email</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We've sent your free guide and bonus materials to <strong>{formData.email}</strong>
                </p>
                <div className="bg-accent/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <span>Download and read your guide (5-10 minutes)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <span>Use the ROI calculator to estimate your savings</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <span>Schedule your free 30-minute consultation</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Rest of the sections remain the same as original but with enhanced styling */}
      {/* Social Proof and Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by 2,500+ Companies Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what business leaders are saying about our comprehensive guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Michael Chen",
                company: "Growth Marketing Co.",
                role: "Sales Director",
                content: "This guide saved us months of trial and error. The templates alone are worth their weight in gold. We implemented their strategies and saw a 156% increase in qualified leads within 90 days.",
                rating: 5,
                result: "156% lead increase"
              },
              {
                name: "Emily Rodriguez",
                company: "SaaS Solutions",
                role: "Founder",
                content: "The ROI calculator helped us make the business case to our board. We're now saving $180K annually while our sales team is more productive than ever. Best investment we've made.",
                rating: 5,
                result: "$180K annual savings"
              },
              {
                name: "David Thompson",
                company: "E-commerce Plus",
                role: "CEO",
                content: "The hiring blueprint is incredibly detailed. We found and onboarded 3 amazing VAs in just 5 days using their exact process. Our sales have doubled in 4 months.",
                rating: 5,
                result: "Sales doubled"
              },
              {
                name: "Lisa Wang",
                company: "Consulting Pro",
                role: "Business Owner",
                content: "The case studies gave us confidence to move forward. Seeing how similar companies achieved such great results made the decision easy. We're now generating 40% more revenue.",
                rating: 5,
                result: "40% revenue growth"
              },
              {
                name: "Robert Kim",
                company: "Digital Agency",
                role: "Founder",
                content: "The legal and compliance section was exactly what we needed. As a US company, we were worried about international hiring, but this guide made everything clear and simple.",
                rating: 5,
                result: "Compliance confidence"
              },
              {
                name: "Amanda Foster",
                company: "Tech Innovations",
                role: "VP Sales",
                content: "We've tried other VA services before with mixed results. This guide showed us exactly what we were doing wrong and how to do it right. Game-changer for our business.",
                rating: 5,
                result: "Process optimization"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Backed by Industry Leaders</h3>
              <p className="text-gray-600">Endorsed by top business publications and industry experts</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {['Forbes', 'Entrepreneur', 'Inc. Magazine', 'Business Insider'].map((publication) => (
                <div key={publication} className="text-center">
                  <div className="bg-gray-200 h-12 rounded-lg flex items-center justify-center">
                    <span className="font-semibold text-gray-500">{publication}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Materials Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bonus Materials Worth $2,500
            </h2>
            <p className="text-xl text-gray-600">
              Get these exclusive bonuses when you download the guide today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "ROI Calculator",
                value: "$497",
                description: "Interactive spreadsheet to calculate your exact savings and ROI with different VA scenarios."
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Job Description Templates",
                value: "$297",
                description: "15 proven job descriptions for different VA roles, optimized for attracting top talent."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Contract Templates",
                value: "$697",
                description: "Legally-reviewed contract templates for hiring VAs, including IP protection and NDAs."
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "30-Min Consultation",
                value: "$997",
                description: "Personal consultation call with our VA hiring experts to discuss your specific needs."
              }
            ].map((bonus, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent mx-auto mb-4">
                    {bonus.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{bonus.title}</h3>
                  <div className="text-2xl font-bold text-accent mb-2">{bonus.value}</div>
                  <p className="text-sm text-gray-600">{bonus.description}</p>
                  <Badge className="mt-3 bg-green-100 text-green-800">
                    FREE Today
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-900">Total Value:</span>
              <span className="text-2xl font-bold text-accent line-through">$2,488</span>
              <span className="text-3xl font-bold text-green-600">FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the guide and Philippine VAs
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Is this guide really free?",
                answer: "Yes, absolutely! The guide and all bonus materials are completely free. We believe in providing value first. There are no hidden costs or subscription fees."
              },
              {
                question: "How quickly can I expect to see results?",
                answer: "Most companies see initial results within 30-60 days of implementing our strategies. The guide includes a 90-day implementation timeline to help you track progress and milestones."
              },
              {
                question: "Do I need experience managing remote teams?",
                answer: "Not at all! The guide is designed for business owners and managers at all experience levels. We provide step-by-step instructions, templates, and best practices for managing remote Philippine VAs effectively."
              },
              {
                question: "What makes Philippine VAs different from other countries?",
                answer: "The Philippines offers a unique combination of excellent English skills (3rd largest English-speaking country), Western cultural alignment, strong work ethic, and cost-effectiveness. The guide explains these advantages in detail."
              },
              {
                question: "How much can I realistically save with Philippine VAs?",
                answer: "Our clients typically save 60-70% on labor costs compared to local hires. The ROI calculator in the guide will help you calculate exact savings based on your specific situation and requirements."
              },
              {
                question: "Is it legal to hire Philippine VAs as a US/UK/AU company?",
                answer: "Yes, it's completely legal. The guide includes a comprehensive legal and compliance section covering international hiring laws, tax implications, and proper contract structures for different countries."
              },
              {
                question: "What if I'm not satisfied with the guide?",
                answer: "While the guide is free, we're confident you'll find tremendous value. If you have any questions or need clarification on any topic, our support team is always available to help."
              },
              {
                question: "Do you provide ongoing support after I download the guide?",
                answer: "Yes! You'll get access to our private community of business owners using Philippine VAs, plus the bonus 30-minute consultation call to discuss your specific situation and get personalized advice."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About the Authors/Company */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Philippine VA Sales
            </h2>
            <p className="text-xl text-gray-600">
              The trusted partner for 2,500+ companies scaling their sales teams
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Industry Leaders</h3>
                    <p className="text-gray-600">5+ years helping companies scale with Philippine VAs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="text-gray-600">2,500+ successful VA placements and counting</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Serving companies across US, UK, Australia, and Canada</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To help businesses worldwide unlock their growth potential by connecting them with 
                  the world's most talented and cost-effective virtual assistants from the Philippines.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "2,500+", label: "Companies Served" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "$50M+", label: "Client Savings" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PH</span>
                </div>
                <span className="text-xl font-bold">Philippine VA Sales Guide</span>
              </div>
              <p className="text-gray-400 mb-4">
                The complete resource for scaling your sales team with expert Philippine virtual assistants.
              </p>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  🇵🇭 Proudly Philippine
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#guide" className="hover:text-white transition-colors">Download Guide</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Job Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contract Samples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>guide@philippinevasales.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Manila, Philippines</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Philippine VA Sales Guide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageVersionB