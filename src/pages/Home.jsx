import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold text-center text-[#075e54] mb-4">Welcome to Money Box</h1>
        <p className="text-center text-gray-600 mb-8">Select a page from the navigation above.</p>
        
        {/* Test Tailwind CSS */}
        <div className="bg-red-500 text-white p-4 rounded mb-4">
          This should be a red box if Tailwind is working
        </div>
        
        <div className="bg-blue-500 text-white p-4 rounded mb-4">
          This should be a blue box if Tailwind is working
        </div>
        
        <div className="bg-green-500 text-white p-4 rounded mb-4">
          This should be a green box if Tailwind is working
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Deposit Money</h2>
            <p className="text-gray-600">Submit your deposits and track your financial history.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Cashout Requests</h2>
            <p className="text-gray-600">Request cashouts and track their status.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Chat</h2>
            <p className="text-gray-600">Communicate with other users in real-time.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="text-gray-600">Manage your account information and settings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home