function repeat(text, count){
    let result = '';

    for (let i = 1; i <=count; i++) {
        result = result+text;
    }

    console.log(result);
}

repeat("String", 2)