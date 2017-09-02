console.log("persistant.js loaded")

// message listener for finding AJ
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){       
        if(request.foundHer === "true"){
            console.log("She was found");
            setup.updateAndSaveScore();
        }
    }
)
var setup = {};
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

// run on load
setup.showScore();