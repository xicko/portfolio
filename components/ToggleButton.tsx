// components/ProjectSwitch.tsx
'use client';

import React, { useState } from 'react';

interface ProjectSwitchProps {
  webProjects: React.ReactNode;
  arProjects: React.ReactNode;
}

const ProjectSwitch: React.FC<ProjectSwitchProps> = ({
  webProjects,
  arProjects,
}) => {
  const [selectedProject, setSelectedProject] = useState('web');

  const toggleProject = (project: 'web' | 'ar') => {
    if (selectedProject !== project) {
      setSelectedProject(project);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className='flex flex-row cursor-pointer space-x-4 mb-8'>
      <button
        type="button"
        className={`
          flex justify-between text-xl rounded p-2 ease-in-out duration-500 transition focus:outline-none ${
            selectedProject === 'web' ? 'bg-[#D7E0FF] bg-opacity-0 text-[#1D2233]' : 'bg-[#172a36] bg-opacity-0'
          }
        `}
        onClick={() => toggleProject('web')}
      >
        <span>Web Projects</span>
        <span className="absolute -z-40 -mt-2 w-[150px] h-[46px] rounded bg-[#D7E0FF] transform transition duration-300 ease-in-out"
          style={{
            transform: selectedProject === 'web' ? 'translateX(-10%)' : 'translateX(90%)',
          }}
        />
        <span className="absolute -z-50 mt-[-3px] w-[290px] h-[36px] rounded bg-[#172a36] bg-opacity-20"
          style={{
            transform: selectedProject === 'web' ? 'translateX(-4.5%)' : 'translateX(-4.5%)',
          }}
        />
      </button>



      <button
        type="button"
        className={`
          flex justify-between text-xl rounded p-2 ease-in-out duration-500 transition focus:outline-none ${
            selectedProject === 'ar' ? 'bg-[#D7E0FF] bg-opacity-0 text-[#1D2233]' : 'bg-[#172a36] bg-opacity-0'
          }
        `}
        onClick={() => toggleProject('ar')}
      >
        <span>AR Projects</span>
        <span hidden className="w-4 h-4 rounded bg-[#D7E0FF] transform transition duration-500 ease-in-out"
          style={{
            transform: selectedProject === 'ar' ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
      </button>
      </div>
      {selectedProject === 'web' && webProjects}
      {selectedProject === 'ar' && arProjects}
    </div>
  );
};

export default ProjectSwitch;