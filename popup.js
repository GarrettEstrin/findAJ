console.log('popup js loaded');
var hideBtn = document.getElementById('hideBtn');

// general setup
var setup = {};

// setup localStorage to save score
setup.setUpScore = function(){
    console.log("retriveScore running")
    // find number of times the player has found Aj
    if(!localStorage['score']){
        localStorage['score'] = 0;
    }
}
// function to retrive score
setup.retrieveScore = function(){
    return parseInt(localStorage['score']);
}
// function to update the score board
setup.showScore = function(){
    console.log('showScore running');
    document.getElementById('score').innerText = parseInt(localStorage['score']);
    hideBtn.innerText = "Hide AJ!"
}
// function to save score to localStorage
setup.updateAndSaveScore = function(){
    console.log('updateAndSaveScore running');
    localStorage['score'] = parseInt(localStorage['score']) + 1;
    setup.showScore();
}
// eventlistener for hide aj button
hideBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, 'currentWindow': true}, function(tabs) {
        activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "true"});
        hideBtn.innerText = "She's Hiding!"
    });
})
// message listener for finding AJ
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){       
        if(request.foundHer === "true"){
            console.log("She was found");
            setup.updateAndSaveScore();
        }
    }
)

// functions to run on start
setup.setUpScore();
setup.retrieveScore();
setup.showScore();

// functions to run when extension is opened
chrome.browserAction.onClicked.addListener(function(tab){ 
    console.log("extension was opened")
    setup.retrieveScore();
    setup.showScore();
});



