document.getElementById("screenshotBtn").addEventListener("click", () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        const img = document.createElement('img');
        img.src = dataUrl;
        document.body.appendChild(img);
    });
});
