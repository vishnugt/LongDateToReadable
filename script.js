var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word.trim();
var date = new Date(word.toString());
document.getElementById("randomID").innerHTML = date.toString("MMM dd");
console.log(word)