{
    //generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;

    // anther function 
    const user = {
        name: "pronoy banik",
        age: 25,
        address: "ctg"
    };

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    };

    getPropertyValue(user, "name")

    //
}