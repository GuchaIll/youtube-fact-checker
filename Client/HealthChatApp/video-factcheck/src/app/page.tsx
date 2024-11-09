'use client';

import Nav from "./components/Nav";
import {useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/Home');
  }
  return (
    <div>
      <Nav />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
    
    <section className="text-center p-8">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">Introducing Our Chrome Extension: <TrueTube></TrueTube></h1>
      <p className="text-xl mb-8">Fact-checking and summarizing video content with reliable sources.</p>
      <button 
          onClick={handleGetStarted} 
          className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Get Started
        </button>
    </section>
    <section className="bg-white text-black p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">About Testing</h2>
      <p className="mb-2">We're working on developing a Chrome extension for fact-checking youtube video and summarizing their content. In addition to providing additional sources and their reliability.</p>
      <p>This web page is intended to introduce the application with multiple sections.</p>
    </section>
  </div>
  </div>
  );
}
