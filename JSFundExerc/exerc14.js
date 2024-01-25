function movies(commands) {

    const movies = [];

    for (const command of commands) {
        if (command.includes("addMovie")) {
            const movieName = command.replace("addMovie ", "")
            movies.push({
                name: movieName,
                date: '',
                director: ''
            })
        } else if (command.includes("directedBy")) {
            const movieName = command.substring(0, command.indexOf('directedBy')).trim();
            console.log(movieName, 'directedBy')
                const directedBy = command.substring(command.indexOf('directedBy') + 
                'directedBy'.length).trim();
                const result = movies.find(movie => movie.name == movieName);
                result.director = directedBy;
        } else if (command.includes("onDate")) {
            const movieName = command.substring(0, command.indexOf('onDate')).trim();
            const onDate = command.substring(command.indexOf('onDate') + 
            'onDate'.length).trim();

        }        
    }


}