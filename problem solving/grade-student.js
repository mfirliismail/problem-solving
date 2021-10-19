function gradingStudents(grades) {
    // Write your code here
    let kelipatanLima = []
    for (let i = 5; i <= 100; i += 5) {
        kelipatanLima.push(i)
    }
    let result = [grades.length]
    for (let i = 0; i < grades.length; i++) {
        let hasil = kelipatanLima.find(e => e > grades[i])
        if (grades[i] < 10) {
            result.push(grades[i])
        } else if (grades[i] <= 33) {
            result.push(33)
        } else if (hasil - grades[i] == 3) {
            result.push(grades[i])
        } else if (grades[i] == 0) {
            result.push(0)
        } else if (grades[i] < 10) {
            result.push(grades[i])
        } else if (hasil - grades[i] < 3) {
            result.push(hasil)
        }
    }
    return result

}

console.log(gradingStudents([73, 67, 38, 0]))