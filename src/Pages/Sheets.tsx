import { useState } from "react";
import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import cellophane from "../assets/51GrY6RFHUL._AC_UF894,1000_QL80_.jpg";
import frozen from "../assets/71MRfkVIphL.jpg";
import micronGolden from "../assets/CYP02C-flower.webp";
import transperant from "../assets/images.jpg";
import preCut from "../assets/img_2079-scaled.jpeg";

function Sheets() {
  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  const sheets = [
    {
      id: "sheet-1",
      name: "Cellophane Sheet",
      image: cellophane,
    },
    {
      id: "sheet-2",
      name: "Frozen Sheet",
      image: frozen,
    },
    {
      id: "sheet-3",
      name: "Micron color Sheet",
      image: micronGolden,
    },
    {
      id: "sheet-4",
      name: "Transperant Sheet",
      image: transperant,
    },
    {
      id: "sheet-5",
      name: "Pre Cut Sheet",
      image: preCut,
    },
  ];

  const [quantity, setQuantity] = useState<{
    [key: string]: number;
  }>({
    "sheet-1": 1,
    "sheet-2": 1,
    "sheet-3": 1,
    "sheet-4": 1,
    "sheet-5": 1,
  });

  const pricePerSheet = 5;


  return (
    <div className="d-flex flex-wrap justify-content-center" style={{ padding: "60px", gap: "50px" }} >
      {sheets.map((sheet) => {
        const totalPrice =
          quantity[sheet.id] * pricePerSheet;

        return (
          <div
            className="card shadow"
            style={{ width: "18rem" }}
            key={sheet.id} >
            <img
              src={sheet.image}
              className="card-img-top"
              alt={sheet.name}
              style={{
                height: "250px",
                objectFit: "cover", }}/>

            <div className="card-body">
  <h5 className="card-title">
    {sheet.name}
  </h5>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      margin: "15px 0",
    }}
  >
    <button
      type="button"
      onClick={() =>
        setQuantity({
          ...quantity,
          [sheet.id]: Math.max(1, quantity[sheet.id] - 1),
        })
      }
      style={{
        width: "32px",
        height: "32px",
        border: "1px solid #ccc",
        borderRadius: "50%",
        background: "#f5f5f5",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      -
    </button>

    <span
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        minWidth: "20px",
        textAlign: "center",
      }}
    >
      {quantity[sheet.id]}
    </span>

    <button
      type="button"
      onClick={() =>
        setQuantity({
          ...quantity,
          [sheet.id]: quantity[sheet.id] + 1,
        })
      }
      style={{
        width: "32px",
        height: "32px",
        border: "1px solid #ccc",
        borderRadius: "50%",
        background: "#f5f5f5",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      +
    </button>
  </div>

  <h5 style={{ marginTop: "15px" }}>
    Price: ₹{totalPrice}
  </h5>

  <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-success">
      Buy Now
    </button>

    <button
      className="btn btn-warning"
      onClick={() =>
        addToCart({
          id: sheet.id,
          name: sheet.name,
          image: sheet.image,
          selectedSize: `${quantity[sheet.id]} Sheets`,
          price: totalPrice,
        })
      }
    >
      Add To Cart
    </button>

    <span
      style={{
        fontSize: "28px",
        cursor: "pointer",
        color: isWishlisted(sheet.id) ? "deeppink" : "gray",
      }}
      onClick={() =>
        addToWishlist({
          id: sheet.id,
          name: sheet.name,
          image: sheet.image,
          selectedSize: `${quantity[sheet.id]} Sheets`,
          price: totalPrice,
        })
      } > ♥ </span>
  </div>
</div>
</div>
        );
      })}
      </div>

);
      }

export default Sheets;
