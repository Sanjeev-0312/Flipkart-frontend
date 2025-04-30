import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="flex w-full justify-around p-4 bg-gray-300 text-white">
    //   <Link to="/" className="font-bold"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_joinplus-3a4cec.svg" alt="" /></Link>
    //   <div className="space-x-4 w-[50%] justify-between ">
    //     <input className=" border-1 w-[400px]" type="text" />
    //     <Link to="/products">All Products</Link>
    //     <Link to="/cart">Cart</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>
    //   </div>
    // </nav>
    <div className="flex w-full ">
        <nav className="flex mx-auto w-[80%] justify-between items-center p-4 text-black">
            <div  className="">
            <Link to="/" className="font-bold"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_joinplus-3a4cec.svg" alt="" /></Link>
            </div>

            <div className="flex p-4 shadow-sm  rounded-xl bg-blue-50 w-1xl h-[40px] items-center justify-around  gap-4">
             <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title fill="none">Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
             <input className="w-2xl h-[44px] outline-none" type="text" placeholder="Search for Products" /></div>


            <div><Link to="/products">All Products</Link></div>
            <div><Link to="/cart">Cart</Link></div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/register">Register</Link></div>
        </nav>

    </div>
  );
};

export default Navbar;