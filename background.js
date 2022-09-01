const targetPage = 'https://www.sicoes.gob.bo/portal/contrataciones/*';
const referer = 'https://www.sicoes.gob.bo/';

function writeReferer(e) {
    e.requestHeaders.push({name: 'Referer', 'value': referer})
    return {requestHeaders: e.requestHeaders};
  }

browser.webRequest.onBeforeSendHeaders.addListener(writeReferer,
    {urls: [targetPage]},
    ["blocking", "requestHeaders"]);