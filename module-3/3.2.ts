{

    // oop - inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        // useIng public  our code is so short and efficient 
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours})`);
        }
    }

    class Student extends Person {

        // useing super method child constructor 
        // property/value transfer parent constructor value
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }

    const studentOne = new Student("Joy", 16, "Feni");
    // studentOne.getSleep();



    class Teacher extends Person {

        designation: string;



        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }


    const teacherOne = new Teacher("John Doe", 40, "123 Main St", "Math Teacher");
    // teacherOne.;


}