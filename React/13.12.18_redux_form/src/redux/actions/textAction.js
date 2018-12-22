export const remindValue = (event) => ({
    type: 'remindValue',
    value: event.target.value
})

export const removeValue = () => ({
    type: 'removeValue',
})