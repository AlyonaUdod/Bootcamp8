export default function paint (state=[], action) {
    switch (action.type) {
        case 'filterComplete':
          return action.arr.filter(el => el.complete);
        case 'filterNonComplete':
          return action.arr.filter(el => !el.complete);
        case 'cleanPaint':
          return [];
        default:
           return state
    }
}