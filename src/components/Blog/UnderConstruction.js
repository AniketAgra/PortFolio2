import React from 'react';
import { FaHardHat } from 'react-icons/fa';
import Particle from '../Particle.js'; // adjust the path as needed
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction-wrapper">
      <Particle />
      <div className="construction-content">
        <FaHardHat size={60} color="#fff" />
        <h1>Under Construction</h1>
      </div>
    </div>
  );
};

export default UnderConstruction;