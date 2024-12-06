import React from "react";
import logo from "./taskboard.png";

function NavBar() {
  // Define styles inside the component
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#173765",
    color: "white",
    height: "60px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
  };

  const logoStyle = {
    height: "40px",
    width: "auto",
  };

  const titleStyle = {
    marginBottom: "4px",
    fontSize: "30px",
    fontWeight: "400",
    color: "white",
    textAlign: "right",
  };

  const sloganStyle = {
    backgroundColor: "#b1eaf6",
    fontFamily: "Cursive",
    margin: "0",
    fontSize: "12px",
    fontWeight: "200",
    color: "#013a63",
    fontStyle: "italic",
    border: "none",
    padding: "0 5px",
    textAlign: "center",
    //borderRadius: "4px",
    //cursor: "pointer",
    //transition: "background-color 0.3s",
  };

  const buttonStyle = {
    backgroundColor: "#b1eaf6",
    color: "#013a63",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2b68ef",
    color: "#fff",
  };

  return (
    <div className="App" id="navbarid">
      {/* Navbar */}
      <nav style={navbarStyle}>
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" style={logoStyle} />
        </div>

        {/* Slogan */}
        <div>
          <div style={titleStyle}>TaskBoard</div>
          <div style={sloganStyle}>Plan, Track, Achieve</div>
        </div>

        {/* Button 
        <div>
          //<span className="menu-item">About</span>
          //<span className="menu-item">Contact</span>
          <span className="menu-item">
            <button
              style={buttonStyle}
              //onClick={TaskForm.handleShowForm}
              className="create-task"
              //onClick={() => alert("Button clicked!")}
              onMouseOver={(e) => (
                (e.target.style.backgroundColor =
                  buttonHoverStyle.backgroundColor),
                (e.target.style.color = buttonHoverStyle.color)
              )}
              onMouseOut={(e) => (
                (e.target.style.backgroundColor = buttonStyle.backgroundColor),
                (e.target.style.color = buttonStyle.color)
              )}
            >
              Home
            </button>

        </div>*/}
      </nav>
    </div>
  );
}

export default NavBar;
