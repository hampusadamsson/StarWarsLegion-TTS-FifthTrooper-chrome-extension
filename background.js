chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab[0], {file: "content.js"})
});

function receiveText(resultsArray){
  console.log(resultsArray[0]);

}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  var blob = new Blob([msg.content], {type: "text/plain"});
  var url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url,
    filename: "starwars.json"
  });
});