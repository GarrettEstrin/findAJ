console.log('background js loaded');

chrome.tabs.query({active: true, 'currentWindow': true}, function(tabs) {
    activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "sent_url", "url": url, "localStorage": LS});
    url = "";
    params = "";
    value = "";
});
