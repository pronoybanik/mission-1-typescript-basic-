{
    //

    const arrOfNumbers: number[] = [1, 2, 3];

    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
        number.toString())

    console.log(arrOfStrings);


    // dynamic change data type

    // type AreaNumber = {
    //     height: number;
    //     width: number
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{ height: string; width: number }> = {
        width: 100,
        height: "200"
    }

    console.log(area1);
    




    //
}