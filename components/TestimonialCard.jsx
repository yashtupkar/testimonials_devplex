import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-2">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-md opacity-40"></div>
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-indigo-100"
          />
        </div>
      </div>
      <div className="flex-1 max-w-2xl">
        <div className="mb-6 relative">
          <svg className="absolute -top-2 -left-2 md:-left-4 h-10 w-10 text-indigo-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-6 md:pl-8 text-center md:text-left">
            {testimonial.quote}
          </p>
        </div>
        <div className="text-center md:text-left pl-6 md:pl-8">
          <h3 className="font-bold text-xl text-indigo-900 mb-1">{testimonial.name}</h3>
          <p className="text-indigo-600 font-medium text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;