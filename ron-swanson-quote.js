function getQuote(){
  $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(data){
    let quote = data[0];
    console.log(quote);
    $('#quote').text(quote);
  })
}
