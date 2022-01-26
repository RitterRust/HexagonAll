chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo) {
        if (changeInfo.url) {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, "url changed");
            });
        }
    }
);