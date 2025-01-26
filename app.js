const timeZones = {
    "Bhopal": "Asia/Kolkata",
    "New York": "America/New_York",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo"
};

function updateWorldClock() {
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = ''; // Reset the clock content

    for (const city in timeZones) {
        const timeZone = timeZones[city];
        const now = new Date().toLocaleString("en-US", { timeZone });
        const time = new Date(now);
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        clockElement.innerHTML += `<div><strong>${city}</strong>: ${timeString}</div>`;
    }
}

setInterval(updateWorldClock, 1000);
updateWorldClock(); // Initialize immediately
