import React from "react";
import { useState } from "react";

//usestate

const App = () => {
  const [num, setNum] = useState(0);

  const insBtn = () => {
    setNum(num + 1);
  };
  const desBtn = () => {
    if(num > 0){
      setNum(num - 1);
    }
  };
  const restBtn = () => {
    setNum(0);
  };

  return (
    <div className="bg-gray-900 h-screen flex  items-center justify-center">
      <div className="bg-gray-600 flex flex-col items-center p-10 rounded-3xl">
        <h1 className="p-5 font-bold text-8xl text-blue-200">{num}</h1>
        <div className="flex gap-4">
          <button onClick={insBtn} className="bg-blue-500 p-2 rounded-xl font-semibold text-indigo-100">
            Increase ++
          </button>
          <button onClick={restBtn} className="bg-red-500 p-2 rounded-xl font-semibold text-indigo-100">Reset</button>
          <button onClick={desBtn} className="bg-blue-500 p-2 rounded-xl font-semibold text-indigo-100">Decrease -- </button>
          
        </div>
      </div>
    </div>
  );
};

export default App;
