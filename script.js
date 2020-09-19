$(document).ready(function() {
    
//display current day on the screen
const todayString = moment().toString(); 
$("#currentDay").append(todayString);

returnStoredTasks();
// color code application
var currentHour = (moment().format('HH'));
for(var i = 09; i < 19; i++){ 
    var taskBlock = $("#"+i).attr("data-id");
    var dynamicId = "#"+i;
        if (taskBlock < currentHour){
            $(dynamicId).css({'background-color' : '#d3d3d3'})}
        else if (taskBlock === currentHour){
            $(dynamicId).css({'background-color' : '#ff6961'});}
        else{
            $(dynamicId).css({'background-color' : '#77dd77;'});}
}
//save the task description on local storage upon clicking on save 
$(".input-group-text").on("click", function(event){
    event.preventDefault();
    var newId = $(this).attr('class');
    newId = "#"+ newId.slice(0, 2).trim();
    var taskDescription = $(newId).val();
    localStorage.setItem(newId, JSON.stringify(taskDescription));
    alert("Saved")
})

// return tasks descriptions from the local storage
function returnStoredTasks(){
for(var i = 09; i < 19; i++){ 
    var storedID = "#"+i;
    var storedTask = JSON.parse(localStorage.getItem(storedID));
    if (storedTask !== null) {
        $(storedID).append(storedTask);
  }
}
}

})
