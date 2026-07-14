import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



function Nav() {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor: "#8B5E3C", padding: "15px 0", display: "flex", justifyContent: "center",alignItems: "center",position: "relative"}}>
      <ul style={{display: "flex", gap: "40px",margin: 0,padding: 0,fontSize: "18px",fontWeight: "bold",color: "white"}}>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/")}>Home</li>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/henna-powder")}>Henna Powder</li>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/oils")}> Oils</li>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/kits")}> Kits</li>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/sheets")}>Sheets </li>
        <li style={{listStyleType:"none",cursor:"pointer"}} onClick={() => navigate("/other-products")}>Other Products</li>
      </ul>

      <div style={{ position: "absolute", right: "75px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "white",fontSize: "24px",
          }} onClick={() => navigate("/wishlist")}> <FontAwesomeIcon icon={faHeart} />
      </div>
      
      <div
       style={{ position: "absolute", right: "30px",top: "50%",transform: "translateY(-50%)", cursor: "pointer",color: "white", fontSize: "24px", }} onClick={() => navigate("/cart")}>
       <FontAwesomeIcon icon={faCartArrowDown} />
      </div>
   </div>

  );
}
      
export default Nav;