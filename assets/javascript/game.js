//generate a random number between 19 - 120 
//generate random val for crystals 1 - 12
//initialize total score

var randNum = Math.floor(Math.random() * 102) + 19; //int value
var totalScore = 0; 
var arr =[]; 
var wins = 0; 
var losses = 0; 
// var imageCrystal = $(".rounded"); 

console.log(randNum); 
$("#randNum").text(randNum); 

function getRand(){
    for(var i=1, t=12; i<t; i+=3){
        var crystalVal = Math.floor((Math.random() * 12) + 1); 
        arr.push(crystalVal); 

    }
}
getRand(); 


//starts the total at 0
$("#total").text(totalScore); 
//get a random value once you click each of the crystal buttons 
$(".heart").on("click", function(){
    $(".heart").val(arr[0])
    totalScore += arr[0];  
    console.log(arr[0]); 
    console.log("the total " + totalScore); 
    $("#total").text(totalScore); 
    check(totalScore); 


}); 
$(".blue").on("click", function(){
    $(".blue").val(arr[1]); 
    totalScore += arr[1];  
    console.log("the total " + totalScore); 
    $("#total").text(totalScore); 
    check(totalScore); 


}); 
$(".green").on("click", function(){
    $(".green").val(arr[2]); 
    totalScore += arr[2];  
    console.log("the total " + totalScore); 
    $("#total").text(totalScore); 
    check(totalScore); 



}); 
$(".orange").on("click", function(){
    $(".orange").val(arr[3]); 
    totalScore += arr[3];  
    console.log("the total " + totalScore); 
    $("#total").text(totalScore); 
    check(totalScore); 



});

//increment wins and losses
$("#wins").text("Wins: " + wins); 
$("#losses").text("Losses: " + losses); 

// //wins-losses
function check(total){
    if(total === randNum){
        wins++;
        $("#wins").text("Wins: " + wins); 
        alert("GOOD JOB!"); 
        reset(); 
    }else if(total >= randNum){
        losses++; 
        $("#losses").text("Losses: " + losses); 
        alert("YOU LOST /:"); 
        reset();    
    }
}
//reset function to start game over
function reset(){
    arr = [];
    getRand(); 
    randNum = Math.floor(Math.random() * 102) + 19;
    totalScore = 0;
    $("#randNum").text(randNum); //get new random value 
    $("#total").text(totalScore); 
 
}
