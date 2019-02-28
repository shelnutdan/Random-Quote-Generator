let url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

$(window).on('load',function(){
  //let url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

  $.getJSON(url,function(data){
    //console.log(data.quoteText)
    //console.log(data.quoteAuthor)
    //console.log(data)
    $('body').css('background-color',randomRGBAColor())
    document.getElementById("text").innerHTML=data.quoteText
    document.getElementById("author").innerHTML="-"+data.quoteAuthor
  },'jsonp');
})
$(document).ready(function(){
  $('.btn-primary').on('click',function(e){
    $.getJSON(url,function(data){
      //console.log(data.quoteText)
      //console.log(data.quoteAuthor)
      //console.log(data)
      $('body').css('background-color',randomRGBAColor())
      document.getElementById("text").innerHTML=data.quoteText
      document.getElementById("author").innerHTML="-"+data.quoteAuthor
    },'jsonp');

  })
});


function randomRGBAColor(){
  let redColor=Math.floor(Math.random()*255)
  let greenColor=Math.floor(Math.random()*255)
  let blueColor=Math.floor(Math.random()*255)
  let alpha=Math.random()

  return `rgba(${redColor},${greenColor},${blueColor},${alpha})`;
}

console.log(randomRGBAColor())
