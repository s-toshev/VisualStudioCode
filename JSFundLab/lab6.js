function occurence(text, searchWord){
    let words = text.split(" ");

    let counter = 0;

    for (let word of words) {
        if (word == searchWord){
            counter++;
        }
    }

    console.log(counter);
}

occurence('This is a word and it also is a sentence',
'is');