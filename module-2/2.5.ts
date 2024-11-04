{
    //


    const createArray = (params: string): string[] => {
        return [params]
    }

    createArray("pronoy")


    // Function with generics

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    };
    createArrayWithGeneric<string>("pronoy");

    const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
        return [params1, params2]
    };

    createArrayWithTuple<string, null>("pronoy", null);
    createArrayWithTuple<number, { name: string }>(1, { name: "Joy" });





    //
}