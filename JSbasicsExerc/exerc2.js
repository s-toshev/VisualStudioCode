function vacation(groupPersons, typeGroup, day) {
    let totalPrice = 0;


    if (typeGroup == "Students") {
        if (day == "Friday") {
            if (groupPersons >= 30) {
                totalPrice = (groupPersons * 8.45) - ((groupPersons * 8.45) * 0.15);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = groupPersons * 8.45;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Saturday") {
            if (groupPersons >= 30) {
                totalPrice = (groupPersons * 9.80) - ((groupPersons * 9.80) * 0.15);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 9.80;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Sunday") {
            if (groupPersons >= 30) {
                totalPrice = (groupPersons * 10.46) - ((groupPersons * 10.46) * 0.15);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 10.46;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        }
    } else if (typeGroup == "Regular") {
        if (day == "Friday") {
            if (groupPersons >= 10 && groupPersons <= 20) {
                totalPrice = (groupPersons * 15) - ((groupPersons * 15) * 0.05);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = groupPersons * 15;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Saturday") {
            if (groupPersons >= 10 && groupPersons <= 20) {
                totalPrice = (groupPersons * 20) - ((groupPersons * 20) * 0.05);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 20;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Sunday") {
            if (groupPersons >= 10 && groupPersons <= 20) {
                totalPrice = (groupPersons * 22.50) - ((groupPersons * 22.50) * 0.05);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 22.50;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        }
    } else if (typeGroup == "Business") {
        if (day == "Friday") {
            if (groupPersons >= 100) {
                totalPrice = (groupPersons * 10.90) - (10 * 10.90);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            } else {
                totalPrice = groupPersons * 10.90;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Saturday") {
            if (groupPersons >= 100) {
                totalPrice = (groupPersons * 15.60) - (10 * 15.60);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 15.60;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        } else if (day == "Sunday") {
            if (groupPersons >= 100) {
                totalPrice = (groupPersons * 16) - (10 * 16);
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            } else {
                totalPrice = groupPersons * 16;
                console.log(`Total price: ${totalPrice.toFixed(2)}`);

            }
        }
    }
}

vacation(40, "Regular", "Saturday");
vacation(30, "Students", "Sunday");
vacation(130, "Business", "Sunday");

