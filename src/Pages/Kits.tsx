import { useCart } from "../Context/CardContext";
import { useWishlist } from "../Context/WishlistContext";

import beginnerImg from "../assets/dt8ez_512.avif";
import mediumImg from "../assets/350-henna-starter-set-for-beginners-diy-organic-cone-making-kit-original-imahdx4dy3g7feue.webp";

import professional1 from "../assets/1710494175192-scaled.webp";
import professional2 from "../assets/cjoe2_512.avif";
import professional3 from "../assets/r7muq_512.avif";
import professional4 from "../assets/ygnqg_512.avif";

function Kits() {
  const { addToCart } = useCart();
  const { addToWishlist, isWishlisted } = useWishlist();

  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ padding: "60px", gap: "50px" }}
    >
      {/* Beginner Kit */}

      <div className="card shadow" style={{ width: "18rem" }}>
        <img
          src={beginnerImg}
          className="card-img-top"
          alt="Beginner Kit"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">Beginner Kit</h5>
          <h5>Price: ₹250</h5>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success">
              Buy Now
            </button>

            <button
              className="btn btn-warning"
              onClick={() =>
                addToCart({
                  id: "kit-1",
                  name: "Beginner Kit",
                  image: beginnerImg,
                  selectedSize: "Beginner",
                  price: 250,
                })
              }
            >
              Add To Cart
            </button>

            <span
              style={{
                fontSize: "28px",
                cursor: "pointer",
                color: isWishlisted("kit-1")
                  ? "deeppink"
                  : "gray",
              }}
              onClick={() =>
                addToWishlist({
                  id: "kit-1",
                  name: "Beginner Kit",
                  image: beginnerImg,
                  selectedSize: "Beginner",
                  price: 250,
                })
              }
            >
              ♥
            </span>
          </div>
        </div>
      </div>

      {/* Medium Kit */}

      <div className="card shadow" style={{ width: "18rem" }}>
        <img
          src={mediumImg}
          className="card-img-top"
          alt="Medium Kit"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">Medium Kit</h5>
          <h5>Price: ₹350</h5>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success">
              Buy Now
            </button>

            <button
              className="btn btn-warning"
              onClick={() =>
                addToCart({
                  id: "kit-2",
                  name: "Medium Kit",
                  image: mediumImg,
                  selectedSize: "Medium",
                  price: 350,
                })
              }
            >
              Add To Cart
            </button>

            <span
              style={{
                fontSize: "28px",
                cursor: "pointer",
                color: isWishlisted("kit-2")
                  ? "deeppink"
                  : "gray",
              }}
              onClick={() =>
                addToWishlist({
                  id: "kit-2",
                  name: "Medium Kit",
                  image: mediumImg,
                  selectedSize: "Medium",
                  price: 350,
                })
              }
            >
              ♥
            </span>
          </div>
        </div>
      </div>

      {/* Professional Kit */}

      <div className="card shadow" style={{ width: "18rem" }}>
        <div
          id="professionalKitCarousel"
          className="carousel slide"
          data-bs-touch="true"
        >
          <div className="carousel-inner">
            {[
              professional1,
              professional2,
              professional3,
              professional4,
            ].map((image, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt="Professional Kit"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#professionalKitCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#professionalKitCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title">Professional Kit</h5>
          <h5>Price: ₹1000</h5>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-success">
              Buy Now
            </button>

            <button
              className="btn btn-warning"
              onClick={() =>
                addToCart({
                  id: "kit-3",
                  name: "Professional Kit",
                  image: professional1,
                  selectedSize: "Professional",
                  price: 1000,
                })
              }
            >
              Add To Cart
            </button>

            <span
              style={{
                fontSize: "28px",
                cursor: "pointer",
                color: isWishlisted("kit-3")
                  ? "deeppink"
                  : "gray",
              }}
              onClick={() =>
                addToWishlist({
                  id: "kit-3",
                  name: "Professional Kit",
                  image: professional1,
                  selectedSize: "Professional",
                  price: 1000,
                })
              }
            >
              ♥
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kits;