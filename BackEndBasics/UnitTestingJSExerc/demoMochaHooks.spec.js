describe('demoTestSuite', () => {

    //before се използва за извършване на операции преди
    //тестовете, например за осъществаване на връзка с
    //база данни, от където ще използваме информация
    //за нашите тестове, например данни за 
    //акаунти(име и парола)

    before(() => {
            console.log("<<< here ~~~ things to do in before TESTS>>>")
    });

    //изпълнява се преди всеки тест 
    //например за тестови данни за всеки тест
    beforeEach(() => {
        console.log("<<< here ~~~ things to do in before EACH ~~ test>>>")
});
    describe('nestedTestSuite1', () => {


        it('test4', () => {
           const var1 = 15;
           const var2 = 20;
           const var3 = 10*20*5;
    
        });
    

    });


    describe('nestedTestSuite2', () => {


        it('test5', () => {
            //arrange
        
            //act
        
            //assert
    
        });
    

    })


    it('test1', () => {
        //arrange
    
        //act
    
        //assert

    });


    it('test2', () => {
        //arrange
    
        //act
    
        //assert

    });


    it('test3', () => {
        //arrange
    
        //act
    
        //assert

    });

        //after се използва за зачистване на данни,
        //изпълнява се винаги след тестовете
        //например, това, което сме създали в базата 
        //от данни чрез теста, бива зачистено, за да не 
        //се натрупват излишни данни или за да не се създава
        // дублиране на данни
        
    after(() => {
        console.log("<<< here ~~~ things to do in --AFTER-- TESTS>>>")
});


afterEach(() => {
    console.log("<<< here ~~~ things to do in --AFTER ~~ EACH-- test>>>")
});
});

//изпълняване само на един тест:
//npx  mocha ./demoMochа.spec.js --grep "test4"
