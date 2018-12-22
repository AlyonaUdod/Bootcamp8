
import {getFilms, postFilm, deleteFilm} from '../api/api'

 export function addInfoToFilms(data) {
     return {
         type: 'DOWNLOADED',
         data,
     }
 }
 export const fetchData = () => dispatch => {
     return getFilms()
     .then(data => dispatch(addInfoToFilms(data.data)))
     .catch(err=> console.log(err))
 }
 


 export function addPostedFilm(data) {
     return {
         type: 'DONE', 
         data,
        }
 }
 export const postData = (obj) => dispatch => {
     return postFilm(obj)
     .then(data => dispatch(addPostedFilm(data.data)))
     .catch(err=> console.log(err))
 }


 export function removeDeletedFilm(id) {
    return {
        type: 'DELETE', 
        id,
       }
}

export const deleteData = (id) => dispatch => {
    return deleteFilm(id)
    .then(() => dispatch(removeDeletedFilm(+id)))
    .catch(err=> console.log(err))
}