import axios from 'axios';

export function getFilms() {
    return (axios.get('http://localhost:3001/films'))
}


export function postFilm(obj) {
    return axios.post('http://localhost:3001/films', obj, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
}

export function deleteFilm(id){
    return axios.delete(`http://localhost:3001/films/${id}`)
}