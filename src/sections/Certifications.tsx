import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Data Science Virtual Experience',
    issuer: 'British Airways (Forage)',
    date: 'May 2023',
    url: 'https://example.com/certificate'
  },
  {
    id: 'cert-2',
    title: 'Android Development',
    issuer: 'Google (AICTE)',
    date: 'April 2023',
    url: 'https://example.com/certificate'
  },
  {
    id: 'cert-3',
    title: 'AR Foundations',
    issuer: 'Meta (Coursera)',
    date: 'March 2023',
    url: 'https://example.com/certificate'
  },
  {
    id: 'cert-4',
    title: 'Java Basic',
    issuer: 'HackerRank',
    date: 'February 2023',
    url: 'https://example.com/certificate'
  },
  {
    id: 'cert-5',
    title: 'Python',
    issuer: 'AppWars Technologies',
    date: 'January 2023',
    url: 'https://example.com/certificate'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Certifications" 
          subtitle="My credentials" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;