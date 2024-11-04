{
    //
    const age = 20

    if (age >= 15) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    const showAge = age >= 20 ? "adult" : "not adult";
    console.log(showAge);



    // nullish operator

    const inAuthentication = null;

    const result1 = inAuthentication ?? "Guest"; // nullish 
    const result2 = inAuthentication ? inAuthentication : "Guest";

    console.log({ result1 }, { result2 });


    //
}