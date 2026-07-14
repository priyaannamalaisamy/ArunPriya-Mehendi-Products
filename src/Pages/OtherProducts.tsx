import { useState } from "react";
import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import Pin038 from "../assets/41tVe2LhSWL._AC_UF350,350_QL80_.jpg";
import Pin05 from "../assets/il_340x270.1680642667_7l76.webp";
import Pin075 from "../assets/20220108_183707.webp";
import smallTape from "../assets/1702534468870-sku-0358-0.jpeg";
import bigTape from "../assets/gsspdi14.jpg";
import stocking from "../assets/a9znt_512.webp";
import pipingBag from "../assets/disposable-piping-bag.jpg";
import clips from "../assets/food-pacaging-clip-1-500x500.webp";
import preRolledCone from "../assets/il_300x300.7066509561_d96b.webp";
import roseBalm from "../assets/images (1).jpg";
import afterCareOil from "../assets/jubgr_512.webp";
import lavenderBalm from "../assets/Lavnder_Balm_1_1200x1200.webp";
import container from "../assets/saairaa-organics-balm-container-300x300.webp";
import bowl from "../assets/MixingBowl-300x300-1.webp";
import spatula from "../assets/SAGAR-Silicone-Spatula-Heat-Resistant-BPA-Free-Non-Stick-Kitchen-Palta-for-Cooking-Baking-Multicolor-6.png";
import tapedispenser from "../assets/saairaa-organics-mini-tape-dispenser.webp";
import acrylic from "../assets/r7muq_512.avif";
import machine from "../assets/ygnqg_512.avif";


function OtherProducts() {
  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  const products = [
    {
      id: "other-1",
      name: "0.38 Size Pin",
      image: Pin038,
      price: 10,
    },
    {
      id: "other-2",
      name: "0.5 Size Pin",
      image: Pin05,
      price: 10,
    },
    {
      id: "other-3",
      name: "0.75 Size Pin",
      image: Pin075,
      price: 10,
    },
    {
      id: "other-4",
      name: "Small Tape",
      image: smallTape,
      price: 5,
    },
    {
      id: "other-5",
      name: "Big Tape",
      image: bigTape,
      price: 40,
    },
    {
      id: "other-6",
      name: "Stocking",
      image: stocking,
      price: 40,
    },
    {
      id: "other-7",
      name: "Piping Bag",
      image: pipingBag,
      price: 100,
    },
    {
      id: "other-8",
      name: "Clips",
      image: clips,
      price: 30,
    },
    {
      id: "other-9",
      name: "Pre Rolled Cone",
      image: preRolledCone,
      price: 10,
    },
    {
      id: "other-10",
      name: "After Care Balm",
      image: roseBalm,
      price: 40,
    },
    {
      id: "other-11",
      name: "After Care Oil",
      image: afterCareOil,
      price: 50,
    },
    {
      id: "other-12",
      name: "Lavender Balm",
      image: lavenderBalm,
      price: 50,
    },
    {
      id: "other-13",
      name: "Container",
      image: container,
      price: 20,
    },
    {
      id:"other-14",
      name:"Bowl",
      image:bowl,
      price:40,
    },
    {
      id:"other-14",
      name:"Spatula",
      image:spatula,
      price:40,
    },
    {
      id:"other-15",
      name:"Tape Dispenser",
      image:tapedispenser,
      price:30,
    },
    {
      id:"other-16",
      name:"Acrylic Hand",
      image:acrylic,
      price:50,
    },
    {
      id:"other-17",
      name:"Weight Machine",
      image:machine,
      price:300,
    }
  ];

  const [quantity, setQuantity] = useState<{
    [key: string]: number;
  }>({});

  const getQuantity = (id: string) => {
    return quantity[id] || 1;
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ padding: "60px", gap: "50px" }}>
      {products.map((product) => {
        const productQuantity = getQuantity(product.id);

        const totalPrice = product.price * productQuantity;

        return (
          <div
            className="card shadow"
            style={{ width: "18rem" }}
            key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "250px", objectFit: "cover"}} />

            <div className="card-body">
              <h5 className="card-title">
                {product.name}
              </h5>

              <div className="d-flex justify-content-center align-items-center gap-3 mt-3 mb-3">
             <button  className="btn btn-outline-secondary" onClick={() =>
            setQuantity({
            ...quantity,
          [product.id]: Math.max(1, productQuantity - 1),
      }) } > -</button>

  <span
    style={{
      fontSize: "18px",
      fontWeight: "bold",
      minWidth: "30px",
      textAlign: "center",
    }} > {productQuantity}</span>

  <button
    className="btn btn-outline-secondary"
    onClick={() =>
      setQuantity({
        ...quantity,
        [product.id]: productQuantity + 1,
      })
    } > + </button>
</div>



              <h5 style={{ marginTop: "15px" }}>
                Price: ₹{totalPrice}
              </h5>

              <div className="d-flex justify-content-between">
                <button className="btn btn-success">
                  Buy Now
                </button>

                <button className="btn btn-warning" onClick={() =>addToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      selectedSize: `${productQuantity} Quantity`,
                      price: totalPrice,
                    })
                  }> Add To Cart </button>

                  <button className="btn" style={{
                     fontSize: "25px",
                    color: isWishlisted(product.id)
                    ? "deeppink"
                    : "gray",
                    }} onClick={() => addToWishlist({
                     id: product.id,
                     name: product.name,
                     image: product.image,
                    selectedSize: `${productQuantity} Quantity`,
                     price: totalPrice,
                     }) }> ♥</button>
                  
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OtherProducts;