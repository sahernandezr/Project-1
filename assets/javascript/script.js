$( document ).ready(function() {

    // Global Variables

    var gOutdoor = false;

    var gIndoor = false;

    // Materialize Date Picker script
    $('.datepicker').datepicker();
    // Materialize Time Picker script
    $('.timepicker').timepicker();


    // Date&Time Snap
    $(".datepicker").on("change", function() {
        var date = $(".datepicker").val();
        console.log("Date: " + date);
    });

    $(".timepicker").on("change", function() {
        var time = $(".timepicker").val();
        console.log("Time: " + time);
    });

    // Location Snap
    $(".locs").on("change", function() {
        var locat = $(".locs").val();
        console.log("Location: " + locat);
    });


    // ----- Functions -----

    // Checkbox Function
        // Checkbox blocked if other selected
    $(".indoor").on("change", function() {

        var indoor = $(".indoor").val();
        console.log("Indoor: " + indoor);

        if ($(".outdoor").attr("disabled") === undefined) {
            $(".outdoor").attr("disabled", true);
            gOutdoor = true;
        }

        else if ($(".outdoor").attr("disabled") === "disabled") {
            $(".outdoor").removeAttr("disabled");
        }   
    });

    $(".outdoor").on("change", function() {

        var outdoor = $(".outdoor").val();
        console.log("Outdoor: " + outdoor);

        if ($(".indoor").attr("disabled") === undefined) {
            $(".indoor").attr("disabled", true);
            gIndoor = true;
        }
        
        else if ($(".indoor").attr("disabled") === "disabled") {
            $(".indoor").removeAttr("disabled");
        }   
    });

        // SubmitBtn Function
    $(".submitBtn").on("click", function (){
        // Clear Content below 1st banner
        $(".contnt").empty();
        // Image banner1 swap
        if (gIndoor === false) {
            $(".banner1").attr("src","assets/images/netflix.jpg");
        }

        else {
            $(".banner1").attr("src","assets/images/couple.jpg");
        }

        var newDiv = $("<div>");
        newDiv.attr("class","row card-holder-row");
        $(".contnt").append(newDiv);
        

    });




});
