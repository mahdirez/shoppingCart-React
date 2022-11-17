import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


export default function Header() {
  const {cart} = useContext(UserContext);
  return (
    <header className="bg-slate-700 text-white text-2xl flex justify-between p-10">
      <div>Shopping</div>
      <div>
        <ul className="flex gap-8">
          <li className="hover:text-yellow-400"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-400"><Link to="/signUp">SignUp</Link></li>
          <li className="hover:text-yellow-400">
            <Link to='/cart'><i className="bi bi-cart4"></i>{cart.length}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
