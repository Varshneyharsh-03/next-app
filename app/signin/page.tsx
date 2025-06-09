import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-400 flex flex-col items-center justify-center gap-3 h-[20vh] w-[30vw]">
        <h1> signin page</h1>
        <input type="text" placeholder="email" className="bg-white" />
        <input type="password" placeholder="password" className="bg-white" />
        <button className="p-3 bg-amber-800">signin</button>
      </div>
    </div>
  );
};

export default page;
