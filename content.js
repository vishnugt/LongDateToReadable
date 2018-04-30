console.log("Ready>");

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  var selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    chrome.runtime.sendMessage(selectedText);
  }
}