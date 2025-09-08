const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;
