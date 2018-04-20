// Avalikud muutujad
let clockContainer 

window.onload = function () {
  init()
  document.getElementById('bigger').addEventListener("click", changeSizeBigger)
  document.getElementById('smaller').addEventListener("click", changeSizeSmaller)
  document.getElementById('time').addEventListener("change", changeBackground)
  document.getElementById('color').addEventListener("change", changeColor)
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
 startClock()
 
}


function changeBackground(){
  if (this.value == "day"){
    document.body.style.backgroundImage = 'url("pics/kosk.jpg")';
	//document.body.style.backgroundSize = cover;
  } 
  if (this.value == "night"){
    document.body.style.backgroundImage = 'url("pics/haapsalukallas.jpg")';
	//document.body.style.backgroundSize = cover;
  }
}

function changeColor(){
    clockContainer.style.color = this.value;
}

let defaultFontSize = 70;


function changeSizeBigger(){
    defaultFontSize += 10;
    clockContainer.style.fontSize = defaultFontSize + "px";
  }
function changeSizeSmaller(){
    defaultFontSize -= 10;
    clockContainer.style.fontSize = defaultFontSize + "px";
	
  }

function addZero(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

function startClock () {
  window.setInterval(function () { 
	  let date = new Date();
      let hours= date.getHours(); 
      let minutes = date.getMinutes(); 
      let seconds = date.getSeconds(); 

      let day= date.getDate(); 
      let months = new Array("jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober"," november", "detsember");
      let month = months[date.getMonth()];

      let year = date.getFullYear();

      let weekdays = new Array("Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev");
      let weekday = weekdays[date.getDay()];

      hours = addZero(hours);
      minutes = addZero(minutes);
      seconds = addZero(seconds);
      day = addZero(day);

      clockContainer.innerHTML = hours+':'+minutes+':'+seconds+'<br>'+day+'.'+month+' '+year+'<br>'+weekday
  })
}
