function filterArr() {
    let arr = [1, 2, 3, 4, 5, 6];
    let filtArr = arr.filter(function (number) {
        return number % 2 == 0;
    });

    console.log(filtArr);

}

function obj(){
    let person = {};
    person.name = 'Peter';
    person.age = 20;
    person.hairColor = 'gray';
    person.lastName = 'Mixer';


    person.sayHello = () => console.log("wazaaaaaapp!");

    let student = {
        username: 'ivan',
        age: 20,
        averageGrade: 5.51,
        sayName(){
            console.log('hi!');
        }
    }

    student.sayName();
    student.sayGoodbye = () => {
        console.log("bye");
    }

    student.sayGoodbye();

    console.log(student);
}

function assoc(){
    let assocArr = {
        'in': 1,
        'the': 2,
        'mix': 3

    };

    assocArr.mixmix = 4;
    console.log(assocArr);

    for (const key in assocArr) {
       console.log(key + " >>> " + assocArr[key]);
    }
}
assoc()