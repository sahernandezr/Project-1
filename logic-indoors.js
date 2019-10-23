var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=brad%20pitt-!1900%2C2019-!0%2C5-!0%2C10-!0-!Movie-!English-!English-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "2ebcf5d486msh29d6931fbf5be12p1a81b7jsna6669150f38d"
	}
}

$.ajax(settings).then(function (response) {
    console.log(response);
    $("#results-movies").text(JSON.stringify(response));
});



