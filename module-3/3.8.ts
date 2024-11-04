{

    // Polymorphism

    // ek e method different different output deya ke  polymorphism bole 

    class Person {
        getSleep() {
            console.log("I am sleeping for 10 hour");

        }
    }

    class Student extends Person {
        getSleep() {
            console.log("I am sleeping for 8 hour");
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("I am sleeping for 6 hour");
        }
    }


    const getPersonSleepHour = (params: Person) => {
        params.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getPersonSleepHour(person1)
    getPersonSleepHour(person2)
    getPersonSleepHour(person3)

    //
}