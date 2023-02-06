function exam(input) {
   /* На края програмата трябва да отпечата процента студенти с оценка между 2.00 и 2.99, 
   между 3.00 и 3.99, 
   между 4.00 и 4.99, 5.00 или повече. 
   Също така и средния успех на изпита.  */

   let studentsNum = Number(input[0]);
   let index = 1;
   let group1 = 0;
   let group2 = 0;
   let group3 = 0;
   let group4 = 0;
   let counter1 = 0;
   let counter2 = 0;
   let counter3 = 0;
   let counter4 = 0;

   let totalGrade = 0;
  


   for (let i = 1; i <= studentsNum; i++) {
    let studentGrade = Number(input[index]);
    index++;
    if (studentGrade >= 5){
        group1 += studentGrade;
        counter1++;
    } else if (studentGrade >= 4) {
        group2 += studentGrade;
        counter2++;
    } else if (studentGrade >= 3) {
        group3 += studentGrade;
        counter3++;
    } else if (studentGrade < 3 ){
        group4 += studentGrade;
        counter4++;
    }
    totalGrade += studentGrade;
   }

   let avg1 = (counter1 / studentsNum) * 100;
   let avg2 = (counter2 / studentsNum) * 100;
   let avg3 = (counter3 / studentsNum) * 100;
   let avg4 = (counter4 / studentsNum) * 100;

   let finalAvg = (totalGrade / studentsNum);

   console.log(`Top students: ${avg1.toFixed(2)}%`);
   console.log(`Between 4.00 and 4.99: ${avg2.toFixed(2)}%`);
   console.log(`Between 3.00 and 3.99: ${avg3.toFixed(2)}%`);
   console.log(`Fail: ${avg4.toFixed(2)}%`);
   console.log(`Average: ${finalAvg.toFixed(2)}`);
} exam (["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
