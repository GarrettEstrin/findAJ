// console.log('js loaded');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "sent_url" ) {
      console.log(message)
    }
  }
);

