class Acount{

    id:number;
    owner:string;
    balance:number;

    constructor(id:number,owner:string,balance:number){

        this.id=id;
        this.owner=owner;
        this.balance=balance;


    }

    deposit(amount:number):void{

        if(amount<=0){
            throw new Error("invalid amount")
        }
        this.balance+=amount;
    }
}

let account=new Acount(1,'emon',1000);

account.deposit(100);

console.log(account.balance);
console.log(account)

console.log(account instanceof Acount);