import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-blue">
            Test Header
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
         Test Text
          </p>
        </div>
        <div className="big-screen">
        </div>
        
      </div>
    </div>
  );
};

export default Home;