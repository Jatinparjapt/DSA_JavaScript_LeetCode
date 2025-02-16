/**
 * HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
Examples

 round to  (85 - 84 is less than 3)
 do not round (result is less than 38)
 do not round (60 - 57 is 3 or higher)
Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

Function Description

Complete the function  with the following parameter(s):

: the grades before rounding
Returns

: the grades after rounding
Input Format

The first line contains a single integer, , the number of students.
Each line  of the  subsequent lines contains a single integer, .

Constraints


 */


function gradingStudents(grades) {
    // Write your code here
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            result.push(grades[i]);
        } else {
            let nextMultiple = Math.ceil(grades[i] / 5) * 5; 
            if (nextMultiple - grades[i] < 3) {
                result.push(nextMultiple);
            } else {
                result.push(grades[i]);
            }
        }
    }
    return result;

}
 let grades = [73, 67, 38, 33];
 console.log(gradingStudents(grades)); // [75, 67, 40, 33]