$(document).ready(function() {
    
//display current day on the screen
const todayString = moment().toString(); 
$("#currentDay").append(todayString);

// color code application
var currentHour = (moment().format('HH'));
for(var i = 09; i < 18; i++){ 
    var taskBlock = $("#"+i).attr("data-id");
    var dynamicId = "#"+i;
        if (taskBlock < currentHour){
            $(dynamicId).css({'background-color' : '#F08080'})}
        else if (taskBlock === currentHour){
            $(dynamicId).css({'background-color' : '#A9A9A9'});}
        else{
            $(dynamicId).css({'background-color' : '#90EE90'});}
}

//save the task description on local storage upon clicking on save 
$(".input-group-text").on("click", function(event){
    event.preventDefault();
    var newId = $(this).attr('class');
    newId = "#"+ newId.slice(0, 3);
    var taskDescription = $(newId).val();
    localStorage.setItem(newId, JSON.stringify(taskDescription));
})


// for(var i = 09; i < 18; i++){ 

//     var storedTodos = JSON.parse(localStorage.getItem("todos"));

   
//     if (storedTodos !== null) {
//         todos = storedTodos;
//   }
// }

})
