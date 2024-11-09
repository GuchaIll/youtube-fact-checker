import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="w-full bg-white text-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TrueTube</div>
          <ul className="flex space-x-4">
            <li><a href="Home" className="hover:text-blue-500">Home</a></li>
            <li><a href="/" className="hover:text-blue-500">About</a></li>
            <li><a href="Features" className="hover:text-blue-500">Features</a></li>
            <li><a href="Contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
