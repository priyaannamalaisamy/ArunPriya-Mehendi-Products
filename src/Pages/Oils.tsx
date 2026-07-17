import { useEffect, useState } from "react";
import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import oliveOil from "../assets/61VrlnM3gDL._AC_UF894,1000_QL80_.jpg";
import teaTreeOil from "../assets/fresh-tea-tree-twig-essential-oil.jpg";
import lavenderOil from "../assets/Lavender-Essential-Oil.webp";
import bridalOil from "../assets/120097723.avif";
import eucalyptusOil from "../assets/product-jpeg-250x250.webp";

type OilData = {
  id: number;
  name: string;
  image: string;
  size_id: number;
  size: string;
  price: string;
};

function Oils() {
  const [oilData, setOilData] = useState<OilData[]>([]);
  const [selectedSize, setSelectedSize] = useState<{
    [key: string]: string;
  }>({});

  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  const images: { [key: string]: string } = {
    "Olive Oil": oliveOil,
    "Tea Tree Oil": teaTreeOil,
    "Lavender Oil": lavenderOil,
    "Bridal Mehendi Oil": bridalOil,
    "Eucalyptus Oil": eucalyptusOil,
  };

  useEffect(() => {
       fetch("https://mehendi-backend-nro8.onrender.com/api/products/oils")
      .then((response) => response.json())
      .then((data) => {
        setOilData(data);

        setSelectedSize({
          "Olive Oil": "100 ml",
          "Tea Tree Oil": "100 ml",
          "Lavender Oil": "100 ml",
          "Bridal Mehendi Oil": "100 ml",
          "Eucalyptus Oil": "100 ml",
        });
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, []);

  const oils = [
    "Olive Oil",
    "Tea Tree Oil",
    "Lavender Oil",
    "Bridal Mehendi Oil",
    "Eucalyptus Oil" ];

  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ padding: "60px", gap: "50px" }}>
      {oils.map((oil) => {
        const oilProducts = oilData.filter(
          (item) => item.name === oil
        );

        const selectedProduct = oilProducts.find(
          (item) => item.size === selectedSize[oil]
        );

        return (
          <div
            className="card shadow"
            style={{ width: "18rem" }}
            key={oil}>
            <img
              src={images[oil]}
              className="card-img-top"
              alt={oil}
              style={{ height: "250px", objectFit: "cover",}} />

            <div className="card-body">
              <h5 className="card-title">{oil}</h5>

              <select
                className="form-select"
                value={selectedSize[oil] || ""}
                onChange={(e) =>
                  setSelectedSize({
                    ...selectedSize,
                    [oil]: e.target.value,
                  })
                }>
                {oilProducts.map((item) => (
                  <option
                    key={item.size_id}
                    value={item.size}>
                    {item.size}
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

                <button
                  className="btn btn-warning"
                  onClick={() => {
                    if (!selectedProduct) return;

                    addToCart({
                      id: `oil-${selectedProduct.size_id}`,
                      name: oil,
                      image: images[oil],
                      selectedSize: selectedProduct.size,
                      price: selectedProduct.price,
                    });
                  }}> Add To Cart</button>

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
        name: oil,
        image: images[oil],
        selectedSize: selectedProduct.size,
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

export default Oils;