var unirest = require('unirest');
let yodaKey = require('./api-key.js');

$("#yodaButton").on('click', function(e){
  console.log("poop");
  console.log($("#quote").text());
  let thisQuote = $("#quote").text();
  console.log(thisQuote);
  let splitQuote = thisQuote.split(' ').join('+');
  console.log(splitQuote);
  $("#firstQuote1").css("display", "none");
  $("#yodaSpeak").css("display", "block");
  $('#waitMessage').text('Yoda  is  pretty  far  away  and  cell  reception  is  bad,  so  give  him  a  second  to  get  back  to  us...');

  unirest.get(`https://yoda.p.mashape.com/yoda?sentence=${splitQuote}`)
  .header("X-Mashape-Key", yodaKey)
  .header("Accept", "text/plain")
  .end(function (result) {
    $("#waitMessage").css("display", "none");
    fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=yoda")
    .then(response => response.json())
    .then(object => {
    document.getElementById("yodaGiph").src=object.data.image_url;
    });
    $('#yodaTranslation').text(result.body);
    console.log(result.body);

  });
})
