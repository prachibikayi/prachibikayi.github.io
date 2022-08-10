const urlParams = new URLSearchParams(location.search);
const url = location.href;
const stringParts = url.split('products');
if(stringParts[1] && stringParts[1].length > 1) {
  localStorage.setItem('addId', urlParams.get('adId'));
  localStorage.setItem('storeId', urlParams.get('storeId'));
  localStorage.setItem('waId', urlParams.get('waId'));
}

var ready = (function () {
    var ready_event_fired = false;
    var ready_event_listener = function (fn) {

        // Create an idempotent version of the 'fn' function
        var idempotent_fn = function () {
            if (ready_event_fired) {
                return;
            }
            ready_event_fired = true;
            return fn();
        }

        // The DOM ready check for Internet Explorer
        var do_scroll_check = function () {
            if (ready_event_fired) {
                return;
            }

            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            try {
                document.documentElement.doScroll('left');
            } catch(e) {
                setTimeout(do_scroll_check, 1);
                return;
            }

            // Execute any waiting functions
            return idempotent_fn();
        }

        // If the browser ready event has already occured
        if (document.readyState === "complete") {
            return idempotent_fn()
        }

        // Mozilla, Opera and webkit nightlies currently support this event
        if (document.addEventListener) {

            // Use the handy event callback
            document.addEventListener("DOMContentLoaded", idempotent_fn, false);

            // A fallback to window.onload, that will always work
            window.addEventListener("load", idempotent_fn, false);

            // If IE event model is used
        } else if (document.attachEvent) {

            // ensure firing before onload; maybe late but safe also for iframes
            document.attachEvent("onreadystatechange", idempotent_fn);

            // A fallback to window.onload, that will always work
            window.attachEvent("onload", idempotent_fn);

            // If IE and not a frame: continually check to see if the document is ready
            var toplevel = false;

            try {
                toplevel = window.frameElement == null;
            } catch (e) {}

            if (document.documentElement.doScroll && toplevel) {
                return do_scroll_check();
            }
        }
    };
    return ready_event_listener;
})();

ready(function(){
    let hasThankYou = location.href.includes('thank_you');
    let hasCheckouts = location.href.includes('checkouts');
    let adId = JSON.parse(localStorage.getItem('adId'));
    let storeId = JSON.parse(localStorage.getItem('storeId'));
    let waId = JSON.parse(localStorage.getItem('waId'));
    let checkoutToken = null;
    if(hasThankYou && hasCheckouts) {
       checkoutToken = location.href.split('checkouts/')[1].split('/thank_you')[0];
    }
    console.log(addId, 'ADDID');
    if(hasThankYou && addId && storeId && waId && checkoutToken) {
        console.log('calling api');
        const data = {
           storeId : bikStoreId,
           waId: waId,
           adId: adId,
           checkoutToken: checkoutToken
        };
        const url = 'https://adfa-49-207-213-84.in.ngrok.io/bikai-d5ee5/asia-south1/ctwaAdsTrackingApiFunctions-saveShopifyCheckoutToken';
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
         })
         .then(res => res.json())
         .then((data) => console.log(data, 'DATA'));
     
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {
//           console.log(json, 'JSON');
//           localStorage.removeItem('addId');
//           localStorage.removeItem('bikStoreId');
//         })
    }
});

