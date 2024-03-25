function saveTransactionAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = params.searchParams.get("docID");
    localStorage.setItem('transactionID', ID);
    window.location.href = 'transaction.html';
}