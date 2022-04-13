const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//1
// const findPerson = (type, id) => {
//   const personById = type.find((person) => person.id === id);
//   return personById;
// };
// console.log(findPerson(school.teachers, 2));
// console.log(findPerson(school.students, 12));

//2
const assignStudent = (studentId, isSubject) => {
  const teacherObj = school.teachers.find((teacher) => teacher.capacityLeft > 0 && teacher.subjects.includes(isSubject));
  if (teacherObj) {
    teacherObj.capacityLeft -= 1;
    teacherObj.students.push(studentId);
  } else {
    console.log("Sorry,no available teachers left");
  }
};
assignStudent(13, "history");
assignStudent(12, "history");
assignStudent(11, "history");

console.log(school.teachers);

//3
// const assignTeachersSubject = (teacherId,newSubject) => {
//   const teacherSubject = school.teachers
// };
