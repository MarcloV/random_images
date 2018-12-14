
var randomText =["My tears are like the quiet drift","Of petals from some magic rose;","And all my grief flows from the rift","Of unremembered skies and snows.","I think, that if I touched the earth,"]

var randomImg= ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]

function display(){
  var rText=Math.floor(Math.random()*(randomText.length));
  var rImg =Math.floor(Math.random()*(randomImg.length));

  document.getElementById("text").innerHTML=randomText[rText];
  document.getElementById("img").innerHTML="<img src='images/" + randomImg[rImg] + "'>"
}
