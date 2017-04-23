function getGiphy(){
 fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ron+swanson")
 .then(response => response.json())
 .then(object => {
 document.getElementById("randomGiph").src=object.data.image_url;
 });
}

getGiphy()

function jammGiphy(){
 fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=jeremy+jamm")
 .then(response => response.json())
 .then(object => {
 document.getElementById("jammed").src=object.data.image_url;
 });
}

jammGiphy()
