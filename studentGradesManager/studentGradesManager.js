// 1. Initialize an array of grades
let studentGrades = [85, 92, 78, 88, 90, 67, 95];

// 2. Add and remove grades
console.log("Original Grades: ", studentGrades);

// - Add a grade at the end of the array
studentGrades.push(98);
console.log("After adding a grade: ", studentGrades);

// - Remove the last grade from the array
studentGrades.pop();
console.log("After removing the last grade: ", studentGrades);

// - Add a grade to the beginning of the array
studentGrades.unshift(80);
console.log("After adding a grade at the beginning: ", studentGrades);

// - Remove the first grade from the array
studentGrades.shift();
console.log("After removing a grade at the beginning: ", studentGrades);

// 3. Modify the Array

// - Using splice to insert 2 elements starting from index 2
studentGrades.splice(2, 0, 89, 91);
console.log("After adding grades at index 2: ", studentGrades);

// - Using splice remove elements at index 3
studentGrades.splice(3, 2);
console.log("After removing grades at index 3: ", studentGrades);

// - Using slice to createa new array containing portions of the original arrays
let newGrades = studentGrades.slice(1, 4);
console.log("New Grades: ", newGrades);

// 4. Combine and Split Arrays

// - using concatenante to merge two arrays of grades
let additionalGrades = [73, 87, 95];
let allGrades = studentGrades.concat(additionalGrades);
console.log("All Grades: ", allGrades);

// - using join to create a string from the array of numbers.
let gradesString = allGrades.join(", ");
console.log("Grades as a string: ", gradesString);

// 5. Reverse and sort Grades

// - using reverse to reverse the order of grades in the array
allGrades.reverse();
console.log("Reversed Grades: ", allGrades);

// - using sort to sort the grades in ascending order
allGrades.sort((a, b) => a - b);
console.log("Sorted Grades: ", allGrades);

// 6. Iterate and Transform grades

// - using forEach to print each grade
allGrades.forEach((grade) => console.log("Grade: ", grade));
console.log();

// - using map to create a new array of grades, each increased by 5 points.
let increasedGrades = allGrades.map((grade) => grade + 4);
console.log("New Grades Map: ", increasedGrades);

// 7. Filter and analyse grades
// - using filter to get the grades above 70
let passingGrades = allGrades.filter((grade) => grade > 70);
console.log("High Grades: ", passingGrades);

// - using reduce to calculate the total sum of grades
let totalGrade = allGrades.reduce((sum, grade) => sum + grade, 0);
console.log("Total Grade: ", totalGrade);

// - using find to locate the first grade that is exactly 88
let exactGrade = allGrades.find((grade) => grade === 88);
console.log("Exact Grade: ", exactGrade);

// - using findIndex to find the index of the first grade that is below 70.
let gradeBelow70 = allGrades.findIndex((grade) => grade < 70);
console.log("Index of Grade Below 70: ", gradeBelow70);

// - Using some to check if any grade is below 60.
let GradeBelow60 = allGrades.some((grade) => grade < 60);
console.log("Is Grade Below 60: ", GradeBelow60);

// - Using every to check if all grades are above 50.
let GradesAbove50 = allGrades.every((grade) => grade > 50);
console.log("Are All Grades Above 50: ", GradesAbove50);

// 8. Check for Existence
// - using includes to check if a specific grade exists in the array
let gradeExists = allGrades.includes(89);
console.log("Does Grade 80 Exist: ", gradeExists);
