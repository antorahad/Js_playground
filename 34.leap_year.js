function leapYearChecker(year){
   if(year % 400 == 0 && year % 100 == 0 || year % 4 == 0){
        var message = year + ' ' + 'is a leap year';
        return message; 
   }

   var message2 = year + ' ' + 'is not a leap year'

   return message2
}

const checkLeapYear = leapYearChecker(2023);

console.log(checkLeapYear);