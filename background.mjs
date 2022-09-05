// Utility vars
let indicator = "";
let bookmarkLocation = "";
const TABS = chrome.tabs;
const GROUPS = chrome.tabGroups;

// Initialize storage
chrome.runtime.onInstalled.addListener(() => {
  indicator = "🔁";
  bookmarkLocation = "/" + indicator;
  chrome.storage.sync.set({ indicator, bookmarkLocation });
});

(async function name(params) {
  // Read from storage
  indicator = chrome.storage.sync.get("indicator");
  bookmarkLocation = chrome.storage.sync.get("bookmarkLocation");
  [indicator, bookmarkLocation] = await Promise.all([
    indicator,
    bookmarkLocation,
  ]);
  indicator = indicator.indicator;
  bookmarkLocation = bookmarkLocation.bookmarkLocation;

  console.log(indicator, bookmarkLocation);

  Object.defineProperty(chrome, "dynamicGroups", {
    get() {
      return GROUPS.query({}).then((groups) =>
        groups.filter((group) => {
          return group.title.codePointAt(0) === indicator.codePointAt(0);
        })
      );
    },
  });

  // New tab opened
  TABS.onCreated.addListener((tab) => {
    console.log(tab);
  });

  // Updated
  TABS.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.groupId === undefined) {
      return;
    }
    console.log(tab);
  });

  // Moved into window
  TABS.onAttached.addListener((tabId, attachInfo) => {});

  // Moved within window
  TABS.onMoved.addListener((tabId, moveInfo) => {});

  // Moved out of window
  TABS.onDetached.addListener((tabId, detachInfo) => {});

  // Closed
  TABS.onRemoved.addListener((tabId, removeInfo) => {});

  function tabChangeListen(tabId, changeInfo, tab) {
    console.log(tabId, changeInfo, tab);
  }
})();
