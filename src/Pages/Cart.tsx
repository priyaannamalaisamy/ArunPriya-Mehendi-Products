import { useCart } from "../Context/CardContext";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const { cart,removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ padding: "60px", gap: "50px" }}
    >
      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        cart.map((product: any, index: number) => (
          <div
            className="card shadow"
            style={{ width: "18rem",position: "relative" }}
            key={product.id}
          >

            {/* Remove X */} 
            <button onClick={() => removeFromCart(product.id)} 
            style={{
               position: "absolute",
               top: "8px", right: "8px", width: "32px", height: "32px", borderRadius: "50%", border: "none", background: "white", fontSize: "22px", fontWeight: "bold", cursor: "pointer", zIndex: 2, boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }} > × </button>

            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>

              <p>Size: {product.selectedSize}</p>

              <h5>Price: ₹{product.price}</h5>

              <button className="btn btn-success"
              onClick={()=>navigate("/Order")}>
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;