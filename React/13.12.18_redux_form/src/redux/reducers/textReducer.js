export default function text (state='', action) {
    switch (action.type) {
        case 'remindValue' : 
            return action.value
        case 'removeValue' :
            return '';
        default :
            return state;
    }
}