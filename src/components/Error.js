import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-700 to-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page not found.</p>
      <Link to="/"><button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        Go back to home
      </button></Link>
    </div>
  )
}

export default Error