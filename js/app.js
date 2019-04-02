
/*Loading Animation function waiting for the page to display*/
let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("isItLoaded").style.display = "block";
}


/*URL that the application uses to pull quote*/
let url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"

/*Click functions*/
$(document).ready(function(){
  showPage()
  /* Pulls a random  quote and its author on the page and sets random background color*/
  $.getJSON(url,function(data){

      $('body').css('background-color',randomRGBAColor())
      document.getElementById("text").innerHTML=data.quoteText
      document.getElementById("author").innerHTML="-"+data.quoteAuthor
  },'jsonp');
  /*When the get quote button is clicked then a random quote and its author is generated*/
  $('.quote_button').on('click',function(e){
    $.getJSON(url,function(data){

      $('body').css('background-color',randomRGBAColor())
      document.getElementById("text").innerHTML=data.quoteText
      document.getElementById("author").innerHTML="-"+data.quoteAuthor
    },'jsonp');

  })
  /*Posts the quote and author to tweeter*/
  $('#twitter').on('click',function(){
    let myUrl='https://twitter.com/intent/tweet?text=' + document.getElementById("text").innerHTML+"-"+document.getElementById("author").innerHTML
    window.open(myUrl, '#twitter');
  })

});

/*When a random quote is generated a random color is slected to be set*/
function randomRGBAColor(){
  let redColor=Math.floor(Math.random()*255)
  let greenColor=Math.floor(Math.random()*255)
  let blueColor=Math.floor(Math.random()*255)
  let alpha=Math.random().toFixed(1)

  return `rgba(${redColor},${greenColor},${blueColor},${alpha})`;
}
