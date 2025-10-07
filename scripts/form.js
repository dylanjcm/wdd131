/* Common Footer Code */
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;

/* Page Code */
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the product select dropdown
const productSelect = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // Use id as the value
    option.textContent = `${product.name} (⭐ ${product.averagerating})`; // Show name + average rating
    productSelect.appendChild(option);
});