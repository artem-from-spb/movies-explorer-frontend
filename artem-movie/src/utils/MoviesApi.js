export const BASE_URL = "http://localhost:3000";

export function getAllMovies() {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err));
}