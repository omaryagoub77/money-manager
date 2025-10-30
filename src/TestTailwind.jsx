import React from 'react';

const TestTailwind = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h2>
        <p className="text-gray-700 mb-4">If you can see styled elements below, Tailwind CSS is working!</p>
        
        <div className="space-y-4">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Blue Button
          </div>
          
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <p>Green Alert Box</p>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <span className="text-yellow-800 font-medium">Yellow Card</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTailwind;