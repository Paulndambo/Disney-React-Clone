export function getMoviesList() {
    return fetch("http://127.0.0.1:8000/api/movies")
    .then(data => data.json())
}

export function getSingleMovie(id) {
    return fetch(`http://127.0.0.1:8000/api/movies/${id}`)
    .then(data => data.json())
}