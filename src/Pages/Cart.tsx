import { useCart } from "../Context/CardContext";

function Cart() {
  const { cart } = useCart();

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
            style={{ width: "18rem" }}
            key={index}
          >
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

              <button className="btn btn-success">
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