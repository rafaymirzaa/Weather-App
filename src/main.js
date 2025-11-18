import "./style.css"

const output = document.querySelector("#output")
const locationInput = document.querySelector("#location")
const dataRows = document.querySelector("#weather-body")

const apiKey = `RBFXECF5PDXH3G7BBGE3XVF98`;

function capitaliseFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

async function getWeatherData() {

  const formattedLocation = capitaliseFirstLetter(locationInput.value);

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formattedLocation}?key=${apiKey}`;

  try {
    
    const promisedUrl = await fetch(url);  // a promise is made while the rest of the code works it is awaited until it is fetched
    const fetchedData = await promisedUrl.json(); // now the data is fetched and we convert the raw html to an object notation

    console.log("Success", fetchedData); // debug statement


    const newRow = document.createElement("tr") // dynamically create new rows 
     
    // add data 
    const locCell = document.createElement("td")
    locCell.textContent = capitaliseFirstLetter(fetchedData.address)
     
    const tempCell = document.createElement("td")
    
    tempCell.textContent = `${fetchedData.currentConditions.temp} °F`;

    const conditionCell = document.createElement("td");
    conditionCell.textContent = fetchedData.currentConditions.conditions;

    newRow.appendChild(locCell);
    newRow.appendChild(tempCell);
    newRow.appendChild(conditionCell);

    dataRows.appendChild(newRow); // append the row to tbody


  } catch (error) {
    console.log("Error detected", error);
  }
}


// this is from ai since i need to learn dynamic imports and there is no source yet will refactor this
async function setBackground() {
  const bgImageModule = await import('./assets/background.jpg');
  const bgImage = bgImageModule.default; // Webpack wraps the URL in .default

  document.body.style.backgroundImage = `url(${bgImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

setBackground(); // call it whenever you want

locationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherData();
  }
});
