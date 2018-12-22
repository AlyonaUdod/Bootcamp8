export default function some (state=[],action) {
    switch(action.type){
        case 'add':
            return state.push(action.payload);

        case 'filter':
            return state.filter(el=>el===action.payload);

        case 'clear':
            return [];
        
        default:
            return state;
    }
}