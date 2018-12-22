export default function paint (state=[], action) {
    switch (action.type) {
        case 'findPosts':
          let filterArr = action.value.split(' ')
          // console.log(a)

          // let b = action.arr.filter(el => a.filter(ell => el.title.includes(ell)))
          // console.log(b)

          let res = []
          for ( let el of action.arr) {
            for ( let ell of filterArr) {
               if (el.title.includes(ell)) {
                 res.push(el)}
            }
          }

          let res2 = []
          action.arr.map(el => filterArr.map(ell => el.title.includes(ell) ? res2.push(el) : null))
          
          return res2
        case 'cleanPaint':
          return [];
        default:
           return state
    }
}