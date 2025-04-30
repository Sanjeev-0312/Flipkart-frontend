import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <img src={product.image} alt={product.name} className="h-60 object-contain mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-xl">Price: ₹{product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;