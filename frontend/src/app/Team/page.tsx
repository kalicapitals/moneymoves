// src/pages/Team.js

import React from 'react';

const teamMembers = [
  { name: 'Vinoth Gopalakrishnan', role: 'Chief Tinkerer' },
  { name: 'Muniraj Kandasamy', role: 'Sr. Analyst' },
  { name: 'Rajenderan K K', role: 'Resident Engineer (Civil & Infra Projects)' },
];

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;