import { useState } from "react";

function Order() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f7fb",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ color: "#1E3A8A" }}>
            ✓ Order Placed Successfully!
          </h1>

          <p>Thank you for your order.</p>

          <p>Your order will be delivered soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "550px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1E3A8A",
            marginBottom: "30px",
          }}
        >
          Place Your Order
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Address</label>

          <textarea
            name="address"
            placeholder="Enter your delivery address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={4}
            style={inputStyle}
          />

          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            style={inputStyle}
          />

          <label>Payment Method</label>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              marginTop: "8px",
              marginBottom: "25px",
            }}
          >
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={formData.payment === "Cash on Delivery"}
              onChange={handleChange}
            />

            <span style={{ marginLeft: "10px" }}>
              Cash on Delivery
            </span>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1E3A8A",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box" as const,
};

export default Order;