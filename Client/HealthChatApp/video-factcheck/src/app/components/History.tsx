import React from 'react'

interface HistoryProps {
    uploadedLinks: string[];
  }
  
  const History: React.FC<HistoryProps> = ({ uploadedLinks }) => {
    return (
      <div className="bg-pink-400 p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 overflow-y-auto h-screen text-blue-950">
        <h2 className="text-3xl font-bold mb-4">History</h2>
        <ul className="list-disc pl-5 space-y-2">
          {uploadedLinks && uploadedLinks.length > 0 ? (
            uploadedLinks.map((link, index) => (
              <li key={index} className="text-lg leading-relaxed">
                <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))
          ) : (
            <li className="text-lg leading-relaxed">No links uploaded yet.</li>
          )}
        </ul>
      </div>
    );
  };

export default History