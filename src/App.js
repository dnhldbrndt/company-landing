import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Mail } from 'lucide-react';

const CompanyLanding = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Web App",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      link: "#",
      background: "bg-gradient-to-br from-purple-100 to-indigo-100"
    },
    {
      title: "Mobile App",
      description: " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      link: "#",
      background: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      title: "Optimization",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: <Code className="w-12 h-12 text-violet-600" />,
      link: "#",
      background: "bg-gradient-to-br from-violet-100 to-fuchsia-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
              Company
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background Elements */}
 

            {/* Content */}
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                Crafting Digital Experiences
              </h1>
              <p className="text-xl md:text-2xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center">
                  Our Work <ChevronRight className="ml-2" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`${project.background} rounded-2xl p-8 hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="mb-6">{project.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a href={project.link} className="text-indigo-600 font-medium flex items-center">
                  Learn More <ChevronRight className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Company</h3>
              <p className="text-gray-400">Crafting digital experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Mail /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyLanding;
