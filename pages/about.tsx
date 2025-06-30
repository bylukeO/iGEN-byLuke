// pages/about.tsx
import { useState } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'howto' | 'pricing'>('overview');

  const features = [
    {
      icon: '🎨',
      title: 'AI-Powered Generation',
      description: 'State-of-the-art AI technology to create stunning images from your text descriptions.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Generate high-quality images in seconds, not minutes.'
    },
    {
      icon: '🎯',
      title: 'Precision Control',
      description: 'Fine-tune your prompts to get exactly the image you envision.'
    },
    {
      icon: '💾',
      title: 'Save & Download',
      description: 'Keep all your generated images in your personal gallery and download them anytime.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works perfectly on desktop, tablet, and mobile devices.'
    },
    {
      icon: '🔒',
      title: 'Privacy Focused',
      description: 'Your images and prompts are stored locally and never shared without permission.'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Write Your Prompt',
      description: 'Describe the image you want to create in natural language. Be as detailed or as simple as you like.',
      example: 'Example: "A serene mountain lake at sunset with snow-capped peaks reflecting in the water"'
    },
    {
      step: 2,
      title: 'Generate Image',
      description: 'Click the generate button and watch as our AI transforms your words into a stunning visual.',
      example: 'Processing typically takes 3-10 seconds depending on complexity.'
    },
    {
      step: 3,
      title: 'Review & Save',
      description: 'View your generated image, save it to your gallery, or download it to your device.',
      example: 'All images are automatically saved to your personal gallery.'
    },
    {
      step: 4,
      title: 'Iterate & Improve',
      description: 'Not quite right? Adjust your prompt and try again. Each generation is unique!',
      example: 'Try adding style modifiers like "photorealistic", "oil painting", or "digital art".'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '10 image generations per day',
        'Standard resolution (512x512)',
        'Basic image gallery',
        'Download images',
        'Community support'
      ],
      popular: false,
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        'Unlimited image generations',
        'High resolution (1024x1024)',
        'Advanced gallery features',
        'Priority processing',
        'Email support',
        'Custom style presets'
      ],
      popular: true,
      buttonText: 'Upgrade to Pro',
      buttonClass: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'API access',
        'Custom model training',
        'Bulk generation',
        'Dedicated support',
        'Commercial license'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const TabButton = ({ id, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About IGen</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your imagination into reality with our cutting-edge AI image generation platform. 
            Create stunning visuals from simple text descriptions in seconds.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <TabButton
            id="overview"
            label="Overview"
            isActive={activeTab === 'overview'}
            onClick={setActiveTab}
          />
          <TabButton
            id="howto"
            label="How to Use"
            isActive={activeTab === 'howto'}
            onClick={setActiveTab}
          />
          <TabButton
            id="pricing"
            label="Pricing"
            isActive={activeTab === 'pricing'}
            onClick={setActiveTab}
          />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Mission Statement */}
            <section className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that everyone should have access to powerful creative tools. IGen democratizes 
                image creation by making professional-quality AI image generation accessible to creators, 
                businesses, and dreamers worldwide. No design skills required – just your imagination.
              </p>
            </section>

            {/* Features Grid */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose IGen?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Statistics */}
            <section className="bg-blue-600 text-white py-16 rounded-2xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-12">IGen by the Numbers</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">1M+</div>
                    <div className="text-lg">Images Generated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">50K+</div>
                    <div className="text-lg">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-lg">Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5 sec</div>
                    <div className="text-lg">Average Generation Time</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* How to Use Tab */}
        {activeTab === 'howto' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Use IGen</h2>
              <p className="text-lg text-gray-600">
                Creating stunning AI-generated images is easier than you think. Follow these simple steps:
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.step} className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 italic">{step.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pro Tips for Better Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">✅ Do:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Be specific with details</li>
                    <li>• Include style references (e.g., "photorealistic", "cartoon")</li>
                    <li>• Mention lighting and mood</li>
                    <li>• Specify colors if important</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❌ Avoid:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Overly complex prompts</li>
                    <li>• Contradictory descriptions</li>
                    <li>• Too many subjects in one image</li>
                    <li>• Negative language</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
              <p className="text-lg text-gray-600">
                Start free and upgrade as your needs grow. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 relative ${
                    plan.popular ? 'border-2 border-blue-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-800 mb-1">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-200 ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Can I use generated images commercially?</h4>
                  <p className="text-gray-600">Pro and Enterprise plans include commercial usage rights. Free plan is for personal use only.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What image formats are supported?</h4>
                  <p className="text-gray-600">All images are generated in high-quality PNG format, perfect for any use case.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Is there a mobile app?</h4>
                  <p className="text-gray-600">Our web app is fully responsive and works great on mobile. Native apps coming soon!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How do I cancel my subscription?</h4>
                  <p className="text-gray-600">You can cancel anytime from your account settings. No questions asked, no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;