{
    //

    // Generic with interface

    
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T
    }

    type EmilabWatch = {

        brand: string;
        model: string;
        display: string

    }

    const PoorDeveloper: Developer<EmilabWatch> = {
        name: "persian",
        computer: {
            brand: "asus",
            model: "x-wwl",
            releaseYear: 2024
        },
        smartWatch: {
            brand: "emilab",
            model: "kw77",
            display: "oled"
        }
    };

    interface AppleWatch {
        brand: string;
        model: string;
        sleepTrack: boolean
    }

    const richDeveloper: Developer<AppleWatch> = {
        name: "rich dev",
        computer: {
            brand: "PH",
            model: "x-232",
            releaseYear: 2021
        },
        smartWatch: {
            brand: "Apple watch",
            model: "kw77",
            sleepTrack: true,
        }
    }
    //
}