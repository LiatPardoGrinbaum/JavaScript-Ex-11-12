const findPerson = (type, id) => {
//   const personById = type.find((person) => person.id === id);
//   return personById;
// };
// console.log(findPerson(school.teachers, 2));
// console.log(findPerson(school.students, 12));

// const assignStudent = (studentId, isSubject) => {
//   const teacherObj = school.teachers.find((teacher) => teacher.capacityLeft > 0 && teacher.subjects.includes(isSubject));
//   if (teacherObj) {
//     teacherObj.capacityLeft -= 1;
//     teacherObj.students.push(studentId);
//   } else {
//     console.log("Sorry,no available teachers left");
//   }
// };
// assignStudent(13, "history");
// assignStudent(12, "history");
// assignStudent(11, "history");

// console.log(school.teachers);