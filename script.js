/*Add your JavaScript here*/
var creativeScore= 0;
var practicalScore= 0;

  var q1a1Btn= document.getElementById("q1a1");
var q1a2Btn=
  document.getElementById("q1a2");

var q2a1Btn=
document.getElementById("q2a1");
var q2a2Btn=
document.getElementById("q2a2");

var q3a1Btn=
document.getElementById("q3a1");
var q3a2Btn=
  document.getElementById("q3a2");

var result=
document.getElementById("result");

/*Question 1*/
function q1a1(){
  creativeScore++;
}
function q1a2() {
  practicalScore++;
  }

/*Question 2*/
function q2a1() {
  creativeScore++;
}
function q2a2(){
  practicalScore++;
}

/*Question 3*/
function q3a1 (){
  creativeScore++;
    showResult();
}
function q3a2 (){
  practicalScore++;
  showResult();
}
// Listen for answer on answer buttons and call function if clicked
  q1a1Btn.addEventListener("click",q1a1);
q1a2Btn.addEventListener("click",q1a2);
q2a1Btn.addEventListener("click",q2a1);
q2a2Btn.addEventListener("click",q2a2);
q3a1Btn.addEventListener("click",q3a1);
q3a2Btn.addEventListener("click",q3a2);
result.addEventListener("click",showResult);

function showResult (){
  
 if (practicalScore > creativeScore){
    document.getElementById("result").innerHTML = "You are a Practical Maker! You enjoy organization, solving problems and, creating useful things."
  }
  else if(creativeScore > practicalScore){
    document.getElementById("result").innerHTML = "You are a Creative Designer! You enjoy imagination, creativity, and expressing yourself through unique ideas."
  }
}