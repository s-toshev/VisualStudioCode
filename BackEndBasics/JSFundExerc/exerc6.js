function substring(word, text){

    const hasWord = text.toLowerCase().split(' ').includes(word);
if(hasWord){
console.log(word);
}else{
    console.log(`${word} not found!`);
}

}

substring('javascript',
'JavaScript is the best programming language'
);