import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'AI Associate',
    issuer: 'Salesforce',
    date: 'October 2024',
    url: 'https://www.salesforce.com/trailblazer/pn5bpi3v8osym9p7ze'
  },
  {
    id: 'cert-2',
    title: 'Android Development',
    issuer: 'Google (AICTE)',
    date: 'April 2023',
    url: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=df19c9f85bbfcc65f1927379c6bd7a3f'
  },
  {
    id: 'cert-3',
    title: 'AR Foundations',
    issuer: 'Meta (Coursera)',
    date: 'March 2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/YY7762PP6EUY'
  },
  {
    id: 'cert-4',
    title: 'Data Science Virtual Experience',
    issuer: 'British Airways (Forage)',
    date: 'May 2023',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_6jXF5t3PFA3ri2eFD_1718645971856_completion_certificate.pdf'
  },
  {
    id: 'cert-5',
    title: 'Python',
    issuer: 'AppWars Technologies',
    date: 'January 2023',
    url: 'https://drive.google.com/file/d/1PqgRthWYY3-CbJEQphEZAOeTq3ejUMaQ/view?usp=sharing'
  },
  {
    id: 'cert-6',
    title: 'Cloud Computing Fundamentalsr',
    issuer: 'IBM',
    date: 'July 2024',
    url: 'https://www.credly.com/badges/1ca02c5c-23df-46c9-85da-a8dfeab77671/linked_in_profile'
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