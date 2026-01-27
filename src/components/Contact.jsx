import React, { useState } from "react";

const Contact = () => {
  const [hoverImg, setHoverImg] = useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>

        {/* Profile Image */}
        <img
          src="/harshitha.jpg"
          alt="Harshitha"
          style={{
            ...styles.image,
            transform: hoverImg ? "scale(1.08)" : "scale(1)",
            boxShadow: hoverImg
              ? "0 15px 35px rgba(90,79,207,0.5)"
              : "0 8px 20px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={() => setHoverImg(true)}
          onMouseLeave={() => setHoverImg(false)}
        />

        <h1 style={styles.title}>Contact</h1>

        <div style={styles.detail}>👤 Harshitha</div>
        <div style={styles.detail}>📞 +91 98765 43210</div>
        <div style={styles.detail}>📧 harshi@email.com</div>
        <div style={styles.detail}>📍 Hyderabad, India</div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('/bg1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "Poppins, Arial, sans-serif",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(251,194,235,0.75), rgba(166,193,238,0.75), rgba(253,219,146,0.75))",
  },

  card: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.35)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "45px 55px",
    borderRadius: "30px",
    textAlign: "center",
    width: "380px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
    animation: "fadeIn 1s ease",
  },

  image: {
    width: "135px",
    height: "135px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "18px",
    border: "5px solid rgba(255,255,255,0.8)",
    transition: "all 0.35s ease",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "30px",
    background: "linear-gradient(90deg, #5a4fcf, #ff6ec7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  detail: {
    background: "rgba(255,255,255,0.55)",
    padding: "12px 18px",
    borderRadius: "14px",
    marginBottom: "15px",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#333",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
};

export default Contact;