
$(document.body).on("click", "#submit-search-movies", function () {
	event.preventDefault();
// catch the type of genre

var genre = "Any";

if (document.getElementById('comedy').checked) {
	genre = "-!5475"
	
	//"1009,10256,10375,105,10778,11559,11755,1208951,1333288,1402,1747,17648,2030,2700,31694,3300,34157,3519,3996,4058,4195,43040,4426,4906,52104,52140,52847,5286,5475,5610,56174,58905,59169,61132,61330,6197,63092,63115,6548,711366,7120,72407,7539,77599,77907,78163,78655,79871,7992,852492,869,89585,9302,9434,9702,9736";
  }

  if (document.getElementById('drama').checked) {
	genre = "11,11075,11714,1208954,1255,12994,13158,2150,25955,26009,2696,2748,2757,2893,29809,3179,31901,34204,3653,3682,384,3916,3947,4282,4425,452,4961,500,5012,52148,52904,56169,5763,58677,58755,58796,59064,6206,62235,6616,6763,68699,6889,711367,71591,72354,7243,7539,75459,76507,78628,852493,89804,9299,9847,9873";
  }

  if (document.getElementById('action').checked) {
	genre = "-!1365";
	
	//"10673,10702,11804,11828,1192487,1365,1568,2125,2653,43040,43048,4344,46576,75418,76501,77232,788212,801362,852490,899,9584";
  }

  if (document.getElementById('horror').checked) {
	genre = "10695,10944,1694,42023,45028,48303,61546,75405,75804,75930,8195,83059,8711,89585";
  }

  console.log(genre);


var initialquery= "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?";
var keyword= $("#keyword").val().trim();
var keywordtosearch = "q="+ keyword.replace(" ", "%20");
console.log(keyword);
var startyear= "-!1900%2C";
var endyear = "2019";
var startnetflixrating = "-!0%2C";
var endnetflixrating = "100";
var startimdbrating = "-!0%2C" ;
var endimdbrating = "10" ;
var country= "&cl=65"; //65 is Mexico's catalogue
var actor =  $("#actor").val().trim();
var actortosearch = "&person:"+ actor.replace(" ", "%20");

//after genre goes type of content Any, Movie or Series
//then audio, then subtitles, then number of imdb votes gt100 greater than 100 lt100 less than 100
//downloadable parameter left blank, it could be yes or no

//var url = initialquery + keywordtosearch + actortosearch + startyear + endyear + startnetflixrating + endnetflixrating + startimdbrating + endimdbrating+ genre +"-!Movie-!English-!English-!gt1-!%7Bdownloadable%7D&t=ns"+ country +"&st=adv&ob=Relevance&p=1&sa=or";

var url = initialquery + keywordtosearch + actortosearch + startyear + endyear + startnetflixrating + endnetflixrating + startimdbrating + endimdbrating+ genre +"-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns"+ country +"&st=adv&ob=Relevance&p=1&sa=or";

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
	//$("#results-movies").text(JSON.stringify(response));
	
	var results = response.ITEMS;
	var resultsdiv = $("<div>");
	

	for (var i=0; i < 11; i++) {
		console.log(results[i].title);
		var cardmovie = $("<div>");
		cardmovie.addClass("card");
		cardmovie.html("Title:"+results[i].title);
		(resultsdiv).append(cardmovie);
	}

	$("#results-movies").append(resultsdiv);



});



})
