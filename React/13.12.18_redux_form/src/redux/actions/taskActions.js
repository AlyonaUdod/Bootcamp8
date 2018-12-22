export const createObj = (text) => {
    return {
        type: 'createObj',
        text: text,
    }
}
export const toggleComplite = (event) => ({
        type: 'toggleComplite',
        id: event.target.id,
    })

export const deleteObj = (event) => ({
        type: 'deleteObj',
        delId: event.target.dataset.id,
    })