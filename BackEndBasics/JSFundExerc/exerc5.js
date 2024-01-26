function solve(words, template) {
    const separatedWords = words.split(", ");

    const templateWords = template.split(" ");

    let result = "";

    for (const templateWord of templateWords) {
        if(templateWord[0] == "*"){
                const correspWord = separatedWords.find(x => x.length == templateWord.length);
                result += `${correspWord} `;
        }else{
            result += `${templateWord} `;
        }
    }

    console.log(result)
    
}

solve('great',
'softuni is ***** place for learning new programming languages'
)