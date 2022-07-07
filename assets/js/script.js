// $("currentDay").text(moment().format('dddd, MMMM Do'));

function timeBlockBackground() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

       if (currentHour > hour) {
        $(this).addClass("past");
       } else if (currentHour === hour) {
        $(this).addClass("present");
       } else {
            $(this).addClass("future");
        }
       
    })
};


$("#currentDay").text(moment().format('dddd, MMMM Do'));


timeBlockBackground();


