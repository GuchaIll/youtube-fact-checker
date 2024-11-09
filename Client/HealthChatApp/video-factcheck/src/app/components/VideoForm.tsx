import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface VideoFormProps {
    setFactCheckedText: (text: string) => void;
    setAdditionalInfo: (info: string) => void;
    uploadedLinks: string[];
    setUploadedLinks: (link: string[]) => void;
  }

const UploadPage: React.FC<VideoFormProps> = ({ setFactCheckedText, setAdditionalInfo, uploadedLinks, setUploadedLinks}) => {
    //const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoLink, setVideoLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    //const [factCheckedText, setFactCheckedText] = useState<string>('');
    //const [additionalInfo, setAdditionalInfo] = useState<string>('');
  
    //const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      //if (e.target.files) {
     //   setVideoFile(e.target.files[0]);
    //  }
   // };
  
    const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
      setVideoLink(e.target.value);
    };
  
    const handleUpload = async () => {
      if ( !videoLink) return;
  
      const formData = new FormData();
      //if (videoFile) {
     //   formData.append('recfile', videoFile);
  
      formData.append('videoLink', videoLink);
      
      setLoading(true);
  
      try {
        const response = await axios.post('http://localhost:3001/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setFactCheckedText(response.data.summary);
        setAdditionalInfo(response.data.additionalInfo);
        setUploadedLinks([...uploadedLinks, videoLink]);
        
      } catch (error) {
        console.error('Error uploading video:', error);
      } finally{
        setLoading(false);
      }
    };
  
    return (
      <div className = "flex justify-center items-center">
       
        <div className="bg-white p-8 text-blue-950 h-auto w-1/2 mt-[2vh]">
          
          <div className="mb-4">
            <label htmlFor="video-link" className="block text-lg font-2xl font-bold text-gray-700">
              Enter a YouTube video link
            </label>
            <input
              id="video-link"
              type="text"
              name = "link"
              value={videoLink}
              onChange={handleLinkChange}
              placeholder="https://www.youtube.com/watch?v=example"
              className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button onClick={handleUpload} className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Upload
            </button>
            {loading && (
            <div className="mt-4">
                <div className="loader"></div>
            </div>
        )}
        </div>
          
        </div>
      </div>
    );
  };

export default UploadPage;