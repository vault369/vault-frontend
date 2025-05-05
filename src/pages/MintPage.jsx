import React from "react";

const MintPage = () => {
  const handleMintClick = async () => {
    try {
      const res = await fetch("https://vaultmvp.onrender.com/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      if (data.id) {
        window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
      } else {
        alert("Failed to create checkout session");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Mint This Track</h1>
      <p>You are about to mint a digital track for $5</p>
      <button onClick={handleMintClick} style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}>
        Proceed to Mint
      </button>
    </div>
  );
};

export default MintPage;
