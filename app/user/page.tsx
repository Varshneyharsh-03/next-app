"use client";
import React from "react";

import axios from "axios";

const fetchUserData = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/users/details"
  );
  return response.data;
};

const page = async () => {
  const data = await fetchUserData();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-400 flex flex-col items-center justify-center gap-3 h-[20vh] w-[30vw]">
        name : {data.name}
        <br />
        email : {data.email}
      </div>
    </div>
  );
};

export default page;
