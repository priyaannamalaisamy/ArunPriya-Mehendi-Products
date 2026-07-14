import { useEffect, useState } from "react";
import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import product1 from "../assets/ChatGPT Image Jul 8, 2026, 09_13_26 PM.png";
import product2 from "../assets/Untitleddesign_36.webp";
import product3 from "../assets/714e+KMpMkL._AC_UF350,350_QL80_.jpg";

type HennaData = {
  id: number;
  filter_type: string;
  weight: string;
  price: string;
};

function HennaPowder() {
  const [hennaData, setHennaData] = useState<HennaData[]>([]);
  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  const [selectedWeight, setSelectedWeight] = useState<{
    [key: string]: string;
  }>({});

  const images: { [key: string]: string } = {
    "1 Filter": product1,
    "3 Filter": product2,
    "5 Filter": product3,
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products/henna")
      .then((response) => response.json())
      .then((data) => {
        setHennaData(data);

        setSelectedWeight({
          "1 Filter": "100 gram",
          "3 Filter": "100 gram",
          "5 Filter": "100 gram",
        });
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, []);

  const filters = ["1 Filter", "3 Filter", "5 Filter"];

  return (
    <div
      className="d-flex flex-wrap justify-content-center" style={{ padding: "60px", gap: "50px" }}>
      {filters.map((filter) => {
        const filterProducts = hennaData.filter(
          (item) => item.filter_type === filter
        );

        const selectedProduct = filterProducts.find(
          (item) => item.weight === selectedWeight[filter]
        );

        return (
          <div className="card shadow" style={{ width: "18rem" }} key={filter}>
            <img
              src={images[filter]}
              className="card-img-top"
              alt={filter}
              style={{ height: "250px", objectFit: "cover"}}/>

            <div className="card-body">
              <h5 className="card-title"> {filter} Henna Powder </h5>

              <select
                className="form-select"
                value={selectedWeight[filter] || ""}
                onChange={(e) =>
                  setSelectedWeight({
                    ...selectedWeight,
                    [filter]: e.target.value,
                  })
                } >
                {filterProducts.map((item) => (
                  <option key={item.id} value={item.weight}>
                    {item.weight}
                  </option>
                ))}
              </select>

              <h5 style={{ marginTop: "15px" }}>
                Price: ₹{selectedProduct?.price || 0}
              </h5>

              <div className="d-flex justify-content-between">
                <button className="btn btn-success">
                  Buy Now
                </button>

                <button className="btn btn-warning" onClick={() => {
                    if (!selectedProduct) return;
                    addToCart({
                    id: selectedProduct.id,
                    name: `${filter} Henna Powder`,
                    image: images[filter],
                    selectedSize: selectedProduct.weight,
                     price: selectedProduct.price, }); }}> Add To Cart</button>

                     <span style={{
      fontSize: "28px",
      cursor: "pointer",
      color: isWishlisted(selectedProduct?.id || 0)
        ? "deeppink"
        : "gray",
    }} onClick={() => {
      if (!selectedProduct) return;

      addToWishlist({
        id: selectedProduct.id,
        name: `${filter} Henna Powder`,
        image: images[filter],
        selectedSize: selectedProduct.weight,
        price: selectedProduct.price,
      });
    }} > ♥ </span>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HennaPowder;