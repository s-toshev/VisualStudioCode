function theatre(typeOfDay, age) {
    let singleTicketPrice = 0;
    switch (typeOfDay) {
        case "Weekday":
            if (age <= 18 && age >= 0) {
                singleTicketPrice = 12;
            } else if (age <= 64 && age > 18) {
                singleTicketPrice = 18;
            } else if (age <= 122 && age > 64) {
                singleTicketPrice = 12
            }else{
                console.log("Error!");
                break;
            }
            console.log(singleTicketPrice + "$");
            break;
        case "Weekend":
            if (age <= 18 && age >= 0) {
                singleTicketPrice = 15;
            } else if (age <= 64 && age > 18) {
                singleTicketPrice = 20;
            } else if (age <= 122 && age > 64) {
                singleTicketPrice = 15
            }else{
                console.log("Error!");
                break;
            }
            console.log(singleTicketPrice + "$");
            break;
        case "Holiday":
            if (age <= 18 && age >= 0) {
                singleTicketPrice = 5;
            } else if (age <= 64 && age > 18) {
                singleTicketPrice = 12;
            } else if (age <= 122 && age > 64) {
                singleTicketPrice = 10
            }else{
                console.log("Error!");
                break;
            }
            console.log(singleTicketPrice + "$");
            break;
    }
}
theatre("Holiday", -12)