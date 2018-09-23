chrome.runtime.onStartup.addListener(function() {
    chrome.windows.create({
        url: 'chrome-extension://ophjlpahpchlmihnnnihgmmeilfjmjjc/index.html',
        type: 'popup'
    });
    chrome.windows.create({
        url: 'https://messages.android.com',
        type: 'popup'
    });


});
