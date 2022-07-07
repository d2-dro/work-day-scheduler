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

var loadPlans = function() {
    plans = JSON.parse(localStorage.getItem("plans"));

    if (!plans) {
        plans = {
            plannedEvent: []
        };
    }
};

var savePlans = function() {
    localStorage.setItem("plans", JSON.stringify("plans"));
};



// var savePlans = function() {
//     localStorage.setItem("plans", JSON.stringify(plans));
// };

// $(.saveBtn).click(function() {

//     var plans = $("#fieldEntry").val();
//     savePlans();
// });