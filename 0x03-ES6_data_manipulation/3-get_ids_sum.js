export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (Student1, Student2) => Student1.id || Student1 + Student2.id,
      0,
    );
  }
  return 0;
}
