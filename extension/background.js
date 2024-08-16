chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Received message from content script:", request);
    if (request.action === "logData") {
      // Perform the action, such as saving data or sending it to a server
      console.log("Logging data:", request.data);
    }
    sendResponse({status: "success"});
    return true; // Return true to indicate you wish to send a response asynchronously
});