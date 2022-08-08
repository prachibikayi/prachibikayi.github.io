console.log('new script called')
const urlParams = new URLSearchParams(location.search);
localStorage.setItem('addId', urlParams.get('addId'));
localStorage.setItem('bikStoreId', urlParams.get('bikStoreId'));
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
      // YOUR CUSTOM HOOK / FUNCTION
      console.log('I am called from pushStateHook');
      return pushState.apply(history, arguments);
    };
})(window.history);
