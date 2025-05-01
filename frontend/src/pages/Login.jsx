import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, isSeller })
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', isSeller ? 'seller' : 'user');
      navigate(isSeller ? '/seller' : '/');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center bg-blue-200 w-full h-screen">
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 rounded" />
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={isSeller} onChange={() => setIsSeller(!isSeller)} />
          <span>Login as Seller</span>
        </label>
        <button className="bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
 </div>

  );
};


// const Login = () => {
//   return (
//     <div className="flex flex-col items-center bg-blue-200 w-full h-screen">
//       <h2 className="text-xl mb-4">Login</h2>
//       <input type="email" placeholder="Email" className="border p-2 mb-2" />
//       <input type="password" placeholder="Password" className="border p-2 mb-2" />
//       <button className="bg-blue-600 text-white px-4 py-2">Login</button>
//     </div>
//   );
// };

export default Login;