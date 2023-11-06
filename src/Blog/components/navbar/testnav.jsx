import React from "react";
import styles from "./testnav.module.css";
import { FaAddressCard } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";

function Testnav() {
  return (
    <div>
      <nav className={styles.nav}>
        <input id="menu" type="checkbox" />
        <label htmlFor="menu">Menu</label>
        <ul className={styles.menu}>
          <li>
            <Link href="#0">
              <span>Products</span>
              <FaAddressCard style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link href="#0">
              <span>Categories</span>
              <FaTasks style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link href="#0">
              <span>Blog</span>
              <FaUsers style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link href="#0">
              <span>Help Center</span>
              <FaEnvelopeOpenText style={{ color: "white" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Testnav;
