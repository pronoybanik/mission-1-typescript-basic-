{
    //

    // generic type

    type GenericArray<T> = Array<T>

    const rollNumbers: GenericArray<number> = [1, 2, 3, 6]

    const mentors: GenericArray<string> = ["Mr.x", "Mr.y", "Mr,z"]

    const boolArray: GenericArray<boolean> = [true, false]


    // generic tuple

    type GenericTuple<x, y> = [x, y]

    type user = {
        name: string,
        role: number
    }
    const userWithId: GenericTuple<number, user> = [123, { name: "pronoy", role: 138 }]



    //
}