import { Slide } from "react-reveal";
import "./Navbar.css";
import logo from "../Images/Logo Green 2.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Slide down>
      <nav>
        <img src={logo} alt="" />

        <ul>
          <li>Company</li>
          <NavLink to="/blog">Blog</NavLink>
          <li>Product</li>
        </ul>

        <button type="submit">Get the App</button>
      </nav>
    </Slide>
  );
}

//li tags are to have links(reminder)

//<li>Help Center</li>
