export default function blog (state=[], action) {
    switch (action.type) {
        case 'DOWNLOADED':
            return [...action.data];
        default: 
            return state;
    }
}