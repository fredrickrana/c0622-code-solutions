/* exported Bank */

function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) !== true || balance < 1) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalBalances = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      totalBalances += this.accounts[i].getBalance();
    }
    return totalBalances;
  }
};
