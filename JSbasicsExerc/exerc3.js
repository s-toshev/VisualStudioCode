function leapYear(yearToCheck){
    if((yearToCheck % 4 == 0 && yearToCheck%100 != 0) || yearToCheck % 400 == 0){
      
        console.log("yes")

      }else{
        console.log('no')
    }
}
leapYear(1984)
leapYear(2000)
leapYear(1900)