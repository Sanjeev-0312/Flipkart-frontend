import React, { useState, useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) return alert("Please log in first.");

    await fetch('http://localhost:5000/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ productId })
    });

    alert("Product added to cart!");
  };

  return (
    
    <div className="p-4 w-full h-screen  bg-blue-200 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p._id} className="border p-4 rounded">
          <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="font-bold">{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p._id)} className="mt-2 bg-green-600 text-white py-1 px-4 rounded">Add to Cart</button>
          
        </div>
      ))}
    </div>
  );
};



// const Home = () => {
//   return (
//     <div className="flex bg-blue-200 w-full h-screen items-center justify-center ">
//       <h1 className="text-3xl font-bold  ">Welcome to Flipkart Dashboard</h1>
//     </div>
//   );
// };

export default Home;