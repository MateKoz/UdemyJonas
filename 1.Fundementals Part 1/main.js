const massMark = 95;
const heightMark = 1.88;
const massJohn =  55;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn/ heightJohn ** 2;

if(BMIMark > BMIJohn) {
    console.log(`Mark BMI ${BMIMark} is bigger than BMI John ${BMIJohn};
     `)
} else {
    console.log(`John BMI ${BMIJohn} is bigger than BMI Mark ${BMIMark}`);
}