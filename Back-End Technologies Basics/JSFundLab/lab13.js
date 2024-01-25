function phoneBook(input) {
    let uniqueNames = {};

    input.forEach(element => {
        let kvp = element.split(" ");
        let key = kvp[0];
        let value = kvp[1];
        uniqueNames[key] = value;
    });

    for (let key in uniqueNames) {
        console.log(`${key} -> ${uniqueNames[key]}`)
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);