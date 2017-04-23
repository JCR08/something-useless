function getQuote(){
  $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(data){
    let quote = data[0];
    $('#quote').text(quote);
  })
}
