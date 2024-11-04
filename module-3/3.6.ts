{

    // getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // addDeposit(amount: number) {
        //     return this._balance = this._balance + amount;
        // }

        //  (getter) method show tha function cover to property
        get balance() {
            return this._balance;
        }


        // setter
        set deposit(amount: number) {
            this._balance = this.balance + amount;
        }
    }

    const goribManushAccount = new BankAccount(11, "Mr.gorib", 20)

    goribManushAccount.deposit = 20

    const myBalance = goribManushAccount.balance;
    console.log(myBalance);




    //
}