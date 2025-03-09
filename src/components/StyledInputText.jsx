import React from "react";
import { InputText } from "primereact/inputtext";

const StyledInputText = ({ value, onChange, placeholder = "Chercher...", width = "150px" }) => {
    return (
        <InputText
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                backgroundColor: "rgba(8, 16, 40, 0.5)", // Fond semi-transparent
                backdropFilter: "blur(12px)", // Effet de flou
                border: "1px solid rgba(0, 194, 255, 0.5)", // Bordure bleue
                color: "#aeb9e1", // Couleur du texte
                padding: "8px", // Espacement interne
                borderRadius: "5px", // Coins arrondis
                outline: "none",
                width: width,
                transition: "border-color 0.2s ease-in-out",
            }}
            className="p-inputtext-sm"
            onFocus={(e) => (e.target.style.borderColor = "#00c2ff")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(0, 194, 255, 0.5)")}
        />
    );
};

export default StyledInputText;
