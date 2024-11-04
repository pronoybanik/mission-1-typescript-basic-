
function add(num1: number, num2: number): number {
    return num1 + num2;
};

add(1, 2);

// Arrow function
const addArray = (num1: number, num2: number): number => {
    return num1 + num2
};

// object --> function --> method

const poorUser = {
    name: "pronoy",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance * balance}`
    }
};



