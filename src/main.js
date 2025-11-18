const output = document.querySelector("#output");
const locationInput = document.querySelector("#location");

const apiKey = `RBFXECF5PDXH3G7BBGE3XVF98`;

function capitaliseFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

async function getWeatherData() {

  const formattedLocation = capitaliseFirstLetter(locationInput.value);

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formattedLocation}?key=${apiKey}`;

  try {
    const promisedUrl = await fetch(url);
    const fetchedData = await promisedUrl.json();

    console.log("Success", fetchedData);

    output.textContent = `
Location: ${capitaliseFirstLetter(fetchedData.address)}
Temperature: ${fetchedData.currentConditions.temp} °F
Current Weather Conditions: ${fetchedData.currentConditions.conditions}
`;
  } catch (error) {
    console.log("Error detected", error);
  }
}

locationInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});
