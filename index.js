
let startButton = document.querySelector("#startBtn");
let resetButton = document.querySelector("#resetBtn"); 

let timeDisplay = document.querySelector("#timeDisplay");

let startTime = 0;
let elapsedTime = 0;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalID;

let paused = true;

startButton.addEventListener ( "click", () => {
    if (paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval (updateTime, 10);

        startButton.textContent = "Stop";
        startButton.style.backgroundColor = "rgb(54, 23, 23)";
        startButton.style.color =  "rgb(255, 81, 46)";
        startButton.style.boxShadow = " 0px 0px 0px 1px  rgb(54, 23, 23)";
        
    }

     else if (!paused) {

        paused = true;
        clearInterval(intervalID)
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "rgb(5, 58, 5)" ;
        startButton.style.color = "rgb(113, 198, 111)" ;
        startButton.style.boxShadow = "0px  0px 0px 1px  rgb(5, 58, 5)"  ;

     }

}  )

resetButton.addEventListener ( "click", () => {

        startButton.textContent = "Start";
        startButton.style.backgroundColor = "rgb(5, 58, 5)" ;
        startButton.style.color = "rgb(113, 198, 111)" ;
        startButton.style.boxShadow = "0px  0px 0px 1px  rgb(5, 58, 5)"  ;
       
        paused = true;
       
       clearInterval(intervalID);
        
        startTime = 0;
        elapsedTime = 0;

        miliseconds = 0;
        seconds = 0;
        minutes = 0;

        timeDisplay.textContent = "00:00,00"; 



}   )


function updateTime () {
    elapsedTime = Date.now() - startTime;
    
    miliseconds = Math.floor(elapsedTime % 100) ;
    seconds = Math.floor( (elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000*60))  %60 );

    miliseconds = zeroAdder (miliseconds);
    seconds = zeroAdder (seconds);
    minutes = zeroAdder (minutes);


    timeDisplay.textContent = `${minutes}:${seconds},${miliseconds}`

    function zeroAdder (unit) {
        unit = unit.toString();
        return unit.length < 2 ?  "0"+unit : unit;

    }

}