var songLength = document.querySelectorAll(".song").length;
console.log(songLength);
for (var i=0; i<songLength; i++){
    var songPlay = document.querySelectorAll(".song")[i].addEventListener("click", playSong);
    var songPause = document.querySelectorAll(".song")[i].addEventListener("dblclick", pauseSong);
    var animation1 = document.querySelectorAll(".song")[i].addEventListener("click", playAnimation);
}
var song1 = new Audio;
song1.src= "1.mp3";
var song2 = new Audio;
song2.src= "2.mp3";
var song3 = new Audio;
song3.src= "3.mp3";
var song4 = new Audio;
song4.src= "4.mp3";
var song5 = new Audio;
song5.src= "5.mp3";
var song6 = new Audio;
song6.src= "6.mp3";
var song7 = new Audio;
song7.src= "7.mp3";
var song8 = new Audio;
song8.src= "8.mp3";
var song9 = new Audio;
song9.src= "9.mp3";

function playSong(){
    var text = this.innerHTML;

    switch(text){
        case "a":
            song1.play();
            break;
            case "b":
                song2.play();
                break;
                case "c":
                    song3.play();
                    break;
                    case "d":
                        song4.play();
                        break;
                        case "e":
                            song5.play();
                            break;
                            case "f":
                                song6.play();
                                break;
                                case "g":
                                    song7.play();
                                    break;
                                    case "h":
                                        song8.play();
                                        break;
                                        case "i":
                                            song9.play();
                                            break;
                                            default:
                                                console.log("wrong input");
                                                break;
    }
}
function pauseSong(){
    var text = this.innerHTML;

    switch(text){
        case "a":
            song1.pause();
            break;
            case "b":
                song2.pause();
                break;
                case "c":
                    song3.pause();
                    break;
                    case "d":
                        song4.pause();
                        break;
                        case "e":
                            song5.pause();
                            break;
                            case "f":
                                song6.pause();
                                break;
                                case "g":
                                    song7.pause();
                                    break;
                                    case "h":
                                        song8.pause();
                                        break;
                                        case "i":
                                            song9.pause();
                                            break;
                                            default:
                                                console.log("wrong input");
                                                break;
    }
}
function playAnimation(){
    var text = this. innerHTML;
var selectedButton = document.querySelector("."+text);
selectedButton.classList.add("anim");
setTimeout(function(){
    selectedButton.classList.remove("anim");
},2000);
}