var photos = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png",  "7.png", "8.png", "9.png", "10.png"];
var imgTag = document.querySelector("img");
var count = 0;
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}