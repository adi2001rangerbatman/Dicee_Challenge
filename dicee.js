
// dice  Player 1
var randomNumber1 = Math.floor(Math.random(1,7)*(7-1)+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+ randomNumber1+ ".png");

 // dice player 2
var randomNumber2 = Math.floor(Math.random(1,7)*(7-1)+1);
document.querySelector(".img2").setAttribute("src","./images/dice"+ randomNumber2+ ".png");

 //game control
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Winner is Player 1 &#127867;";

}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
} else{
    document.querySelector("h1").innerHTML = "Winner is Player 2 &#127867;";
}