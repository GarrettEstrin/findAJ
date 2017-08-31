console.log('js loaded');

// function that runs when you find AJ!
function foundHer(){
  console.log('You found her!');
  var child = document.getElementById("ajpng");
  child.parentNode.removeChild(child);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "true" ) {
      body = document.getElementsByTagName('body')[0];
      node = document.createElement('div');
      node.setAttribute('class', 'imageOfAj');
      content = document.createElement('img');
      content.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/garrettbeer/logo-large.png');
      content.setAttribute('id', 'ajpng');
      content.setAttribute('style', `position:absolute;left:${getRandomPosition()}%;top:${getRandomPosition()}%;height:10px;width:10px;background-color:red;`)
      node.appendChild(content);
      body.appendChild(node);
      document.getElementById('ajpng').addEventListener('click', function(){
        foundHer()
        chrome.runtime.sendMessage({foundHer: "true"});
      })
    }
  }
);

// function to get random number between 1 and 100

function getRandomPosition(){
  return Math.floor(Math.random() * 100) + 1 
}




