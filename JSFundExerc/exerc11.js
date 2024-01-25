function empl(array){

    const employeeData = [];

    for (const employee of array) {
        
        employeeData.push({
            name: employee,
            personalNumber: employee.length
        });
    }

    for (const empl of employeeData) {
        console.log(`Name: ${empl.name} -- Personal Number: ${empl.personalNumber}`);
    }

}

empl([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )