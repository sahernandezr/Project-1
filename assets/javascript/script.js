$( document ).ready(function() {
    // Materialize Date Picker script
    $('.datepicker').datepicker();
    // Materialize Time Picker script
    $('.timepicker').timepicker();


    // Date&Time Snap
    $(".datepicker").on("change", function() {
        var date = $(".datepicker").val();
        console.log("Date: " + date);
    })

    $(".timepicker").on("change", function() {
        var time = $(".timepicker").val();
        console.log("Time: " + time);
    })
});
