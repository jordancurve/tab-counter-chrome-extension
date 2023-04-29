document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    const tabCount = tabs.length;
    document.getElementById("tabCount").textContent = `Open tabs: ${tabCount}`;
  });
});
