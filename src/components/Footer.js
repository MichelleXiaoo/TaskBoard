import React from "react";
import logo from "./taskboard2.png";

function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </div>
      <footer
        style={{
          backgroundColor: "#efefef",
          color: "#173765",
          fontSize: "12px",
          padding: "15px",
          textAlign: "center",
          marginTop: "15px",
          //borderRadius: "10px",
          lineHeight: "0.7",
          //borderTop: "1px solid #c8c4c4",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>
          <b>&copy; Michelle </b>
        </p>
        <p>
          <em>https://github.com/MichelleXiaoo</em>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
