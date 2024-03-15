'use client';

import React, { useState } from 'react';
import Hero from './Hero';
import Footer from './Footer';
import WebProjects from './WebProjects';
import ARProjects from './ARProjects';

const ToggleButton: React.FC = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };

  return (
<section className='flex justify-center h-fit'>
    <div className='flex flex-col h-fit'>
      <button
        onClick={toggleComponent}
        className="text-center w-auto h-fit bg-[#D7E0FF] hover:bg-[#D7E0FF] text-[#1D2233] font-normal py-4 mb-10 px-4 rounded"
      >
        Click
      </button>
      {showComponent1 ? <WebProjects /> : <ARProjects />}
    </div>
</section>
  );
};

export default ToggleButton;
