import React from "react";

// Defining the props that the Card component will accept
const Card = ({ title, description, imageUrl, footerText }) => {
  return (
    <div style={styles.cardContainer}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.cardImage} />}
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{title}</h2>
        <p style={styles.cardDescription}>{description}</p>
        {footerText && <div style={styles.cardFooter}>{footerText}</div>}
      </div>
    </div>
  );
};

// Inline styles for the card component
const styles = {
  cardContainer: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    margin: "10px",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "15px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#555",
  },
  cardFooter: {
    fontSize: "12px",
    color: "#888",
    marginTop: "10px",
  },
};

export default Card;
