export default function filteredArr (state=[], action) {
    switch (action.type) {
        case 'BY_NAME': 
            let a = [...action.data]
            return a.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        case 'BY_YEAR':
            let b = [...action.data]
            return b.sort((a,b) => b.year - a.year);
        case 'BY_BUDGET':
            let c = [...action.data]
            return c.sort((a,b) => parseFloat(b.budget) - parseFloat(a.budget));
        case 'CLEAR':
            return [];
        default: 
            return state;
    }
}