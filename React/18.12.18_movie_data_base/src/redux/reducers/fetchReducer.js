export default function films (state=[], action) {
    switch (action.type) {
        case 'DOWNLOADED':
            return [...action.data];
        case 'DONE':
            return [...state, action.data]
        case 'DELETE':
            return state.filter(el => el.id !== action.id)
        default: 
            return state;
    }
}