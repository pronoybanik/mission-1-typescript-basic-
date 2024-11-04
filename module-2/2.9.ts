{

    //  conditional type useing keyof


    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }

    // type CheckVehicle<T> = T extends "bika" | "car" | "ship" ? true : false;

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type result = CheckVehicle<"bike">


    //
}