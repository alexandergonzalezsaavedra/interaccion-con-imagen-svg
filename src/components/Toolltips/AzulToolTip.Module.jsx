import React from "react";

export const AzulToolTipModule = ({ ubicacion }) => {
  return (
    <div style={{ width: "150px", top: ubicacion.x }}>
      <h3>tooltip azul</h3>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="test"
        width="100%"
      />
    </div>
  );
};
