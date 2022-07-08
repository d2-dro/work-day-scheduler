// $("currentDay").text(moment().format('dddd, MMMM Do'));

// function to determine past, present, and future events within day

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

// setting current date on document

$("#currentDay").text(moment().format('dddd, MMMM Do'));


timeBlockBackground();

// save button to add data to local storage

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

        
    })
})

$(".saveBtn").click(function() {
    $("article").append("<br>Appointment added to LocalStorage</br>");
});

// var confirmMessage = document.getElementById("confirmation");
// var extraMessage = document.textContent

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));