
$(document.body).on("click", "#submit-search-movies", function () {
	event.preventDefault();
// catch the type of genre

var genre = "Any";

if (document.getElementById('comedy').checked) {
	genre = "-!5475"
  }

  if (document.getElementById('drama').checked) {
	genre = "-!1255"
  }

  if (document.getElementById('action').checked) {
	genre = "-!1365";
  }

  if (document.getElementById('horror').checked) {
	genre = "-!8711";
  }

  //console.log(genre);


var initialquery= "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=";
var keyword= $("#keyword").val().trim();
var keywordtosearch = keyword.replace(" ", "%20")+"&";
console.log(keyword);
var startyear= "-!1900%2C";
var endyear = "2019";
var startnetflixrating = "-!0%2C";
var endnetflixrating = "100";
var startimdbrating = "-!0%2C" ;
var endimdbrating = "10" ;
var country= "&cl=65"; //65 is Mexico's catalogue
var actor =  $("#actor").val().trim();
var actortosearch = "person:"+ actor.replace(" ", "%20");

//after genre goes type of content Any, Movie or Series
//then audio, then subtitles, then number of imdb votes gt100 greater than 100 lt100 less than 100
//downloadable parameter left blank, it could be yes or no

var url = initialquery + keywordtosearch+actortosearch + startyear + endyear + startnetflixrating + endnetflixrating + startimdbrating + endimdbrating+ genre +"-!Movie-!English-!English-!gt100-!%7Bdownloadable%7D&t=ns"+ country +"&st=adv&ob=Relevance&p=1&sa=or";

//API REQUEST URL format
//https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q={query}-!{syear},{eyear}-!{snfrate},{enfrate}-!{simdbrate},{eimdbrate}-!{genreid}-!{vtype}-!{audio}-!{subtitle}-!{imdbvotes}-!{downloadable}&t=ns&cl={clist}&st=adv&ob={sortby}&p={page}&sa={andor}

console.log(url);



var settings = {
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "2ebcf5d486msh29d6931fbf5be12p1a81b7jsna6669150f38d"
	}
}

$.ajax(settings).then(function (response) {
    console.log(response);
	$("#results-movies").empty();
	
	var results = response.ITEMS;
	var resultsdiv = $("<div>");
	

	for (var i=0; i < results.length-1; i++) {
		console.log(results[i].title);
		//THE CARD DIV
		var cardmovie = $("<div>");
		cardmovie.addClass("card");
		//CARD'S IMAGE DIV
		var cardmovieImage = $("<div>");
		cardmovieImage.addClass("card-image");
		cardmovieImage.html("<img class='activator' src='"+results[i].image+"'>");
		//CARD'S CONTENT DIV
		var cardmovieContent = $("<div>");
		cardmovieContent.addClass("card-content");
		//CARD TITLE & LINK TO NETFLIX
		var cardmovieTitle = $("<span>");
		cardmovieTitle.addClass("card-title activator grey-text text-darken-4");
		cardmovieTitle.html(results[i].title+"<i class='material-icons right'>more_vert</i>"+"<p><a href='https://www.netflix.com/title/" + results[i].netflixid+"' target='_blank'>Watch it now</a></p>");
		//CARD REVEAL (SYNOPSIS)
		var cardmovieReveal = $("<div>");
		cardmovieReveal.addClass("card-reveal");
		var cardmovieTitleReveal = $("<span>");
		cardmovieTitleReveal.addClass("card-title activator grey-text text-darken-4");
		cardmovieTitleReveal.html(results[i].title+"<i class='material-icons right'>close</i>"+"<p>"+results[i].synopsis);

		(resultsdiv).append(cardmovie);
		(cardmovie).append(cardmovieImage);
		(cardmovie).append(cardmovieContent);
		(cardmovieContent).append(cardmovieTitle);
		(cardmovie).append(cardmovieReveal);
		(cardmovieReveal).append(cardmovieTitleReveal);

		

	}

	$("#results-movies").append(resultsdiv);

	

});



})
