import axios from 'axios';

// const END_POINT = 'https://jsonplaceholder.typicode.com/';
// const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

export function getGallery() {

    // axios.get('http://content.guardianapis.com/search?api-key=test')
    // .then(data => console.log(data))
    // .catch(err=> console.log(err))

    return Promise.all([axios.get('https://jsonplaceholder.typicode.com/posts'), axios.get('https://jsonplaceholder.typicode.com/users'), axios.get('https://jsonplaceholder.typicode.com/comments')])
}