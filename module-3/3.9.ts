{

    // abstraction using interface---


    // that is interface---
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // That Is object---
    // const vehicle1 : Vehicle1= {
    //     name: "Pronoy",
    //     module: 2000
    // }

    // that is class---

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(" aim START the car engine");

        }
        stopEngine(): void {
            console.log(" i am STOP the car engine");

        }
        move(): void {
            console.log(" i am MOVE the car engine");

        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();


    // abstraction using class---

    


    //
}