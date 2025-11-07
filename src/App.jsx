import React from "react";
import PasswordPopup from "./PasswordPopup";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <PasswordPopup />
    </div>
  );
};

export default App;


