// Challenges
// - Retrieving google search results - google API didn't work out
// - Infinite loops when creating tabs
// - Retrieve links on the webpage by a common class name

// Features
// 1) Search function
// 2) Display top 3 search results
// Started using the chrome extension to make additional searches


// allow option to keep or remove the google results page

// remove all body children
// insert top three links into a single webpage
// toggle to other links
// replace bad pages


let audio = new Audio('D2.mp3');
//document.body.appendChild(audio);
audio.play();

var elements = document.getElementsByClassName('r');
var linksArray = Array.from(elements);

var actualLinksArray = linksArray.map(function(item) {
  return item.childNodes[0].attributes[0].nodeValue;
});

for(var i = 0; i < 3; i++) {
  var link = document.createElement("a");
  link.setAttribute("href", actualLinksArray[i]);
  link.setAttribute("id", "actualLink" + i);
  link.setAttribute("target", "_blank");

  document.body.appendChild(link);

  document.getElementById('actualLink' + i).click();
}

//window.close();


