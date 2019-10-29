// START OF - ON READY FUNCTION:
$(function(){

  // START OF - HIDE INDOOR AND OUTDOOR API SECTIONS AND ABOUT:
  $("#outdoor-section").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  }); 

  $("#firebase-section").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  }); 

  $("#hide-history-outdoor").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  }); 

  $("#indoor-section").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  });

  $("#hide-about").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  });

  $("#about-div").animate({opacity: 0.0}, 1, function(){
    $(this).hide();
  });
  // END OF - HIDE INDOOR AND OUTDOOR API SECTIONS AND ABOUT.


  // START OF - INITIALIZE FIREBASE FOR OUTDOOR API:
      // WEB APP'S FIREBASE CONFIGURATION
        var firebaseConfig = {
          apiKey: "AIzaSyD_poFB4RCwt_ZhS9P8DeYKRD-E4h5TLZI",
          authDomain: "project-1-float.firebaseapp.com",
          databaseURL: "https://project-1-float.firebaseio.com",
          projectId: "project-1-float",
          storageBucket: "project-1-float.appspot.com",
          messagingSenderId: "780323326546",
          appId: "1:780323326546:web:df1b048bdeaa6c937eed8b",
          measurementId: "G-N390YHMW89"
        };

        // INITIALIZE FIREBASE:
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
  // END OF - INITIALIZE FIREBASE FOR OUTDOOR API.



  // START OF - CLICK ON "ABOUT" BUTTON:
  $("#about").on("click", function(){
    event.preventDefault();
    $("#about").hide();
    $("#hide-about").show().animate({opacity: 100.0}, 1);
    $("#about-div").show().animate({opacity: 100.0}, 1);
  });// END OF - CLICK ON "ABOUT" BUTTON.

  // START OF - CLICK ON "HIDE-ABOUT" BUTTON:
  $("#hide-about").on("click", function(){
    event.preventDefault();
    $("#hide-about").hide();
    $("#about-div").animate({opacity: 0.0}, 1).hide();
    $("#about").show().animate({opacity: 100.0}, 1);
  });// END OF - CLICK ON "HIDE-ABOUT" BUTTON.


  // START OF - VARIABLES AND FUNCTION FOR FOOTER CURRENT YEAR:
  var today = new Date();
  var year = today.getFullYear();
  $("#current-year-footer").text(year);
  // END OF - VARIABLES AND FUNCTION FOR FOOTER CURRENT YEAR.


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
        var keyword= $("#keyword").val().trim();

        var keywordtosearch = "q="+ keyword.replace(" ", "%20");
        var startyear= "-!1900%2C";
        var endyear = "2019";        
        var startnetflixrating = "-!0%2C";
        var endnetflixrating = "100";
        var startimdbrating = "-!0%2C" ;
        var endimdbrating = "10" ;
        var country= "&cl=65"; //65 is Mexico code in the catalogue
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
      var movieUrl = initialquery + keywordtosearch + startyear + endyear + startnetflixrating + endnetflixrating + startimdbrating + endimdbrating + movieGenre + "-!Movie-!English-!English-!gt100-!%7Bdownloadable%7D&t=ns" + country + "&st=adv&ob=Relevance&p=1&sa=or";

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": movieUrl,
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
          "x-rapidapi-key": "2ebcf5d486msh29d6931fbf5be12p1a81b7jsna6669150f38d"
        }
      }// END OF - API QUERY SETTINGS.
      console.log(movieUrl);

      // START OF - INDOOR API AJAX:
      $.ajax(settings).then(function (response) {
        console.log(response);
        $("#indoorApiContentDiv").empty();
        $("#indoorApiContentDiv").prepend(movieGenreText);

        var results = response.ITEMS;
        var resultsdiv = $("<div>");

        // START OF - INDOOR AJAX LOOP:
        for (var i = 0; i < results.length - 1; i++) {

          // var movieTitle = results[i].title;
          // var movieImage = results[i].image;
          // var movieSynopsis = results[i].synopsis;
          // var movieNetflixId = results[i].netflixid;

          // console.log(movieTitle);
          // console.log(movieImage);
          // console.log(movieSynopsis);
          // console.log(movieNetflixId);

          //THE CARD DIV
          var cardmovie = $("<div>");
          cardmovie.addClass("card");
          //CARD'S IMAGE DIV
          var cardmovieImage = $("<div>");
          cardmovieImage.addClass("card-image");
          cardmovieImage.html("<img class='activator' src='" + results[i].image + "'>");
          //CARD'S CONTENT DIV
          var cardmovieContent = $("<div>");
          cardmovieContent.addClass("card-content");
          //CARD TITLE & LINK TO NETFLIX
          var cardmovieTitle = $("<span>");
          cardmovieTitle.addClass("card-title activator grey-text text-darken-4");
          cardmovieTitle.html(results[i].title + "<i class='material-icons right'>more_vert</i>" + "<p><a href='https://www.netflix.com/title/" + results[i].netflixid + "' target='_blank'>Watch it now</a></p>");
          //CARD REVEAL (SYNOPSIS)
          var cardmovieReveal = $("<div>");
          cardmovieReveal.addClass("card-reveal");
          var cardmovieTitleReveal = $("<span>");
          cardmovieTitleReveal.addClass("card-title activator grey-text text-darken-4");
          cardmovieTitleReveal.html(results[i].title + "<i class='material-icons right'>close</i>" + "<p>" + results[i].synopsis);


          (resultsdiv).append(cardmovie);
          (cardmovie).append(cardmovieImage);
          (cardmovie).append(cardmovieContent);
          (cardmovieContent).append(cardmovieTitle);
          (cardmovie).append(cardmovieReveal);
          (cardmovieReveal).append(cardmovieTitleReveal);
        }// END OF - INDOOR AJAX LOOP:
        $("#indoorApiContentDiv").append(resultsdiv);
        $("#indoorApiContentDiv").append("<hr>");
      }); // END OF - INDOOR API AJAX.
    });// END OF - SUBMIT BUTTON CODE FOR "INDOOR API SECTION":
  // INDOOR DATE SECTION - END.




  // OUTDOOR DATE SECTION:
      // THESE FUNCTIONS INCLUDE TEXT OF DATE AND TIME ON H3 TITLES:
      $("#date-span").text(momentDay);
      $("#time-span").text(momentTime);

      // START OF - OUTDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON:
      $("#back-to-main-page-outdoor").on("click", function(){
        $("#main-form").get(0).reset();
        $("#main-section").show().animate({opacity: 100.0,}, 1);
        $("#outdoor-section").animate({opacity: 0.0,}, 1).hide();
        eventDivOutdoors = $("#outdoorApiContentDiv").empty();
        $("#outdoorApiContentDiv").empty();
        dateCity = $("#date-city").val();
        dateType = $("#date-event-type").val();
      });// END OF - OUTDOOR CLICK ON "BACK TO MAIN PAGE" BUTTON.

      // START OF - OUTDOOR CLICK ON "CLEAR SEARCHES" BUTTON:
      $("#clear-searches-outdoor").on("click", function(){
        event.preventDefault();
        eventDivOutdoors = $("#outdoorApiContentDiv").empty();
        $("#outdoorApiContentDiv").empty();
        $("#outdoor-form").get(0).reset();
        dateType = $("#date-event-type").val();
      });// END OF - OUTDOOR CLICK ON "CLEAR SEARCHES" BUTTON.

      // START OF - OUTDOOR CLICK ON "SHOW HISTORY" BUTTON:
      $("#show-history-outdoor").on("click", function(){
        event.preventDefault();
        $("#firebase-section").show().animate({opacity: 100.0}, 500);
        $("#hide-history-outdoor").show().animate({opacity: 100.0}, 500);
        $(this).hide();
      });// END OF - OUTDOOR CLICK ON "SHOW HISTORY" BUTTON.

      // START OF - OUTDOOR CLICK ON "HIDE HISTORY" BUTTON:
      $("#hide-history-outdoor").on("click", function(){
        event.preventDefault();
        $("#firebase-section").animate({opacity: 0.0}, 500).hide();
        $("#show-history-outdoor").show().animate({opacity: 100.0}, 500);
        $(this).hide();
      });// END OF - OUTDOOR CLICK ON "HIDE HISTORY" BUTTON.
      

      // START OF - SUBMIT BUTTON CODE FOR "OUTDOOR API SECTION":
      $("#submit-outdoor").on("click", function(){
          event.preventDefault();
          eventDivOutdoors = $("#outdoorApiContentDiv").empty();
          $("#outdoorApiContentDiv").empty();

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
            
              var resultsEventDiv = $("<div>");

              // START OF - LOOP TO ADD "OUTDOOR API SECTION" AJAX RESPONSES:
              for(var i = 0; i < response._embedded.events.length-1; i++){
                
                  var eventName = response._embedded.events[i].name;
                  var eventGenre = response._embedded.events[i].classifications[0].genre.name;
                  var eventDateText = response._embedded.events[i].dates.start.localDate;
                  var eventTimeText = response._embedded.events[i].dates.start.localTime;
                  var eventCity = response._embedded.events[i]._embedded.venues[0].city.name;
                  var eventVenue = response._embedded.events[i]._embedded.venues[0].name;
                  var eventImage = response._embedded.events[i].images[0].url;
                  var eventURL = response._embedded.events[i].url;

                  console.log(eventName);
                  console.log(eventGenre);
                  console.log(eventDateText);
                  console.log(eventTimeText);
                  console.log(eventCity);                  
                  console.log(eventVenue);
                  console.log(eventImage);
                  console.log(eventURL);

                  //THE CARD DIV
                  var cardEvent = $("<div>");
                  cardEvent.addClass("card");
                  //CARD'S IMAGE DIV
                  var cardEventImage = $("<div>");
                  cardEventImage.addClass("card-image");
                  cardEventImage.html("<img class='activator' src='" + response._embedded.events[i].images[0].url + "'>")
                  //CARD'S CONTENT DIV
                  var cardEventContent = $("<div>");
                  cardEventContent.addClass("card-content");
                  //CARD TITLE 
                  var cardEventTitle = $("<span>");
                  cardEventTitle.addClass("card-title activator grey-text text-darken-4");
                  cardEventTitle.html(response._embedded.events[i].name + "<i class='material-icons right'>more_vert</i>" + "<p><a href='"+response._embedded.events[i].url+"' target='_blank'>Go to the event</a></p>");
                 //CARD REVEAL 
                 var cardEventReveal = $("<div>");
                  cardEventReveal.addClass("card-reveal");
                  var cardEventTitleReveal = $("<span>");
                  cardEventTitleReveal.addClass("card-title activator grey-text text-darken-4");
                  cardEventTitleReveal.html(response._embedded.events[i].name+"<i class='material-icons right'>close</i>" + "<p>Genre: "+response._embedded.events[i].classifications[0].genre.name +"<p>Date: "+response._embedded.events[i].dates.start.localDate+"<p>Starting time: "+response._embedded.events[i].dates.start.localTime+"<p>Venue: "+response._embedded.events[i]._embedded.venues[0].name);

                  (resultsEventDiv).append(cardEvent);
                  (cardEvent).append(cardEventImage);
                  (cardEvent).append(cardEventContent);
                  (cardEventContent).append(cardEventTitle);
                  (cardEvent).append(cardEventReveal);
                  (cardEventReveal).append(cardEventTitleReveal);


                  // var eventDivOutdoors = $("<div><b>Event name: </b>" + JSON.stringify(eventName) + "</div>");
                  // eventDivOutdoors.append($("<div><b>Event genre: </b>" + JSON.stringify(eventGenre) + "</div>"));
                  // eventDivOutdoors.append($("<div><b>Event Date: </b>" + JSON.stringify(eventDateText) + "</div>"));
                  // eventDivOutdoors.append($("<div><b>Event genre: </b>" + JSON.stringify(eventTimeText) + "</div>"));
                  // eventDivOutdoors.append($("<div><b>Event venue: </b>" + JSON.stringify(eventVenue) + "</div>"));
                  // eventDivOutdoors.append($("<div><img src='" + eventImage + "'></div>"));
                  // eventDivOutdoors.append($("<div><b>Event URL: </b><a href="+JSON.stringify(eventURL)+">" + JSON.stringify(eventURL) + "</a></div><br>"));
                  
              // START OF - FIREBASE CODE FOR OUTDOOR API IN LOOP:
  
                  // GRAB SEARCH INPUT:
                  var eventDateFire = eventDateText;
                  var eventGenreFire = eventGenre;
                  var eventTitleFire = eventName;
                  var eventCityFire = eventCity;
                  var eventVenueFire = eventVenue;
                    
                  // LOCAL "TEMPORARY" OBJECT" FOR HOLDING DATA:
                  var newRegistry = {
                    date: eventDateFire,
                    genre: eventGenreFire,
                    title: eventTitleFire,
                    city: eventCityFire,
                    venue: eventVenueFire,
                  };

                  // UPLOAD NEWREGISTRY TO DATABASE:
                  database.ref().push(newRegistry);
              // END OF - FIREBASE CODE FOR OUTDOOR API IN LOOP.

                }// END OF - LOOP TO ADD "OUTDOOR API SECTION" AJAX RESPONSES.
                

              // START OF - FIREBASE CODE EVENT:
              database.ref().on("child_added", function(childSnapshot) {
                  console.log(childSnapshot.val());
                
                  // STORE DATABASE INPUT INTO A VARIABLE
                  var eventDateFireLocal = childSnapshot.val().date;
                  var eventGenreFireLocal = childSnapshot.val().genre;
                  var eventTitleFireLocal = childSnapshot.val().title;
                  var eventCityFireLocal = childSnapshot.val().city;
                  var eventVenueFireLocal = childSnapshot.val().venue;

                  console.log(eventDateFireLocal);
                  console.log(eventGenreFireLocal);
                  console.log(eventTitleFireLocal);
                  console.log(eventCityFireLocal);
                  console.log(eventVenueFireLocal);
              
            
                  //  CREATE NEW ROW IN HTML TABLE
                  var newRow = $("<tr>").append(
                    $("<td>").text(eventDateFireLocal),
                    $("<td>").text(eventGenreFireLocal),
                    $("<td>").text(eventTitleFireLocal),
                    $("<td>").text(eventCityFireLocal),
                    $("<td>").text(eventVenueFireLocal),
                  );

                  // APPEND NEW ROW TO TABLE
                  $("#history-table-body").append(newRow);
              });// END OF - FIREBASE CODE EVENT.




              $("#outdoorApiContentDiv").append(resultsEventDiv); 
              $("#outdoorApiContentDiv").append("<hr>"); 
            });// END OF - "OUTDOOR API SECTION" AJAX.







          }); // END OF - SUBMIT BUTTON CODE FOR "OUTDOOR API SECTION"
  // OUTDOOR DATE SECTION - END.



  });//END OF - CODE FOR THE "MAIN INPUT SECTION".
}); //END OF - ON READY FUNCTION.