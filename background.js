function redirect(request) {
  const prefix = 'http://go/';
  const path = request.url.slice(prefix.length);
  console.log("redirecting to go link!");
  return { redirectUrl: 'http://192.168.1.3:8080/redirect/' + path };
}

chrome.webRequest.onBeforeRequest.addListener(redirect, { urls: ['http://ga/*']}, ['blocking']);
