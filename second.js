const students = [
  { name: "Alice", chemistry: 75, biology: 85, dob: "02-03-2002" },
  { name: "Bob", chemistry: 80, biology: 70, dob: "05-06-2001" },
  { name: "Charlie", chemistry: 70, biology: 80, dob: "12-01-2002" },
  { name: "David", chemistry: 85, biology: 75, dob: "08-08-2001" },
  { name: "Eve", chemistry: 75, biology: 85, dob: "04-02-2002" }
];

students.sort((a, b) => {
  // First, compare by total marks
  const totalMarksDiff = (b.chemistry + b.biology) - (a.chemistry + a.biology);
  if (totalMarksDiff !== 0) {
    return totalMarksDiff;
  }
  
  // Second, compare by biology marks
  const bioMarksDiff = b.biology - a.biology;
  if (bioMarksDiff !== 0) {
    return bioMarksDiff;
  }
  
  // Finally, compare by date of birth
  return new Date(a.dob) - new Date(b.dob);
});

console.log(students);
