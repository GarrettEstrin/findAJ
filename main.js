console.log('js loaded');

// function that runs when you find AJ!
function foundHer(){
  console.log('You found her!');
  var child = document.getElementById("ajpng");
  child.src = "https://s3-us-west-2.amazonaws.com/garrettbeer/logo-large.png";
  child.style.top = "50%";
  child.style.left = "50%";
  child.style.zIndex = 1000000;
  child.style.height = "250px";
  child.style.margin = "-125px -125px";
  setTimeout(function() {
    child.parentNode.removeChild(child);
  }, 3000);
  chrome.runtime.sendMessage({foundHer: "true"});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "true" ) {
      body = document.getElementsByTagName('body')[0];
      node = document.createElement('div');
      node.setAttribute('class', 'imageOfAj');
      content = document.createElement('img');
      content.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/garrettbeer/aj_shadow.png');
      content.setAttribute('id', 'ajpng');
      content.setAttribute('style', `position:absolute;left:${getRandomPosition()}%;top:${getRandomPosition()}%;height:30px;width:auto;`)
      node.appendChild(content);
      body.appendChild(node);
      document.getElementById('ajpng').addEventListener('click', function(){
        foundHer()
      })
    }
  }
);

// function to get random number between 1 and 100

function getRandomPosition(){
  return Math.floor(Math.random() * 100) + 1 
}




