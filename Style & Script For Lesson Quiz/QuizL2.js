const ShowSolution = document.getElementById("CheckAns2");
const ClickBack = document.getElementById("BackAns2");
const Submit = document.getElementById("SubmitBtn2");
const Main = document.getElementsByClassName("MainQuiz")[0];

let intervalInputs = setInterval(() => {
    document.getElementById("demo").value = "Hello World!";
}, 1);



function checkAns(show){
    if(show == 1){
        document.getElementById("plus").value = "+";
        document.getElementById("plus").style.backgroundColor  = "green";
        document.getElementById("minus").value = "-";
        document.getElementById("minus").style.backgroundColor  = "green";
        document.getElementById("times").value = "*";
        document.getElementById("times").style.backgroundColor  = "green";
        document.getElementById("divide").value = "/";
        document.getElementById("divide").style.backgroundColor  = "green";
        ClickBack.style.display = "block";
        Submit.style.display = "none";
        ShowSolution.style.display = "none"
    }
    if(show == 2){
        document.getElementById("MathPow").value = "Math.pow";
        document.getElementById("MathPow").style.backgroundColor  = "green";
        document.getElementById("three").value = "3";
        document.getElementById("three").style.backgroundColor  = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if((show == 3)||(show == 4)||(show == 5)||(show == 6)||(show == 7)){
        document.getElementById("true1").checked = true;
        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if(show == 8){
        document.getElementById("switch").value = "switch";
        document.getElementById("switch").style.backgroundColor = "green";

        document.getElementById("break").value = "break;";
        document.getElementById("break").style.backgroundColor = "green";

        document.getElementById("break2").value = "break;";
        document.getElementById("break2").style.backgroundColor = "green";

        document.getElementById("break3").value = "break;";
        document.getElementById("break3").style.backgroundColor = "green";

        document.getElementById("default").value = "default";
        document.getElementById("default").style.backgroundColor = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
}


function back(num){
    if(num == 1){
        document.getElementById("plus").value = "+";
        document.getElementById("plus").style.backgroundColor  = "white";
        document.getElementById("minus").value = "-";
        document.getElementById("minus").style.backgroundColor  = "white";
        document.getElementById("times").value = "*";
        document.getElementById("times").style.backgroundColor  = "white";
        document.getElementById("divide").value = "/";
        document.getElementById("divide").style.backgroundColor  = "white";
        ClickBack.style.display = "none";
        ShowSolution.style.display = "block";
    }
    if(num == 2){
        document.getElementById("MathPow").value = "math.pow";
        document.getElementById("MathPow").style.backgroundColor  = "white";
        document.getElementById("three").value = "3";
        document.getElementById("three").style.backgroundColor  = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block"
    }
    if((num == 3)||(num == 4)||(num == 5)||(num == 6)||(num == 7)){
        document.getElementById("true1").checked = false;

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block";
    }
    if(num == 8){
        document.getElementById("switch").value;
        document.getElementById("switch").style.backgroundColor = "white";
        
        document.getElementById("break").value;
        document.getElementById("break").style.backgroundColor = "white";
        
        document.getElementById("break2").value;
        document.getElementById("break2").style.backgroundColor = "white";

        document.getElementById("break3").value;
        document.getElementById("break3").style.backgroundColor = "white";

        document.getElementById("default").value;
        document.getElementById("default").style.backgroundColor = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block";
    }
}           


function submit(sub1){
    if(sub1 == 1){
        if(( document.getElementById("plus").value)=="+"){
            document.getElementById("plus").style.backgroundColor = "green";
        }
        else{
            document.getElementById("plus").style.backgroundColor = "red";
        }
        if(( document.getElementById("minus").value)=="-"){
            document.getElementById("minus").style.backgroundColor = "green";
        }
        else{
            document.getElementById("minus").style.backgroundColor = "red";
        }
        if(( document.getElementById("times").value)=="*"){
            document.getElementById("times").style.backgroundColor = "green";
        }
        else{
            document.getElementById("times").style.backgroundColor = "red";
        }
        if(( document.getElementById("divide").value)=="/"){
            document.getElementById("divide").style.backgroundColor = "green";
        }
        else{
            document.getElementById("divide").style.backgroundColor = "red";
        }
    }
    if(sub1 == 2){
        if((document.getElementById("MathPow").value)=="Math.pow"){
            document.getElementById("MathPow").style.backgroundColor = "green";
        }
        else{
            document.getElementById("MathPow").style.backgroundColor = "red";
        }
        if((document.getElementById("three").value)=="3"){
            document.getElementById("three").style.backgroundColor = "green";
        }
        else{
            document.getElementById("three").style.backgroundColor = "red";
        }
    }
    
    if((sub1 == 3)||(sub1 == 4)||(sub1 == 5)||(sub1 == 6)||(sub1 == 7)){
        if(document.getElementById("true1").checked){
            document.getElementById("check1").innerHTML = "&#9989;";
        }
        if(document.getElementById("c1").checked){
            document.getElementById("w1").style.color = "red";
        }
        if(document.getElementById("c2").checked){
            document.getElementById("w2").style.color = "red";
        }
    }
    if(sub1 == 8){
        if((document.getElementById("switch").value) == "switch"){
            document.getElementById("switch").style.backgroundColor = "green";
        }
        else{
            document.getElementById("switch").style.backgroundColor = "red";
        }

        if((document.getElementById("break").value ) == "break;"){
            document.getElementById("break").style.backgroundColor = "green";
        }
        else{
            document.getElementById("break").style.backgroundColor = "red";
        }

        if((document.getElementById("break2").value ) == "break;"){
            document.getElementById("break2").style.backgroundColor = "green";
        }
        else{
            document.getElementById("break2").style.backgroundColor = "red";
        }

        if((document.getElementById("break3").value ) == "break;"){
            document.getElementById("break3").style.backgroundColor = "green";
        }
        else{
            document.getElementById("break3").style.backgroundColor = "red";
        }

        if((document.getElementById("default").value ) == "default"){
            document.getElementById("default").style.backgroundColor = "green";
        }
        else{
            document.getElementById("default").style.backgroundColor = "red";
        }
    }
    document.getElementById("BackAns2").style.display = "none";
    document.getElementById("SubmitBtn2").style.display = "none";
    document.getElementById("CheckAns2").style.display = "block";

    ClickBack.style.display = "none";
    Submit.style.display = "none";
    ShowSolution.style.display = "block";
}



