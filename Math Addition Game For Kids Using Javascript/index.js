let num1 = Math.floor(Math.random()*10)+1;
let num2 = Math.floor(Math.random()*10)+1;
document.getElementById('v1').value = num1;
document.getElementById('v2').value = num2;
let ans = num1 + num2;
const jsGame = ()=> {
    let userAnswer = document.getElementById('answer').value;
    if (userAnswer==ans){
    alert("Well Done. Your answer is correct")
}
else{
    alert("Correct answer is "+ ans+ ". Try Again.");
}
document.getElementById('answer').value= "";
 num1 = Math.floor(Math.random()*10)+1;
 num2 = Math.floor(Math.random()*10)+1;
document.getElementById('v1').value = num1;
document.getElementById('v2').value = num2;
 ans = num1 + num2;
}