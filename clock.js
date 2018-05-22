// Avalikud muutujad
let clockContainer 
let newRandomBookmark

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
 
  newRandomBookmark = document.getElementById('bookmark')
  createBookmarksArray()

  document.getElementById('bookmark').addEventListener('click', function(){
    window.open(newRandomBookmark.innerHTML)
  })
}

//Random bookmark'ide koodiviide: https://stackoverflow.com/questions/43068431/get-a-random-url-from-chrome-bookmarks-and-load-it-in-newtab/43070791
let bookmarksArray = []
function process_bookmark(bookmarks) {
  for (let i = 0; i < bookmarks.length; i++) {
       let bookmark = bookmarks[i]
       if (bookmark.url) {
           bookmarksArray.push(bookmark.url)
       }
 
       if (bookmark.children) {
           process_bookmark(bookmark.children);
       }
   }
   randomBookmark()
 }

 function createBookmarksArray(){
 chrome.bookmarks.getTree(process_bookmark)
 }

 function randomBookmark(){
  bookmark.url = bookmarksArray[Math.floor(Math.random()*bookmarksArray.length)]
  newRandomBookmark.innerHTML = bookmark.url

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
  // file uploader lisada listi 
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

