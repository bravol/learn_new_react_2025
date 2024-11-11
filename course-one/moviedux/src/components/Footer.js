import "./../styles.css";

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="footer-text">
        Copyright © {currentyear} Movie Dux. All rights reserved. © 2025 New
        York Times Company. © 2025 Disney. © 2025 Universal Pictures Group, Inc.
        © 2025 Sony Pictures Entertainment Inc. © 2025 Metacritic. © 2025 IMDb.
        © 2025 Hulu. © 2025 Netflix. © 2025 HBO. © 2025 Amazon. © 2025 Apple
        Inc. © 2025 The Walt Disney Company. © 2025 Disney Channel. © 2025
        Warner Bros. Pictures. © 2025 Columbia Pictures Corporation. © 2025
      </p>
    </div>
  );
};

export default Footer;
