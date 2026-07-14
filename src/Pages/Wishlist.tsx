import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CardContext";

function Wishlist() {
  const { wishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ padding: "60px", gap: "50px" }}
    >
      {wishlist.length === 0 ? (
        <h3>Your Wishlist is Empty</h3>
      ) : (
        wishlist.map((product) => (
          <div
            className="card shadow"
            style={{ width: "18rem" }}
            key={product.id}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">
              <h5 className="card-title">
                {product.name}
              </h5>

              <p>
                Size: {product.selectedSize}
              </p>

              <h5>
                Price: ₹{product.price}
              </h5>

              <div
                className="d-flex justify-content-between"
                style={{ marginTop: "20px" }}
              >
                <button className="btn btn-success">
                  Buy Now
                </button>

                <button
                  className="btn btn-warning"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      selectedSize: product.selectedSize,
                      price: product.price,
                    })
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;