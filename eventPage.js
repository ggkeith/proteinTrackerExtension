// Adding a badge to the extension

chrome.storage.onChanged.addListener(function (changes) {
  chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
});
