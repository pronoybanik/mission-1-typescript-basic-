{

    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }
    }

    const goribManushAccount = new BankAccount(11, "Mr.gorib", 20)
    // goribManushAccount.balance = 22;
    const result = goribManushAccount.addDeposit(20)
    console.log(result);





    //
}