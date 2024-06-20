function roll (){
  let image = document.getElementById("img")
  let num = Math.floor(Math.random()*6)+1
  image.innerHTML="<img src='"+ num +".png' />";
}
