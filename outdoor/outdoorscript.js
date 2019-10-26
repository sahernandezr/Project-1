$(function(){



    $("#submit-one").on("click", function(){
        event.preventDefault();

        // Variables:
        var dateDay = $("#date-day").val();
        var dateTime = $("#date-time").val();
        var dateCity = $("#date-city").val();
        var dateEventType = $("#date-type").val();

        console.log(dateDay);
        console.log(dateTime);
        console.log(dateCity);
        console.log(dateEventType);


        $("#submit-two").on("click", function(){
            event.preventDefault();
            eventDiv = $("#apiContentDiv").empty();

            var dateType = $("#date-event-type").val();
            var eventNumber = $("#event-number").val();
            var apiKey = "Akw4ynVRmARtZiOoAH163caIUDjIGWXx";
            var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="+apiKey+"&size="+eventNumber+"&marketId="+dateCity+"&segmentId="+dateType+"&startDateTime="+dateDay+"T"+dateTime+":00Z";

            console.log(typeof dateType);
            console.log(eventNumber);
            console.log(apiUrl);

            var dateTypeText ="";
              
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


            $.ajax({
                url: apiUrl,
                method: "GET"
              }).then(function(response){

            
                $("#apiContentDiv").prepend(dateTypeText); 

                for(var i = 0; i < response._embedded.events.length-1; i++){

                var eventName = response._embedded.events[i].name;
                console.log(eventName);

                var eventGenre = response._embedded.events[i].classifications[0].genre.name;
                console.log(eventGenre);

                var eventDateText = response._embedded.events[i].dates.start.localDate;
                console.log(eventDateText);

                var eventTimeText = response._embedded.events[i].dates.start.localTime;
                console.log(eventTimeText);

                var eventVenue = response._embedded.events[i]._embedded.venues[0].name;
                console.log(eventVenue);

                var eventImage = response._embedded.events[i].images[0].url;
                console.log(eventImage);

                var eventURL = response._embedded.events[i].url;
                console.log(eventURL);


                var eventDiv = $("<div><b>Event name: </b>" + JSON.stringify(eventName) + "</div>");
                eventDiv.append($("<div><b>Event genre: </b>" + JSON.stringify(eventGenre) + "</div>"));
                eventDiv.append($("<div><b>Event Date: </b>" + JSON.stringify(eventDateText) + "</div>"));
                eventDiv.append($("<div><b>Event genre: </b>" + JSON.stringify(eventTimeText) + "</div>"));
                eventDiv.append($("<div><b>Event venue: </b>" + JSON.stringify(eventVenue) + "</div>"));
                eventDiv.append($("<div><img src='" + eventImage + "'></div>"));
                eventDiv.append($("<div><b>Event URL: </b>" + JSON.stringify(eventURL) + "</div><br>"));
                
                $("#apiContentDiv").append(eventDiv); 



                }


              });

        
            });
        
    
    });


});






