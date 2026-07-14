import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";

import { FaBars, FaTimes } from "react-icons/fa";

import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">

      {/* Mobile Menu Icon */}

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}

      <ul className={menuOpen ? "nav-links mobile" : "nav-links"}>
        <li onClick={() => { navigate("/"); setMenuOpen(false); }} > Home </li>
        <li onClick={() => { navigate("/henna-powder"); setMenuOpen(false); }} > Henna Powder </li>
        <li onClick={() => { navigate("/oils"); setMenuOpen(false); }} > Oils </li>
        <li onClick={() => { navigate("/kits");  setMenuOpen(false); }} > Kits</li>
        <li onClick={() => { navigate("/sheets"); setMenuOpen(false); }} >  Sheets </li>
        <li onClick={() => { navigate("/other-products"); setMenuOpen(false);  }} >  Other Products </li>
      </ul>

      {/* Right Icons */}

      <div className="nav-icons">

        {/* Wishlist */}

        <div className="icon-box" onClick={() => navigate("/wishlist")} > <FontAwesomeIcon icon={faHeart} />
             {wishlist.length > 0 && (
              <span className="badge-count"> {wishlist.length} </span> )} </div>

        {/* Cart */}

        <div className="icon-box"  onClick={() => navigate("/cart")} >
          <FontAwesomeIcon icon={faCartArrowDown} />
          {cart.length > 0 && (
            <span className="badge-count">
              {cart.length}
            </span>
          )}
        </div>

      </div>

    </div>
  );
}

export default Nav;