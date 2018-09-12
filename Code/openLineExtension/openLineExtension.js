chrome.runtime.onStartup.addListener(function() {
    chrome.windows.create({
        url: 'chrome-extension://ophjlpahpchlmihnnnihgmmeilfjmjjc/index.html',
        type: 'popup'
    });
});
