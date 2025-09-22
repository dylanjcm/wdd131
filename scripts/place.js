const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;


// static (displayed) values for this exercise — modify to match your chosen place
const tempC = 6; // °C (static value shown on page)
const windKph = 20; // km/h (static value shown on page)


// one-line wind chill calculator for metric units (°C, km/h)
function calculateWindChill(T, v) { return Math.round(13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16)); }


window.addEventListener('DOMContentLoaded', () => {
// set static content in case HTML values change
document.getElementById('temp').textContent = tempC;
document.getElementById('wind').textContent = windKph;


// wind chill applicability: temp <= 10°C and wind > 4.8 km/h
const windchillEl = document.getElementById('windchill');
if (tempC <= 10 && windKph > 4.8) {
windchillEl.textContent = calculateWindChill(tempC, windKph) + '°C';
} else {
windchillEl.textContent = 'N/A';
}
});