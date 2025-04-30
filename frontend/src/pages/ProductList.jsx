import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="border p-4 rounded shadow"
        >
          <img src={product.image} alt={product.name} className="h-40 object-contain" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>₹{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
