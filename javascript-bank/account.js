/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) !== true || amount < 1) {
    return false;
  } else {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  }
};
Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) !== true || amount < 1) {
    return false;
  } else {
    var newWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdraw);
    return true;
  }
};
Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var totalDesposits = 0;
    var totalWithdrawals = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        totalDesposits += this.transactions[i].amount;
      }
      if (this.transactions[i].type === 'withdrawal') {
        totalWithdrawals += this.transactions[i].amount;
      }
    }
    var totalBalance = totalDesposits - totalWithdrawals;
    return totalBalance;
  }
};
