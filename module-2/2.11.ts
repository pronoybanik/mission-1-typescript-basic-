{

    // utility types
    // pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contact: string
    }

    // pick is create new object in old type object
    type NameAge = Pick<Person, "name" | "age">;

    // omit create object with out name and age type
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PErsonPartial = Partial<Person>

    // Read Only

    type PersonReadOnly = Readonly<Person>

    const PersonOne: PersonReadOnly = {
        name: "MR.XXY",
        age: 22,
        contact: "016",
    }

    // we can not change value useIng readonly type 
    // PersonOne.name = "pronoy"

    // Record type

    const EmptyObj: Record<string, unknown> = {};

    type MyObj = Record<string, string>

    const objOne: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
    };




    //

}