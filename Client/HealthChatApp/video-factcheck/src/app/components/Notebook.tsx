import React from 'react'

interface NotebookProps {
    factCheckedText: string;
    additionalInfo: string;
  }

const Notebook: React.FC<NotebookProps> = ({ factCheckedText, additionalInfo }) =>{
  return (
    <div className="bg-orange-300 p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 overflow-y-auto h-screen notebook text-blue-950">
    <h2 className="text-3xl font-bold mb-4">Report</h2>
    <p className="text-lg leading-relaxed">
     {factCheckedText}
    </p>
  </div>
  )
}

export default Notebook
