

// learn spreed operator

const bros1: string[] = ["pronoy", "joy", "anik"]
const bros2: string[] = ["pritom", "sourov", "rokey"]

bros1.push(...bros2);


const teacher1 = {
    math: "apu",
    English: "arjun",
}

const teacher2 = {
    react: "Jonkar",
    express: "pritom"
}

const teacherList = {
    ...teacher1,
    ...teacher2
};

//  learn rest operator

const friendList = (...friends: string[]) => {
    friends.forEach((friend: String) => console.log(friend));
};

friendList("pronoy", "joy");

