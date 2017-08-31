console.log('popup js loaded');
var hideBtn = document.getElementById('hideBtn');
hideBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, 'currentWindow': true}, function(tabs) {
        activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "true"});
        hideBtn.innerText = "She's Hiding!"
    });
})
// general setup
var setup = {};
// find number of times the player has found Aj
if(localStorage['numOfTimesFound']){
    setup.numOfTimesFound = parseInt(localStorage['numOfTimesFound'])
} else {
    localStorage['numOfTimesFound'] = 0;
    setup.numOfTimesFound = parseInt(localStorage['numOfTimesFound'])
}
// function to update the score
function showScore(){
    setup.numOfTimesFound = localStorage['numOfTimesFound']
    document.getElementById('score').textContent = setup.numOfTimesFound;
}
showScore();


// message listener for finding AJ
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request)        
        if(request.foundHer === "true"){
                if(request.foundHer === "true"){
                    localStorage['numOfTimesFound'] = parseInt(localStorage['numOfTimesFound']) + 1
                    showScore();
                }
        }
    }
)



