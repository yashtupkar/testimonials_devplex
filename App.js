import React from 'react';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Working with this team completely transformed our online presence. The attention to detail and creative solutions they provided exceeded all our expectations!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "The level of professionalism and expertise is outstanding. Our conversion rates have increased by 150% since implementing their recommended strategies."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "E-commerce Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "I've worked with many agencies before, but none have delivered results like this. Their team truly understands our vision and helps bring it to life."
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Product Owner",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "The attention to user experience and design detail has made our product stand out in a crowded market. Highly recommend their services!"
    }
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-800/80 to-pink-900/85 z-0" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Content */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-tight drop-shadow-lg">
          What Our Clients Say
        </h1>
        <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto text-lg drop-shadow-md">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
}

export default App;