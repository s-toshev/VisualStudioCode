function fruit(typeFruit, weight, pricePerKg){
    let transformedWeight = weight/1000;
    let money = (pricePerKg * transformedWeight);
    let message = `I need $${money.toFixed(2)} to buy ${transformedWeight.toFixed(2)} kilograms ${typeFruit}.`;
    console.log(message);
}

fruit("orange", 2500, 1.80)