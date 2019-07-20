//generate a random number between 19 - 120 
//generate random val for crystals 1 - 12
//initialize total score

var randNum = Math.floor((Math.random() * 120) + 19); //int value
var crystalVal = Math.floor((Math.random() * 12) + 1);  //int value 
var totalScore = 0; 


// //get a random value once you click each of the crystal buttons 
// $(".heart").on("click", function(){
//     $(".heart").val(randNum); 
//     console.log(randNum); 

// }); 
// $(".blue").on("click", function(){
//     $(".blue").val(randNum); 
//     console.log(randNum); 

// }); 
// $(".green").on("click", function(){
//     $(".green").val(randNum); 
//     console.log(randNum); 

// }); 
// $(".orange").on("click", function(){
//     $(".orange").val(randNum); 
//     console.log(randNum); 

// }); 




//function run whenever key is pressed 
document.onkeyup = function(event) {
    userClick = event.key; 


//get a random value once you click each of the crystal buttons 
$(".heart").on("click", function(){
    $(".heart").val(randNum); 
    console.log(randNum); 

}); 
$(".blue").on("click", function(){
    $(".blue").val(randNum); 
    console.log(randNum); 

}); 
$(".green").on("click", function(){
    $(".green").val(randNum); 
    console.log(randNum); 

}); 
$(".orange").on("click", function(){
    $(".orange").val(randNum); 
    console.log(randNum); 

}); 




}

//reset function to start game over
function reset(){

}
