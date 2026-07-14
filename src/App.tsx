import { Routes, Route } from "react-router-dom";

import OtherProducts from "./Pages/OtherProducts";
import Sheets from "./Pages/Sheets";
import Kits from "./Pages/Kits";
import Oils from "./Pages/Oils";
import HennaPowder from "./Pages/HennaPowder";
import Home from "./Pages/Home";
import Cart from './Pages/Cart';

import BrandHeader from "./Components/BrandHeader";
import Nav from "./Components/Nav";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <BrandHeader />
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/henna-powder" element={<HennaPowder />} />
        <Route path="/oils" element={<Oils />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/other-products" element={<OtherProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

        
      </Routes>
    </>
  );
}

export default App;