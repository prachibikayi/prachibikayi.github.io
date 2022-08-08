console.log('Testing', window.onload);
const urlParams = new URLSearchParams(location.search);
localStorage.setItem('addId', urlParams.get('addId'));
localStorage.setItem('bikStoreId', urlParams.get('bikStoreId'));

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    let previousUrl = "";

     const observer = new MutationObserver(() => {
      if (window.location.href !== previousUrl) {
        console.log(`URL changed from ${previousUrl} to ${window.location.href}`);
        previousUrl = window.location.href;
        // do your thing
      }
    });
    const config = { subtree: true, childList: true };

    // start observing change
    observer.observe(document, config);
    

});

console.log(window.onload, 'ONLOAD');
(function() {
    var pushState = history.pushState;
    var replaceState = history.replaceState;

    history.pushState = function() {
        pushState.apply(history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
    };

    history.replaceState = function() {
        replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
    };

    window.addEventListener('popstate', function() {
        window.dispatchEvent(new Event('locationchange'))
    });
})();


// Usage example:

window.addEventListener('locationchange', function(){
    console.log('onlocationchange event occurred!');
})


