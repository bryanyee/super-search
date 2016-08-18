
var elements = document.getElementsByClassName('r');
var linksArray = Array.from(elements);

console.log('linksArray len', linksArray.length);

var actualLinksArray = linksArray.map(function(item) {
  return item.childNodes[0].attributes[0].nodeValue;
});

console.log('actualLinksArray length', actualLinksArray.length);
console.log(actualLinksArray);


for(var i = 0; i < 3; i++) {
  var link = document.createElement("a");
  link.setAttribute("href", actualLinksArray[i]);
  link.setAttribute("id", "actualLink" + i);
  link.setAttribute("target", "_blank");

  document.body.appendChild(link);

  document.getElementById('actualLink' + i).click();
}

       