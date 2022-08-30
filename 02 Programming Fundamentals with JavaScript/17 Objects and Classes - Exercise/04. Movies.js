function solve(arr) {
    let movies = []
    
    for (let el of arr) {
        if (el.includes('addMovie')) {
            let movie = el.replace('addMovie ', '')
            movies.push({name: movie})
        } else if (el.includes('directedBy')) {
            let info = el.split(' directedBy ')
            let name = info[0]
            let director = info[1]
            for (let movie of movies) {
                if (movie.name == name) {
                    movie.director = director
                }
            }
        } else if (el.includes('onDate')) {
            let info = el.split(' onDate ')
            let name = info[0]
            let date = info[1]
            for (let movie of movies) {
                if (movie.name == name) {
                    movie.date = date
                }
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }

}