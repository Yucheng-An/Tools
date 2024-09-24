chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        chrome.tabs.create({ url: dataUrl });
    });
});
