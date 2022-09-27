import React from 'react';
import Button from '../Shared/Button';
import heroClouds from '../../assets/hero_clouds.svg';
import heroGroupRight from '../../assets/hero_group_right.svg';
import heroGroupLeft from '../../assets/hero_group_left.svg';

function Hero() {
  return (
    <section id="hero" className="bg-indigo-600 flex flex-col overflow-hidden">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-6 lg:gap-8 max-w-screen-2xl mx-auto px-6 py-14 md:px-12 md:py-20">
        <h1 className="z-10 col-span-3 md:col-span-5 lg:col-span-6 lg:col-start-4 lg:text-center text-white uppercase font-display text-2xl md:text-5xl lg:text-6xl">
          Imagine a place...
        </h1>
        <p className="z-10 col-span-4 md:col-span-5 lg:col-span-8 lg:col-start-3 lg:px-6 lg:text-center text-white font-body text-sm lg:text-lg leading-6">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="col-span-3 md:col-span-5 lg:col-span-6 flex lg:justify-end">
          <Button version="primary__big">Download for Windows</Button>
        </div>
        <div className="col-span-3 md:col-span-5 lg:col-span-6 flex">
          <Button link="profile" version="secondary__big">
            Open Discord in your browser
          </Button>
        </div>
      </div>
      {/* BG IMAGES */}
      <div className="flex justify-start md:relative md:h-[10rem]">
        <div className="px-16 md:hidden">
          <img src={heroGroupLeft} alt="chilling" />
        </div>
        <div className="hidden md:block absolute bottom-0 -left-[24rem] -right-[24rem]">
          <img src={heroClouds} alt="clouds" />
        </div>
        <div className="hidden md:block absolute bottom-0 -right-[12rem]">
          <img src={heroGroupRight} alt="hanging out" />
        </div>
        <div className="hidden lg:block absolute bottom-0 -left-[12rem]">
          <img src={heroGroupLeft} alt="chilling" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
