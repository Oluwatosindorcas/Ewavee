import styles from "./footer.module.css";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email: " + email);
  };
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <p>
            <span>Get Notified</span> when we share new Contents
          </p>

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            className={styles.emailInput}
          />
          <button onClick={handleSubscribe} className={styles.subscribeButton}>
            Subscribe
          </button>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <p>
          Ewave <span>copyright 2023</span>
        </p>
        <div className={styles.socialIcons}>
          <a href="your-facebook-url">
            <FaFacebook size={24} color="white" />
          </a>
          <a href="your-instagram-url">
            <FaInstagram size={24} color="white" />
          </a>
          <a href="your-linkedin-url">
            <FaLinkedin size={24} color="white" />
          </a>
          <a href="your-twitter-url">
            <FaTwitter size={24} color="white" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
