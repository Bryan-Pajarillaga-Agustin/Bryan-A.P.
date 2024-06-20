
let numOfGuess = 0;
let RandomNumbers=1;
let guess1 = document.getElementById("input").value;
let boys,girls;

function start(){
    document.getElementById("stop").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("pogi").style.display = "none";
    document.getElementById("start").innerHTML = "Guess The Random Generated Number";
    result = (Math.floor(Math.random() *(RandomNumbers + 99))+1);
    console.log(result);
}
function guess(){
    if((guess1 = document.getElementById("input").value) < result)
        {
            numOfGuess += 1;
            document.getElementById("result").innerHTML = "Too Low" + " Number of Guess: " + "<b>"+numOfGuess+"</b>";
        }

        else if((guess1 = document.getElementById("input").value) > result)
        {
            numOfGuess += 1;
            document.getElementById("result").innerHTML = "Too High" + " Number of Guess: " + "<b>"+numOfGuess+"</b>";
        }

        else if((guess1 = document.getElementById("input").value) == result)
        {
            numOfGuess += 1;
            document.getElementById("result").innerHTML = "The Number Is " + '<span>'+result+'</span>';
            document.getElementById("reset").style.display = "block";
            document.getElementById("stop").style.display = "none";
            document.getElementById("start").innerHTML = "Congrast You Win!!!";
            document.getElementById("start").style.color = "yellow";
        }
        if(numOfGuess==10 && (guess1 = document.getElementById("input").value) !=result)
        {
            document.getElementById("start").innerHTML = "You Lose!";
            document.getElementById("start").style.color = "red";
            document.getElementById("reset").style.display = "block";
            document.getElementById("input").style.display = "none";
            document.getElementById("stop").style.display = "none";
            document.getElementById("result").innerHTML = "You Exceed the Number Of Guess <br> The Number is "+result ;
            
        }
        if(numOfGuess == 9)
        {
            document.getElementById("hint").style.display = "block";
        }
}

function Hint()
{
    let x,y,z,t;
    document.getElementById('HintBox').style.display = "block";
    x = (result - (Math.floor(Math.random() * (result)+1)));
    y = result - x;
    z = x**2;
    t = y**2;
    document.getElementById("hint").style.display = "none";
    document.getElementById("HintPar").innerHTML = "&radic;"+z +"+"+ "&radic;"+t;
    document.getElementById("okHint").onclick = function()
    {
        document.getElementById('HintBox').style.display = "none";
    }
}

function reset(){
    let reset = 0;
    reset++;
}

let guessEnter = window.addEventListener("keydown" ,forGuess)
let startEnter = window.addEventListener("keydown" ,forStart)
let restartEnter = window.addEventListener("keydown", forRestart)

function forStart(event){
    switch(event.key){
        case "Enter": 
        if(numOfGuess <= 9){
            start();
        }
        break;
    }
}

function forGuess(event){
    switch(event.key){
        case "Enter": 
        if(numOfGuess <= 9){
            guess();
        }
        break;
    }
}

function forRestart(event){
    switch(event.key){
        case "Enter":
            reset();
        break;
    }
}
