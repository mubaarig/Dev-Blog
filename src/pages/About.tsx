import React from 'react';
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react';

export const  About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of industry experience, Sarah leads our vision and strategy.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology innovator passionate about building scalable, cutting-edge solutions.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      bio: 'Creative visionary dedicated to crafting intuitive and beautiful user experiences.',
      image: '/team/emily.jpg'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      bio: 'Full-stack expert committed to writing clean, efficient, and maintainable code.',
      image: '/team/david.jpg'
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We never settle for "good enough" and always strive to surpass expectations.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Staying ahead of the curve with emerging technologies and methodologies.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Building lasting partnerships through open communication and teamwork.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Maintaining transparency and ethical practices in everything we do.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a passionate team dedicated to creating innovative solutions that drive real results for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg mb-6">
                Founded in 2019, we began as a small team with a big vision: to revolutionize the digital solutions space through cutting-edge technology and unwavering commitment to excellence.
              </p>
              <p className="text-lg mb-6">
                What started as a passion project has grown into a trusted partner for businesses worldwide. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of quality that sets us apart in today's competitive landscape.
              </p>
              <p className="text-lg">
                Today, we continue to push boundaries and challenge conventions, always keeping our clients' success at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              We believe in empowering businesses through innovative technology solutions that drive real results. Our mission is to bridge the gap between complex challenges and simple, effective solutions—making advanced technology accessible to organizations of all sizes.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  {/* In real implementation, use: <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and create meaningful impact together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

