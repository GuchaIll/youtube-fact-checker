import React from 'react'

interface LinkstabProps {
    additionalInfo: string;
  }

const Linkstab: React.FC<LinkstabProps> = ({ additionalInfo }) => {
    return (
        <div className="bg-yellow-200 p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 overflow-y-auto h-screen notebook text-blue-950">
        <h2 className="text-3xl font-bold mb-4">Related Information</h2>
        <p className="text-lg leading-relaxed">
        {additionalInfo}
        </p>
      </div>
      )
}

export default Linkstab
