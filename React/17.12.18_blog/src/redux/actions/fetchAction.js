
import {getGallery} from '../api/api'

 export function addInfoToBlog(data) {
     return {
         type: 'DOWNLOADED',
         data,
     }
 }

 export const fetchData = () => dispatch => {
     return getGallery()
    //  .then(data=> console.log(data))
    //  .then(data => dispatch(addImg(data.data.response.results)))
     .then(data => createFullBlog(data))
     .then(data => dispatch(addInfoToBlog(data)))
     .catch(err=> console.log(err))
 }
 

function createFullBlog(data){
    let posts = data[0].data;
    let userName = data[1].data
    let comments = data[2].data

    // console.log (posts)
    // console.log(userName)
    // console.log(comments)

    let result = posts.map(el => ({title:el.title, body:el.body, userName: userName.filter(name => name.id === el.userId ? el : null)[0].name, comments: comments.filter((com) => com.postId === el.id).length  }))

    // console.log(result)

    return result
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