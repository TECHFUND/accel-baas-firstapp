var admin_wallet = "ABb5uxz3tm";

var contract1_wallet = "AB7ks7n7oe";	// wallet
blockchainAccess.getWallet(contract1_wallet, function(contract1_balance) {
	// When contract wallet balance reaches 3 or more, send 2 to administrator
	if ((3 * Math.pow(10, 8)) <= contract1_balance.balance) {
		ret = true;
		blockchainAccess.createTransaction(admin_wallet, 2, contract1_wallet, "contract1", function(){
			// done
		});
	}
});