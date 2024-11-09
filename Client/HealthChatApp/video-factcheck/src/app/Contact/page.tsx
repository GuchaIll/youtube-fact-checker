import React from 'react'
import Nav from '../components/Nav'


const Contact = () => {
  return (
    <div>
         <Nav />
        <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8 text-blue-950">
   
  <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
  <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
    <p className="text-lg mb-4">Feel free to reach out to us via email or Discord.</p>
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Email</h3>
      <p className="text-blue-500">yacil@andrew.cmu.edu</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold">Discord</h3>
      <p className="text-blue-500">Server ID</p>
    </div>
  </div>
</div></div>
    
  )
}

export default Contact