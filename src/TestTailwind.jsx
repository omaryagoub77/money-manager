import React from 'react';

const TestTailwind = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-500">Tailwind CSS Test</h1>
      <p className="text-blue-500">If you see colored text, Tailwind is working!</p>
      <div className="bg-green-200 p-4 rounded mt-4">
        This should have a green background if Tailwind is working correctly.
      </div>
    </div>
  );
};

export default TestTailwind;