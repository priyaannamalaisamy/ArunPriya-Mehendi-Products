import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/ChatGPT-Image-Apr-7-2026-11_28_13-AM-1024x576 (1).png";

function Banner() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F8F5E9",
        padding: "60px 80px",
        minHeight:"80vh",
        boxSizing:"border-box"
      }}>
      {/* Left Side */}
      <div style={{ width: "50%" }}>
        <h1 style={{
            fontSize: "48px",
            color: "#5A3E2B",
            marginBottom: "20px",
          }}> Authentic Henna Crafted Naturally for Your Beautiful Moments</h1>
        <p style={{
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}>
          Welcome to ArunPriya Mehendi Products.
          We provide premium quality henna powder and mehendi accessories
          for professionals and beginners.</p>

        <button style={{
            backgroundColor: "#8B5E3C",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer" }} className="btn btn-success" onClick={() => navigate("/henna-powder")}>Shop Now </button>
      </div>

      {/* Right Side */}
      <div style={{ width: "45%", textAlign: "center" }}>
        <img src={bannerImage} alt="Henna Banner"
          style={{
            width: "200%",
            maxWidth: "600px",
            height:"auto",
            borderRadius: "20px",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2)"}}/>
      </div>
    </div>
  );
}


export default Banner;