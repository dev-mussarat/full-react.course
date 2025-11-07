import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react

const PasswordPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* Button to open popup */}
      <button
        onClick={() => setShowPopup(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Open Form
      </button>

      {/* Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h2 style={{ marginBottom: "15px", textAlign: "center" }}>
              Enter Password
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "6px 10px",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordPopup;
