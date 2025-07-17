import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Star, ArrowRight, Users, Clock, Shield, Globe, TrendingUp, Award } from 'lucide-react';

const LandingPageVersionC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">PhilipineVA</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              🇵🇭 Premium Philippine Virtual Assistants
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Scale your sales team with world-class{' '}
              <span className="text-blue-600">Philippine VAs</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get dedicated, English-fluent virtual assistants who specialize in sales operations, 
              lead generation, and customer relationship management. Hire in days, not weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                View Pricing
              </Button>
            </div>

            <div className="text-sm text-gray-500 mb-8">
              ✨ $0 until you hire • 7-day free trial • Cancel anytime
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">VAs Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">72hrs</div>
              <div className="text-gray-600">Average Hire Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$50K+</div>
              <div className="text-gray-600">Avg. Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale your sales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Philippine VAs are trained specifically for sales operations and come with all the tools and support you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation</h3>
                <p className="text-gray-600 mb-6">
                  Expert prospecting, list building, and lead qualification to fill your sales pipeline with high-quality opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    LinkedIn prospecting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Email campaigns
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    CRM management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Support</h3>
                <p className="text-gray-600 mb-6">
                  Dedicated support for your sales team including appointment setting, follow-ups, and customer onboarding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Appointment scheduling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Follow-up sequences
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Customer onboarding
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600 mb-6">
                  Top 1% talent with university degrees, excellent English, and proven sales experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    University educated
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Fluent English
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Sales experience
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get your VA in 3 simple steps
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process gets you matched with the perfect VA in days, not weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell us your needs</h3>
              <p className="text-gray-600">
                Share your requirements, budget, and timeline. We'll understand exactly what you're looking for.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meet your matches</h3>
              <p className="text-gray-600">
                We'll present 3-5 pre-screened candidates within 48 hours. Interview and choose your favorite.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start working</h3>
              <p className="text-gray-600">
                Your VA starts immediately with full onboarding, training, and ongoing support from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by growing companies
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours are scaling with Philippine VAs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Our Philippine VA increased our qualified leads by 300% in just 2 months. The quality and dedication is incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">CEO, TechStart Inc</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Best investment we've made. Our VA handles all our prospecting and appointment setting. ROI was immediate."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                    <div className="text-sm text-gray-600">Founder, GrowthCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Professional, reliable, and results-driven. Our sales pipeline has never been healthier thanks to our VA team."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Jessica Park</div>
                    <div className="text-sm text-gray-600">VP Sales, ScaleUp Ltd</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Part-Time</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">$899</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <div className="text-sm text-gray-600 mb-8">20 hours/week • Perfect for startups</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Dedicated VA (20hrs/week)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Lead generation & prospecting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    CRM management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Time</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">$1,599</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <div className="text-sm text-gray-600 mb-8">40 hours/week • Best for growing teams</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Dedicated VA (40hrs/week)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Full sales operations support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Advanced CRM & automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Monthly strategy calls
                  </li>
                </ul>
                <Button className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">$2,999</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <div className="text-sm text-gray-600 mb-8">Multiple VAs • Enterprise solution</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    2-3 specialized VAs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Complete sales team support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Custom workflows & processes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Weekly performance reports
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to scale your sales team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies who've transformed their sales operations with Philippine VAs.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Get Started
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Free consultation • No commitment required
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">Thank you!</h3>
                <p className="text-green-700">
                  We'll contact you within 24 hours to discuss your VA needs.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">PhilipineVA</div>
              <p className="text-gray-400 mb-4">
                Premium virtual assistants from the Philippines to scale your sales operations.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Secure & Reliable</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sales Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PhilipineVA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageVersionC;