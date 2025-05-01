import React, { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:5000/api/cart', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="flex bg-blue-200 w-full h-screen text-xl ">This is Cart Page</h2>
      {items.map(item => (
        <div key={item._id} className="border p-2 my-2 rounded">
          <h3>{item.product.name}</h3>
          <p>${item.product.price}</p>
        </div>
      ))}
    </div>
  );
};


export default Cart;
