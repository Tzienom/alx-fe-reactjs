import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
      >
        Contact
      </Link>
    </nav>
  );
}
