// START OF - ON READY FUNCTION:
$(function(){

  // START OF - HIDE INDOOR AND OUTDOOR API SECTIONS:
  $("#outdoor-section").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  }); 
  $("#indoor-section").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  });// END OF - HIDE INDOOR AND OUTDOOR API SECTIONS.




// MAIN INPUT SECTION:
  // START OF - CODE FOR THE "MAIN INPUT SECTION":
  $("#submit-one").on("click", function(){
      event.preventDefault();
      $("#remove").remove();

      //GLOBAL VARIABLES:
      var dateDay = $("#date-day").val();
      var dateTime = $("#date-time").val();
      var dateCity = $("#date-city").val();
      var dateEventType = $("#date-type").val();

      console.log(dateDay);
      console.log(dateTime);
      console.log(dateCity);
      console.log(dateEventType);

      //MOMENT JS VARIABLES:
      var momentDay = moment(dateDay).format("dddd MMMM, Do" + " of " + "YYYY");
      var completeTime = dateDay +"T"+ dateTime + ":00";
      var momentTime = moment(completeTime).format("HH:mm A");

      console.log(momentDay);
      console.log(momentTime);

    // START OF - CONDITIONALS TO SHOW OR HIDE INDOOR AND OUTDOOR API SECTTIONS:
    if(dateDay !== "null" && dateTime !== "null" && dateCity !== "choose-one" && dateEventType !== "choose-one"){
      if(dateEventType === "indoor"){
        eventDivIndoors = $("#indoorApiContentDiv").empty();
        $("#main-section").animate({opacity: 0.0,}, 2000).hide();
        $("#outdoor-section").hide().animate({opacity: 0.0,}, 2000);;
        $("#indoor-section").show().animate({opacity: 100.0,}, 2000);
      }
      if(dateEventType === "outdoor"){
        eventDivOutdoors = $("#outdoorApiContentDiv").empty();
        $("#outdoor-form").get(0).reset();
        $("#main-section").animate({opacity: 0.0,}, 2000).hide();
        $("#indoor-section").hide().animate({opacity: 0.0,}, 2000);
        $("#outdoor-section").show().animate({opacity: 100.0,}, 2000);
      }
    }else{
      $("#main-section").prepend("<h3 id='remove'>Attention!<br> Complete all required fields to proceed.</h3>")
    } // END OF - CONDITIONALS TO SHOW OR HIDE INDOOR AND OUTDOOR API SECTTIONS:
  // MAIN INPUT SECTION - END.




  //INDOOR DATE SECTION:
      // START OF - INDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON:
      $("#back-to-main-page-indoor").on("click", function(){
        event.preventDefault();
        $("#main-form").get(0).reset();
        $("#main-section").show().animate({opacity: 100.0,}, 1);
        $("#indoor-section").animate({opacity: 0.0,}, 1).hide();
      });// END OF - INDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON.

      // START OF - INDOOR CLICK ON "CLEAR SEARCHES" BUTTON:
      $("#clear-searches-indoor").on("click", function(){
        event.preventDefault();
        $("#indoor-form").get(0).reset();
        eventDivIndoors = $("#indoorApiContentDiv").empty();
      });// END OF - INDOOR CLICK ON "CLEAR SEARCHES" BUTTON.

      // START OF - INDOOR SUBMIT SEARCH BUTTON:
      $("#submit-indoor").on("click", function(){
        event.preventDefault();
        eventDivIndoors = $("#indoorApiContentDiv").empty();



        // LOCAL "INDOOR API SECTION" VARIABLES:
        var movieGenre = $("#movie-genre").val();
        console.log(movieGenre);
        var actor =  $("#actor").val().trim();
        var keyword= $("#keyword").val().trim();

        var keywordtosearch = "q="+ keyword.replace(" ", "%20");
        var startyear= "-!1900%2C";
        var endyear = "2019";        
        var startnetflixrating = "-!0%2C";
        var endnetflixrating = "100";
        var startimdbrating = "-!0%2C" ;
        var endimdbrating = "10" ;
        var country= "&cl=65"; //65 is Mexico code in the catalogue
        var actortosearch = "&person:"+ actor.replace(" ", "%20");
        var initialquery= "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?";
        var movieGenreText = " ";

        // console.log("movie genre: "+movieGenre);
        // console.log(keyword);
        // console.log(movieUrl);

        // START OF - SWITCH FUNCTION TO INCLUDE TITLE OF "MOVIE GENRE":
        switch(movieGenre){
          case "-!5475":
          movieGenreText = "<h2>Comedy</h2>"
          break;

          case "-!1255":
          movieGenreText = "<h2>Drama</h2>"
          break;

          case "-!1365":
          movieGenreText = "<h2>Action</h2>"
          break;

          case "-!8711":
          movieGenreText = "<h2>Horror</h2>"
          break;
      }
      console.log(movieGenreText);
      // END OF - SWITCH FUNCTION TO INCLUDE TITLE OF "MOVIE GENRE".


        // START OF - API QUERY SETTINGS:
        var movieUrl = initialquery + keywordtosearch + actortosearch + startyear + endyear + startnetflixrating + endnetflixrating + startimdbrating + endimdbrating+ movieGenre +"-!Movie-!English-!English-!gt1-!%7Bdownloadable%7D&t=ns"+ country +"&st=adv&ob=Relevance&p=1&sa=or";
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": movieUrl,
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
            "x-rapidapi-key": "2ebcf5d486msh29d6931fbf5be12p1a81b7jsna6669150f38d"
          },
        };// END OF - API QUERY SETTINGS.
        console.log(movieUrl);
        // START OF - INDOOR API AJAX:
        $.ajax(settings).then(function (response) {
            console.log(response);
            $("#indoorApiContentDiv").prepend(movieGenreText); 
          
          var results = response.ITEMS;
          
          // START OF - INDOOR AJAX LOOP:
          for (var i = 0; i < 11; i++) {
          
            var movieTitle = results[i].title;
            var movieImage = results[i].image;
            var movieSynopsis = results[i].synopsis;
            var movieNetflixId = results[i].netflixid;

            console.log(movieTitle);
            console.log(movieImage);
            console.log(movieSynopsis);
            console.log(movieNetflixId);

            var cardMovie = $("<div class='card'></div>")
            cardMovie.append("<div><b>Title: </b>"+movieTitle+"</div>");
            cardMovie.append("<img src="+movieImage+">");
            cardMovie.append("<div><b>Synopsis: </b>"+movieSynopsis+"</div>");
            cardMovie.append("<div><button><a href='https://www.netflix.com/title/"+movieNetflixId+"'target='_blank'>Watch it now</button></div><br>");
            $("#indoorApiContentDiv").append(cardMovie);
          }// END OF - INDOOR AJAX LOOP:
        

        
        }); // END OF - INDOOR API AJAX.
    });// END OF - SUBMIT BUTTON CODE FOR "INDOOR API SECTION":
  // INDOOR DATE SECTION - END.




  // OUTDOOR DATE SECTION":
      // THESE FUNCTIONS INCLUDE TEXT OF DATE AND TIME ON H3 TITLES:
      $("#date-span").text(momentDay);
      $("#time-span").text(momentTime);

      // START OF - OUTDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON:
      $("#back-to-main-page-outdoor").on("click", function(){
        event.preventDefault();
        eventDivOutdoors = $("#outdoorApiContentDiv").empty();
        $("#main-form").get(0).reset();
        $("#main-section").show().animate({opacity: 100.0,}, 1);
        $("#outdoor-section").animate({opacity: 0.0,}, 1).hide();
      });// END OF - OUTDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON.

      // START OF - OUTDOOR CLICK ON "CLEAR SEARCHES" BUTTON:
      $("#clear-searches-outdoor").on("click", function(){
        event.preventDefault();
        eventDivOutdoors = $("#outdoorApiContentDiv").empty();
        $("#outdoor-form").get(0).reset();
      });// END OF - OUTDOOR CLICK ON "CLEAR SEARCHES" BUTTON.

      // START OF - SUBMIT BUTTON CODE FOR "OUTDOOR API SECTION":
      $("#submit-outdoor").on("click", function(){
          event.preventDefault();
          eventDivOutdoors = $("#outdoorApiContentDiv").empty();

          // LOCAL "OUTDOOR API SECTION" VARIABLES:
          var dateType = $("#date-event-type").val();
          var eventNumber = $("#event-number").val();
          var apiKey = "Akw4ynVRmARtZiOoAH163caIUDjIGWXx";
          var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="+apiKey+"&size="+eventNumber+"&marketId="+dateCity+"&segmentId="+dateType+"&startDateTime="+dateDay+"T"+dateTime+":00Z";
          var dateTypeText ="";

          console.log(typeof dateType);
          console.log(eventNumber);
          console.log(apiUrl);
           
          // START OF - SWITCH FUNCTION TO INCLUDE TITLE OF "DATE-SEARCH" TYPE:
          switch(dateType){
              case "KZFzniwnSyZfZ7v7nE":
              dateTypeText = "<h2>Sports</h2>"
              break;

              case "KZFzniwnSyZfZ7v7nJ":
              dateTypeText = "<h2>Music</h2>"
              break;

              case "KZFzniwnSyZfZ7v7na":
              dateTypeText = "<h2>Arts & Theater</h2>"
              break;
          }
          console.log(dateTypeText);
          // END OF - SWITCH FUNCTION TO INCLUDE TITLE OF "DATE-SEARCH" TYPE.

          // START OF - "OUTDOOR API SECTION" AJAX:
          $.ajax({
              url: apiUrl,
              method: "GET"
            }).then(function(response){
              $("#outdoorApiContentDiv").prepend(dateTypeText); 
            
              // START OF - LOOP TO ADD "OUTDOOR API SECTION" AJAX RESPONSES:
              for(var i = 0; i < response._embedded.events.length-1; i++){
                
                  var eventName = response._embedded.events[i].name;
                  var eventGenre = response._embedded.events[i].classifications[0].genre.name;
                  var eventDateText = response._embedded.events[i].dates.start.localDate;
                  var eventTimeText = response._embedded.events[i].dates.start.localTime;
                  var eventVenue = response._embedded.events[i]._embedded.venues[0].name;
                  var eventImage = response._embedded.events[i].images[0].url;
                  var eventURL = response._embedded.events[i].url;

                  console.log(eventName);
                  console.log(eventGenre);
                  console.log(eventDateText);
                  console.log(eventTimeText);
                  console.log(eventVenue);
                  console.log(eventImage);
                  console.log(eventURL);

                  var eventDivOutdoors = $("<div><b>Event name: </b>" + JSON.stringify(eventName) + "</div>");
                  eventDivOutdoors.append($("<div><b>Event genre: </b>" + JSON.stringify(eventGenre) + "</div>"));
                  eventDivOutdoors.append($("<div><b>Event Date: </b>" + JSON.stringify(eventDateText) + "</div>"));
                  eventDivOutdoors.append($("<div><b>Event genre: </b>" + JSON.stringify(eventTimeText) + "</div>"));
                  eventDivOutdoors.append($("<div><b>Event venue: </b>" + JSON.stringify(eventVenue) + "</div>"));
                  eventDivOutdoors.append($("<div><img src='" + eventImage + "'></div>"));
                  eventDivOutdoors.append($("<div><b>Event URL: </b><a href="+JSON.stringify(eventURL)+">" + JSON.stringify(eventURL) + "</a></div><br>"));
                  
                  $("#outdoorApiContentDiv").append(eventDivOutdoors); 

              }// END OF - LOOP TO ADD "OUTDOOR API SECTION" AJAX RESPONSES.
            });// END OF - "OUTDOOR API SECTION" AJAX.
          }); // END OF - SUBMIT BUTTON CODE FOR "OUTDOOR API SECTION"
  // OUTDOOR DATE SECTION" - END.



  });//END OF - CODE FOR THE "MAIN INPUT SECTION".
}); //END OF - ON READY FUNCTION.