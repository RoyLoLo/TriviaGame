
var questbank = [
    {
    "question": "Who's the creator of Geometry Dash:",
    "correct_answer": "Robert Topala",
    "incorrect_answers": [
    "Scott Cawthon",
    "Adam Engels",
    "Andrew Spinks"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is Solid Snake's real name:",
    "correct_answer": "David",
    "incorrect_answers": [
    "Solid Snake",
    "John",
    "Huey"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which character is from 'Slatoon':",
    "correct_answer": "Marie",
    "incorrect_answers": [
    "Cyrus",
    "Palutena",
    "Shulk"
    ]
    }];

// this is the timer section
var time = 10; //10 0seconds
var running = false;
var intervalID;
var correct = 0;
var incorrect = 0;

window.onload = function(){
    $("#start").on("click",startgame);
    $("#reset").on("click",stop);
    
    
}
function timer(){

    if (!running){
        intervalID = setInterval(decremnet, 1000);
        
        running = true;
    }}
function stop() {

        running = false;
        clearInterval(intervalID);
} 
function decremnet(){
        time--;
        var timeConverted = timeConvert(time)
        $("#timer").text(timeConverted);

}
function timeConvert(time){
        var min = Math.floor(time/60);
        var sec = time - (min*60);

        if (sec < 10)
        {sec = "0" + sec;}

        if (min === 0)
        {min = "00";}
        else if (min < 10)
        {min = "0"+min;}

        

        return min + ":" + sec;
}
function reset(){
    intervalID = 0;
    time = 10;
    running = false;
    $("#timer").text("00:10");
}
// end of timer functions
//load questions and answer choices
function qload(){
var randqnumb = Math.floor(Math.random()*3);


$("#question").text(questbank[randqnumb].question);

var randanumb = Math.floor(Math.random()*4);

if (randanumb === 0){
    $("#a1").text(questbank[randqnumb].incorrect_answers[0]);
    $("#a2").text(questbank[randqnumb].correct_answer);
    $("#a3").text(questbank[randqnumb].incorrect_answers[1]);
    $("#a4").text(questbank[randqnumb].incorrect_answers[2]);
    $("#a1").on("click", wrong);
    $("#a2").on("click", right);
    $("#a3").on("click", wrong);
    $("#a4").on("click", wrong);
}
else if (randanumb ===1){
    $("#a2").text(questbank[randqnumb].incorrect_answers[0]);
    $("#a3").text(questbank[randqnumb].correct_answer);
    $("#a4").text(questbank[randqnumb].incorrect_answers[1]);
    $("#a1").text(questbank[randqnumb].incorrect_answers[2]);
    $("#a1").on("click", wrong);
    $("#a2").on("click", wrong);
    $("#a3").on("click", right);
    $("#a4").on("click", wrong);
}
else if (randanumb ===2){
    $("#a3").text(questbank[randqnumb].incorrect_answers[0]);
    $("#a4").text(questbank[randqnumb].correct_answer);
    $("#a1").text(questbank[randqnumb].incorrect_answers[1]);
    $("#a1").text(questbank[randqnumb].incorrect_answers[2]);
    $("#a1").on("click", wrong);
    $("#a2").on("click", wrong);
    $("#a3").on("click", wrong);
    $("#a4").on("click", right);
}
else if (randanumb ===3){
    $("#a4").text(questbank[randqnumb].incorrect_answers[0]);
    $("#a1").text(questbank[randqnumb].correct_answer);
    $("#a2").text(questbank[randqnumb].incorrect_answers[1]);
    $("#a3").text(questbank[randqnumb].incorrect_answers[2]);

    $("#a1").on("click", right);
    $("#a2").on("click", wrong);
    $("#a3").on("click", wrong);
    $("#a4").on("click", wrong);
}
}
//game rules

function right(){
    stop();
    alert("You got it right");
    correct++;
    $("#correct").text(correct);
    startgame();
}

function wrong(){
    stop()
    alert("you got it wrong")
    incorrect++;
    $("#incorrect").text(incorrect);
    startgame();
    
}

function startgame(){
    if (time != 0){
    reset();
    qload();
    timer();
    }
    else if (time===0)
    {stop();
     timerunout();}
    else{}
}
