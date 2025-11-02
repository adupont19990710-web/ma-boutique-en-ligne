// app.js
// Ce script charge automatiquement la liste des produits depuis products.json

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("products-container");

  try {
    const response = await fetch("products.json");
    const products = await response.json();

    container.innerHTML = ""; // Vide le texte de chargement

    products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <strong>${p.price}</strong>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Erreur lors du chargement des produits.</p>";
  }
});
