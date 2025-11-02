import React, { useState, useEffect, useCallback } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
    
    // Resume auto-playing after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextTestimonial]);

  // Indicator dots
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setCurrentIndex(index);
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 5000);
        }}
        className={`h-2.5 w-2.5 rounded-full mx-1.5 transition-all duration-300 transform hover:scale-110 ${
          currentIndex === index 
            ? 'bg-indigo-600 w-8 shadow-lg' 
            : 'bg-gray-300 hover:bg-indigo-400'
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ));
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="px-6 py-12 md:px-16 md:py-16 relative min-h-[350px] md:min-h-[320px]">
        {/* Testimonials */}
        <div className="relative w-full">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`w-full transition-opacity duration-700 ease-in-out ${
                currentIndex === index 
                  ? 'opacity-100 relative fade-in' 
                  : 'opacity-0 absolute top-0 left-0 pointer-events-none'
              }`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={() => handleManualNavigation('prev')}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all duration-300 z-10 group border border-gray-100"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => handleManualNavigation('next')}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all duration-300 z-10 group border border-gray-100"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center pb-8 pt-2">
        {renderDots()}
      </div>
    </div>
  );
};

export default TestimonialSlider;