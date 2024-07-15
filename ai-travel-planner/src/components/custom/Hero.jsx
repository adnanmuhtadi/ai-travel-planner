import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-container flex flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 py-16 gap-8">
      <h1 className="hero-title font-extrabold text-center text-4xl md:text-5xl lg:text-6xl leading-tight">
        <span className="text-primary text-[#f56551]">Discover Your Next Adventure With AI:</span><br />
        Personalised Itinerary at Your Fingertips
      </h1>
      <p className="hero-subtitle text-xl text-gray-500 text-center max-w-3xl">
        Your personal trip planner and travel curator, creating customized itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started, It's Free</Button>
      </Link>
    </section>
  );
}

export default Hero;
