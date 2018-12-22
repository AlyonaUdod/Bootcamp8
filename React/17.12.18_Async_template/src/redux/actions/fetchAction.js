
import {getGallery} from '../api/api'

 export function addImg(data) {
     return {
         type: 'DOWNLOADED',
         data,
     }
 }

 export const fetchData = () => dispatch => {
     return getGallery()
     .then(data => dispatch(addImg(data.data.hits)))
     .catch(err=> console.log(err))
 }

//  function fetchData() {
//      return function(dispatch) {
//          return getGallery().then().catch()
//      }
//  }


//  export const fetchData = ()=> dispatch => {
//     return Promise.all([getGallery(),getNews(), getMusic()])
//     .then(data => {
//         dispatch(addImg(data[0].data.hits));
//         dispatch(addNews(data[1].data.news));
//         dispatch(addMusic(data[2].data.music));
//     })
//     .catch(err => console.log(err))
//   };