ludogame = () => {
const player1= Math.floor(Math.random()*6)+1;
const player1Dice = `dice${player1}.png`;
document.getElementById('check1').setAttribute('src',player1Dice);
    const player2= Math.floor(Math.random()*6)+1;
    const player2Dice = `dice${player2}.png`;
    document.getElementById('check2').setAttribute('src',player2Dice);
    if(player1 > player2){
        document.querySelector('h1').innerHTML= "Player1 won :)";
    }
        else if(player1<player2){
            document.querySelector('h1').innerHTML= "Player2 won :)";
}
  else{
    document.querySelector('h1').innerHTML= "Draw ";

  }
}