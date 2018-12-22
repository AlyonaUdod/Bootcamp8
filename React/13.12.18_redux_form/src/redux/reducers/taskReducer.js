import uuidv4 from 'uuid'

export default function task (state=[], action) {
    switch (action.type) {
        case 'createObj' :
            let item = {
                id: uuidv4(),
                text: action.text,
                complete: false,
            } 
                console.log(item)
            return [...state, item]

        case 'toggleComplite' : 
            let id = action.id; 
            return state.map(el => el.id === id ? {...el, complete: !el.complete} : el);

        case 'deleteObj' :
            let id2 = action.delId;
            return state.filter(el => el.id !== id2)

        default: 
            return state;
    }
}