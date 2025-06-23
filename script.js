// Ambil elemen DOM
const cityInput = document.getElementById("city");
const weatherButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const iconDisplay = document.getElementById("icon");
const API_KEY = '2d683f4bb07c0f703c4ee2bd3425a519';

// Fungsi untuk mengambil data cuaca
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) throw new Error("Kota tidak ditemukan!");

        const data = await response.json();

        // Update DOM dengan data cuaca
        locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
        temperatureDisplay.textContent = `Suhi: ${data.main.temp}°C`;
        descriptionDisplay.textContent = `Kondisi: ${data.weather[0].description}`;
        iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherDisplay.classList.remove("hidden");
    } catch (error) {
        alert(error.message);
    }
}

// Tambahkan event listener pada tombol
weatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Harap masukkan nama kota!");
    }
});
