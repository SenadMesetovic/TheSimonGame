// document.querySelector("h1").textContent="Pres Any Key To Start";
$("h1").text("Press Any Key To Start");

var Buttons=["blue","red","green","yellow"];
var compPlayedBtns = [];
var userPlayedBtns=[];
var level = 0;
var started = false;

// document.addEventListener("keypress",()=>{
//     if(!started){
//         level++;
//     document.querySelector("h1").textContent="Level " + level;
//     started=true;
//     // console.log(level);
//     setTimeout(()=>{nextSequence(level)},500); 
// }
// });

$(document).keypress(function(){
    if(!started){
        level++;
    $("h1").text("Level " + level);
    started=true;
    // console.log(level);
    setTimeout(()=>{nextSequence(level)},500); 
}
});

$("body").click(function(){
    if(!started){
        level++;
    $("h1").text("Level " + level);
    started=true;
    // console.log(level);
    setTimeout(()=>{nextSequence(level)},500); 
}
});

// for(let i =0; i<Buttons.length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",(event)=>{
//         userPlayedBtns.push(event.path[0].id);
//         animate(event.path[0].id);
//         playSound(event.path[0].id);
//         checkGame(event.path[0].id);
//     })
// }

$("button").click(function(){
    var choosenColor=$(this).attr("id");
    userPlayedBtns.push(choosenColor);
    animate(choosenColor);
    playSound(choosenColor);
    checkGame(choosenColor);
})

function nextSequence(lvl){
    userPlayedBtns=[];
    $("h1").text("Level " + lvl);
    var randomNumber=Math.floor(Math.random()*3);
    var currentColor=Buttons[randomNumber];
    compPlayedBtns.push(currentColor);
    animate(currentColor);
    playSound(currentColor);
}

function checkGame(currCol){

    if(started===true && compPlayedBtns[userPlayedBtns.length-1]===currCol){
               if(compPlayedBtns.length===userPlayedBtns.length){
            level++;
            setTimeout(()=>{nextSequence(level)},1000);
        }
    }else{
        $("body").addClass("red");
        setTimeout(()=>{$("body").removeClass("red");},200)
        playSound("wrong");
        startOver();
    }
}
function animate(color){
    $("#"+color).addClass("pressed");
    setTimeout(()=>{
        $("#"+color).removeClass("pressed");
    },100);
}

function playSound(color){
    var audioFile = new Audio("sounds/"+color+".mp3");
    audioFile.play();
}

function startOver(){
    level=0;
    compPlayedBtns=[];
    userPlayedBtns=[];
    $("h1").text("Game Over, Press Any Key To Start");
    started=false;
}
