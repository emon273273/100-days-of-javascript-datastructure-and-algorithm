var Acount = /** @class */ (function () {
    function Acount(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Acount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this.balance += amount;
    };
    return Acount;
}());
var account = new Acount(1, 'emon', 1000);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Acount);
