{
    class MobilePhone {
        // name: string;
        // brand: string;
        // model: string;

        // useIng public our code is so short and efficient 


        constructor(public name: string, public brand: string, public model: string) {
            // this.name = name;
            // this.brand = brand;
            // this.model = model;
        }

        outPut() {
            console.log(`The ${this.name} says ${this.brand}`);
        }
    }

    const iphone = new MobilePhone("15 PRO-MAX", "iphone", "007");

    iphone.outPut();
}