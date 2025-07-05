import { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const GOOGLE_SCRIPT_URL = "/api/contact";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'bylukeO@gmail.com',
      description: 'Send me an email for any inquiries or support',
      link: 'mailto:bylukeo@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/Luke Oladejo',
      description: 'Connect with me on LinkedIn for professional networking',
      link: 'https://www.linkedin.com/in/luke-oladejo-487b6625b/'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@bylukeO',
      description: 'Check out my other projects and contributions on Github',
      link: 'https://github.com/bylukeO'
    },
    {
      icon: '𝕏',
      title: 'Twitter',
      value: '@byluke_O',
      description: 'Follow me for updates and tech insights on Twitter',
      link: 'https://twitter.com/byluke_O'
    }
  ];

  const supportTopics = [
    {
      icon: '🐛',
      title: 'Bug Reports',
      description: 'Found a bug? Let me know and I\'ll fix it ASAP!'
    },
    {
      icon: '💡',
      title: 'Feature Requests',
      description: 'Have an idea for a new feature? I\'d love to hear it!'
    },
    {
      icon: '❓',
      title: 'General Support',
      description: 'Need help using the app? I\'m here to help!'
    },
    {
      icon: '🤝',
      title: 'Business Inquiries',
      description: 'Interested in collaboration or custom work? Just fill out the form and I\'ll get back to you! Open to work!'
    }
  ];

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 60000); // 60 seconds
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or just want to say hello? I&apos;d love to hear from you! 
            I&apos;m always excited to connect with fellow creators and developers, and great humans like you!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send me a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your message! I&apos;ll get back to you as soon as possible.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Oops! Something went wrong. Please try again or contact me directly via email or reach out to me through direct messages on any of my socials.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-400 text-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Methods & Support Topics */}
          <div className="space-y-16">
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Methods</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                    <div className="text-3xl mr-4">
                      {method.title === 'Twitter' ? (
                        <span className="text-black">𝕏</span>
                      ) : (
                        method.icon
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{method.title}</h3>
                      <p className="text-gray-600">
                        <a
                          href={method.link}
                          className="text-blue-600 underline hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.value}
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Topics */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Support Topics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {supportTopics.map((topic, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start">
                    <div className="text-3xl mr-4">
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                      <p className="text-gray-500 text-sm">{topic.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;