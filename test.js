console.log('Shopify Script Tag Works !!!!!!!!');
const urlParams = new URLSearchParams(location.search);
localStorage.setItem('addId', urlParams.get('addId'));
localStorage.setItem('bikStoreId', urlParams.get('bikStoreId'));
history.pushState(null, null, window.location.pathname);
window.addEventListener('popstate', function (event) {
	// The URL changed...
  console.log('Shopify !!!!!!!!');
});
// (function(history){
//     var pushState = history.pushState;
//     history.pushState = function(state) {
//       // YOUR CUSTOM HOOK / FUNCTION
//       console.log('I am called from pushStateHook');
//       return pushState.apply(history, arguments);
//     };
// })(window.history);
