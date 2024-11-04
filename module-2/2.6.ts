const addCourseToStudents = <T extends { id: number, name: string, email: string }>(student: T) => {
    const course = " Next level web Development "
    return {
        course,
        ...student
    }

    const studentOne = addCourseToStudents({
        id: 2,
        name: "Trina Banik",
        email: "trina12@gmail.com"
    })
 
    const studentTwo = addCourseToStudents({
        id: 1,
        name: "Anamika Banik",
        email: "anu34@gmail.com"
    })
};

