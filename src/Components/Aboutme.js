import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          color: "#fff",
          marginRight: "auto",
          marginTop: "100px",
          width: "60%",
          background: "gray",
          padding: "20px",
        }} >
        <h1
          style={{
            fontSize: "50px",
            // textTransform: "uppercase",
            fontFamily: "Anton, sans-serif",
          }}
        >
          Sunny Singh
        </h1>
        <p style={{ textAlign: "justify", fontFamily: "Oxygen, sans-serif" }}>
          This is Sunny Singh. Focused and quick-learning software engineer
          throughout my 3-year career as a software developer for various
          projects and clients.
        </p>
      </div>
    );
  }
}

export default Aboutme;
