const urlParams = new URLSearchParams(location.search);
localStorage.setItem('addId', urlParams.get('addId'));
localStorage.setItem('bikStoreId', urlParams.get('bikStoreId'));
window.addEventListener('popstate', function (event) {
	// The URL changed...
  console.log('URL CHANGED')
});
