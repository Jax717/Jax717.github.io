var scores=[];
var hours=[];

var add=function(){
    var score=document.getElementById("scores").value;
    var hour=document.getElementById("hours").value;
    scores[scores.length]=parseFloat(score);
    hours[hours.length]=parseFloat(hour);
}
var display=function(){
    var html = "<h2>Scores</h2><tr><td><b>Score</b></td><td><b>hour</b></td></tr>"
    for(var i=0;i<hours.length;i++){
        html = html + "<tr><td>"+scores[i]+"</td><td>"+hours[i]+"</td></tr>";
        
    }
    document.getElementById("scores_table").innerHTML = html;
}

var calculate=function(){
    var sum = 0;
    var highest_score;
    for(var i=0;i<scores.length;i++){
        sum = sum + scores[i];
        var average = parseFloat(sum) / parseFloat(scores.length);
        if(average > 90 && average<100){
            highest_score = "A";
            
        }
        else if(average > 80 && average < 89){
            highest_score = "B";
            
        }
        else if(average > 69 && average < 79){
            highest_score = "C";
            
        }
        else if(average > 60 && average < 69){
            highest_score = "D";
            
        }
        else{
            highest_score = "F";
            
        }
    }   
    document.getElementById("results").innerHTML = "<h2>Results</h2> <p> Average score = "+average+"</p><p>GPA = with a score of "+highest_score+"</p>";   
}

window.onload=function(){
    document.getElementById("add").onclick=add;
    document.getElementById("display").onclick=display;
    document.getElementById("calculate").onclick=calculate;
}