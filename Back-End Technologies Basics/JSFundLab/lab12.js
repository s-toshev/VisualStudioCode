function printObjectProperties(cityObject) {
    for (const key in cityObject) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}

printObjectProperties({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);