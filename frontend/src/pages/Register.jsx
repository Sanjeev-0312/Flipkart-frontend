import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center bg-blue-200 w-full h-screen">
      <h2 className="text-xl mb-4">Register</h2>
      <input type="text" placeholder="Name" className="border p-2 mb-2" />
      <input type="email" placeholder="Email" className="border p-2 mb-2" />
      <input type="password" placeholder="Password" className="border p-2 mb-2" />
      <button className="bg-blue-600 text-white px-4 py-2">Register</button>
    </div>
  );
};

export default Register;