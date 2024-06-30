import React from "react";

const CrissCrossText: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-4">
        <div className="flex flex-col space-y-2">
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            M
          </div>
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            Y
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            N
          </div>
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            A
          </div>
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            M
          </div>
          <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
            E
          </div>
        </div>
      </div>
      <div className="flex space-y-2">
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          I
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          S
        </div>
      </div>
      <div className="flex space-y-2">
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          J
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          O
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          H
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          N
        </div>
      </div>
      <div className="flex space-y-2">
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          D
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          O
        </div>
        <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-md shadow-md">
          E
        </div>
      </div>
    </div>
  );
};

export default CrissCrossText;
