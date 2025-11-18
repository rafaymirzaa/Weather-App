/*const img = document.querySelector("#gif")
const input = document.querySelector("#search")
const button = document.querySelector("#refreshButton")
let apiKey = `vsT0t2RQSm0Uh1cdpMQFx8omVg3gZUKB`

button.addEventListener("click", getGif)


async function getGif(){

    try {

    console.log("We are waiting....")
  
    const response = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${input.value}`)
    const gifData = await response.json()
    
    console.log('The promised it made when it fetched the url has then be FULFILED ')
    img.src = gifData.data.images.original.url

    }

    catch (error){
      console.log('An ERROR was caught ' + error)
    }

} */
