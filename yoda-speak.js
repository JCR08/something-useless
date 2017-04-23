var unirest = require('unirest');
let yodaKey = require('./api-key.js');

// function getQuote(){
//   $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(data){
//     let quote = data[0];
//     console.log(quote);
//     // console.log(quote);
//     let giphySearch = (quote.split(' '))
//     let yourQuote = quote.split(' ').join('+')
//
//     unirest.get(`https://yoda.p.mashape.com/yoda?sentence=${yourQuote}`)
//     .header("X-Mashape-Key", yodaKey)
//     .header("Accept", "text/plain")
//     .end(function (result) {
//       $('#quote').text(result.body);
//       console.log(result.body);
//       getGiphy(giphySearch)
//     });
//
//   })
// };

function getGiphy(){
 fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ron+swanson")
 .then(response => response.json())
 .then(object => {
 document.getElementById("randomGiph").src=object.data.image_url;
 });
}

getGiphy()
// let myQuote = getQuote();
// getQuote()
