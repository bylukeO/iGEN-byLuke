// pages/about.tsx
import { useState } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'howto'>('overview');

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

  interface TabButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
  }

  const TabButton = ({ id, label, isActive, onClick }: TabButtonProps) => (
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
            onClick={(id) => setActiveTab(id as 'overview' | 'howto')}
          />
          <TabButton
            id="howto"
            label="How to Use"
            isActive={activeTab === 'howto'}
            onClick={(id) => setActiveTab(id as 'overview' | 'howto')}
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
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-lg">Images Generated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10+</div>
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
                    <li>• Include style references (e.g., &quot; photorealistic &quot;, &quot; cartoon &quot;)</li>
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
      </div>
    </div>
  );
};

export default About;