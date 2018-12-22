export default function input (state='', action) {
    switch (action.type) {
        case 'remindValue':
            return action.value;
        case 'clearValue':
            return '';
        default:
            return state;
    }
}