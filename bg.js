console.log('background js loaded');
var hideBtn = document.getElementById('hideBtn');
hideBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, 'currentWindow': true}, function(tabs) {
        activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "true"});
    });
})
// general setup
var setup = {};
// find number of times the player has found Aj
if(localStorage['numOfTimesFound']){
    setup.numOfTimesFound = localStorage['numOfTimesFound']
} else {
    localStorage['numOfTimesFound'] = 0;
    setup.numOfTimesFound = localStorage['numOfTimesFound']
}

document.getElementById('score').textContent = setup.numOfTimesFound;

// chrome.tabs.query({active: true, 'currentWindow': true}, function(tabs) {
//     activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "setup", setup});
// });


