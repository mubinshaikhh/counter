import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Counter</h1>
        <h2 className="text-2xl mb-4">Counter Value: {count}</h2>
        <div className="flex justify-center">
          <button
            onClick={addValue}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-lg mr-2"
          >
            ADD
          </button>
          <button
            onClick={removeValue}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-lg"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
