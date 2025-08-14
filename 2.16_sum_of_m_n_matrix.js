// A Matrix of shape 20x5 that contains the marks of 20 students in 5 subjects

const NUMBER_OF_STUDENTS = 20;
const NUMBER_OF_SUBJECTS = 5;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const marks = Array.from({ length: NUMBER_OF_STUDENTS }, () => Array.from({ length: NUMBER_OF_SUBJECTS }, () => getRandomInt(0, 100)));

console.log(marks);

// Average marks obtained in each subject
const averageMarksBySubject = marks[0].map(
                                (_, subjectIndex) => marks.reduce(
                                  (totalMarks, studentsMarks) => totalMarks + studentsMarks[subjectIndex], 0))
                                    .map((total) => total / NUMBER_OF_STUDENTS);


console.table(averageMarksBySubject);

// Average marks obtained by each student
const averageMarksByStudent = marks.map(
                                (marksOfStudent) => marksOfStudent.reduce(
                                  (total, marksInSubject) => total + marksInSubject, 0))
                                    .map(totalMarks => totalMarks / NUMBER_OF_SUBJECTS);

console.table(averageMarksByStudent);

// Number of students who have below 50 in average
let below50AverageCount = 0;

averageMarksByStudent.forEach(averageMarks => {
  below50AverageCount += averageMarks < 50;
});

console.log(`Number of students with average marks less than 50 is ${below50AverageCount}`);

