$( document ).ready(function() {
    // Date picker Materialize
    $('.datepicker').datepicker();
    //Time Picker Materialize
    $('.timepicker').timepicker();

    var date = $(".datepicker");

    var time = $(".timepicker");

    console.log("Date: " + date);
    console.log("Time: " + time);
    

});
