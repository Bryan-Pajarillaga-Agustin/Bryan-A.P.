const ShowSolution = document.getElementById("CheckAns2");
const ClickBack = document.getElementById("BackAns2");
const Submit = document.getElementById("SubmitBtn2");
const Main = document.getElementsByClassName("MainQuiz")[0];



function checkAns(show){
    if(show == 1){
        document.getElementById("interactive").value = "interactive";
        document.getElementById("interactive").style.backgroundColor  = "green";
        document.getElementById("object").value = "object";
        document.getElementById("object").style.backgroundColor  = "green";
        ClickBack.style.display = "block";
        Submit.style.display = "none";
        ShowSolution.style.display = "none";
    }
    if(show == 2){
        document.getElementById("document").value = "document";
        document.getElementById("document").style.backgroundColor  = "green";
        document.getElementById("demo").value = "demo";
        document.getElementById("demo").style.backgroundColor  = "green";
        document.getElementById("green").value = "green";
        document.getElementById("green").style.backgroundColor  = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if(show == 3){
        document.getElementById("Class").value = "Class";
        document.getElementById("Class").style.backgroundColor  = "green";
        document.getElementById("zero").value = "0";
        document.getElementById("zero").style.backgroundColor  = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if(show == 4){
        document.getElementById("console").value = "console.log";
        document.getElementById("console").style.backgroundColor  = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if((show == 5)||(show == 6)||(show == 7)||(show == 8)){
        document.getElementById("true1").checked = true;
        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
    if(show == 9){
        document.getElementById("Sukuna").value = "Stand proud, your strong";
        document.getElementById("Sukuna").style.backgroundColor = "green";

        document.getElementById("Gojo").value = "Nah, I'd Win";
        document.getElementById("Gojo").style.backgroundColor = "green";

        document.getElementById("writeSukuna").value = "Sukuna";
        document.getElementById("writeSukuna").style.backgroundColor = "green";

        document.getElementById("writeGojo").value = "Gojo";
        document.getElementById("writeGojo").style.backgroundColor = "green";

        document.getElementById("BackAns2").style.display = "block";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "none"
    }
}


function back(num){
    if(num == 1){
        document.getElementById("interactive").value = "";
        document.getElementById("interactive").style.backgroundColor  = "white";
        document.getElementById("object").value = "";
        document.getElementById("object").style.backgroundColor  = "white";
        ClickBack.style.display = "none";
        ShowSolution.style.display = "block";
    }
    if(num == 2){
        document.getElementById("document").value = "";
        document.getElementById("document").style.backgroundColor  = "white";
        document.getElementById("demo").value = "";
        document.getElementById("demo").style.backgroundColor  = "white";
        document.getElementById("green").value = "";
        document.getElementById("green").style.backgroundColor  = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block"
    }
    if(num == 3){
        document.getElementById("Class").value = "";
        document.getElementById("Class").style.backgroundColor  = "white";
        document.getElementById("zero").value = "";
        document.getElementById("zero").style.backgroundColor  = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block"
    }
    if(num == 4){
        document.getElementById("console").value = "";
        document.getElementById("console").style.backgroundColor  = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block"
    }
    if((num == 5)||(num == 6)||(num == 7)||(num == 8)){
        document.getElementById("true1").checked = false;

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block";
    }
    if(num == 9){
        document.getElementById("Sukuna").value;
        document.getElementById("Sukuna").style.backgroundColor = "white";

        document.getElementById("Gojo").value;
        document.getElementById("Gojo").style.backgroundColor = "white";

        document.getElementById("writeSukuna").value;
        document.getElementById("writeSukuna").style.backgroundColor = "white";

        document.getElementById("writeGojo").value;
        document.getElementById("writeGojo").style.backgroundColor = "white";

        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block";
    }
}           


function submit(sub1){
    if(sub1 == 1){
        if((document.getElementById("object").value)=="object"){
            document.getElementById("object").style.backgroundColor = "green";
        }
        else{
            document.getElementById("object").style.backgroundColor = "red";
        }
        if((document.getElementById("interactive").value)=="interactive"){
            document.getElementById("interactive").style.backgroundColor = "green";
        }
        else{
            document.getElementById("interactive").style.backgroundColor = "red";
        }
    }
    if (sub1 == 2) {
        if((document.getElementById("document").value)=="document"){
            document.getElementById("document").style.backgroundColor = "green";
        }
        else{
            document.getElementById("document").style.backgroundColor = "red";
        }
        if((document.getElementById("demo").value)=="demo"){
            document.getElementById("demo").style.backgroundColor = "green";
        }
        else{
            document.getElementById("demo").style.backgroundColor = "red";
        }
        if((document.getElementById("green").value)=="green"){
            document.getElementById("green").style.backgroundColor = "green";
        }
        else{
            document.getElementById("green").style.backgroundColor = "red";
        }
    }
    if (sub1 == 3) {
        if((document.getElementById("Class").value)=="Class"){
            document.getElementById("Class").style.backgroundColor = "green";
        }
        else{
            document.getElementById("Class").style.backgroundColor = "red";
        }
        if((document.getElementById("zero").value)=="0"){
            document.getElementById("zero").style.backgroundColor = "green";
        }
        else{
            document.getElementById("zero").style.backgroundColor = "red";
        }
    }
    if(sub1 == 4){
        if((document.getElementById("console").value)=="console.log"){
            document.getElementById("console").style.backgroundColor = "green";
        }
        else{
            document.getElementById("console").style.backgroundColor = "red";
        }
    }
    if((sub1 == 5)||(sub1 == 6)||(sub1 == 7)||(sub1 == 8)){
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
    if(sub1 == 9){
        if((document.getElementById("Sukuna").value) == "Stand proud, your strong"){
            document.getElementById("Sukuna").style.backgroundColor = "green";
        }
        else{
            document.getElementById("Sukuna").style.backgroundColor = "red";
        }

        if((document.getElementById("Gojo").value ) == "Nah, I'd Win"){
            document.getElementById("Gojo").style.backgroundColor = "green";
        }
        else{
            document.getElementById("Gojo").style.backgroundColor = "red";
        }

        if((( document.getElementById("writeSukuna").value) == "Sukuna")||(document.getElementById("writeSukuna").value) == "Gojo"){
            document.getElementById("writeSukuna").style.backgroundColor = "green";
        }
        else{
            document.getElementById("writeSukuna").style.backgroundColor = "red";
        }

        if(((document.getElementById("writeGojo").value) == "Gojo")||(document.getElementById("writeGojo").value) == "Sukuna"){
            document.getElementById("writeGojo").style.backgroundColor = "green";
        }
        else{
            document.getElementById("writeGojo").style.backgroundColor = "red";
        }
        document.getElementById("BackAns2").style.display = "none";
        document.getElementById("SubmitBtn2").style.display = "none";
        document.getElementById("CheckAns2").style.display = "block"
        ClickBack.style.display = "none";
        Submit.style.display = "none";
        ShowSolution.style.display = "block";
    }
    
    if((sub1 == 1)||(sub1 == 2)||(sub1 == 3)||(sub1 == 4)||(sub1 == 5)||(sub1 == 6)||(sub1 == 7)||(sub1 == 8)||(sub1 == 9)){
            document.getElementById("BackAns2").style.display = "none";
            document.getElementById("SubmitBtn2").style.display = "none";
            document.getElementById("CheckAns2").style.display = "block";

            ClickBack.style.display = "none";
            Submit.style.display = "none";
            ShowSolution.style.display = "block";
        }
}


