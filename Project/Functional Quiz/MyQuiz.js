    document.getElementsByClassName("container")[0].style.display = "block";
    function next(id)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none";
        document.getElementsByClassName("container")[id].style.display = "block";
        
    }
    document.getElementsByClassName("container").style.display = "block";
    function back(id)
    {
        document.getElementsByClassName("container")[id-1].style.display = "block";
        document.getElementsByClassName("container")[id].style.display = "none";
        
    }
    
    function submit()
    {
        let score=0;
        document.getElementsByClassName("container")[5].style.display = "block";
        document.getElementsByClassName("container")[4].style.display = "none";
        if(document.getElementById("c1").checked)
        {
            score++;
        }
        if(document.getElementById("c2").checked)
        {
            score++;  
        }
        if(document.getElementById("c3").checked)
        {
            score++;
        }
        if(document.getElementById("c4").checked)
        {
            score++;
        }
        if(document.getElementById("c5").checked)
        {
            score++;
        }
       if(score == 0)
       {
        document.getElementById("pg").style.display = "block";
        document.getElementById("pg").innerHTML = ('Stupid You Got: '+score+"<br><br>");
       }
       else if((score >= 4))
       {
        document.getElementById("pg").style.display = "block";
        document.getElementById("pg").innerHTML = ('Your a Genius My Friend You Got: '+score +"<br><br>");
       }
       else if((score <= 3)&&(score!=0))
       {
        document.getElementById("pg").style.display = "block";
        document.getElementById("pg").innerHTML = ('Nice Bro You Got: '+score+"<br><br>");
       }
       
    }
    function check()
    {
        
        document.getElementsByClassName('container')[0].style.display = "block";
        document.getElementsByClassName('container')[5].style.display = "none";
        document.getElementById('cr1').innerHTML = "&#9989;" + "&nbsp;";
        document.getElementById('cr2').innerHTML = "&#9989;" + "&nbsp;";
        document.getElementById('cr3').innerHTML = "&#9989;" + "&nbsp;";
        document.getElementById('cr4').innerHTML = "&#9989;" + "&nbsp;";
        document.getElementById('cr5').innerHTML = "&#9989;" + "&nbsp;";
        document.getElementById("x1").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x2").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x3").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x4").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x5").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x6").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x7").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x8").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x9").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("x10").innerHTML = "&#10060;" + "&nbsp;";
        document.getElementById("submit").style.display = "none";
    }
 
    
