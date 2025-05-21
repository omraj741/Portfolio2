import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
          <Award size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{certification.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {certification.issuer} • {certification.date}
          </p>
          {certification.url && (
            <a 
              href={certification.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary-600 dark:text-primary-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View Certificate <ExternalLink size={12} className="ml-1" />
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{certification.title}</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Issuing Organization</h4>
                  <p className="text-lg font-medium">{certification.issuer}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Issue Date</h4>
                  <p className="text-lg font-medium">{certification.date}</p>
                </div>

                {certification.url && (
                  <div className="pt-4">
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CertificationCard;