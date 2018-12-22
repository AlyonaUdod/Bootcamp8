export const plus = (number) => {
    return {
        type: 'plus',
        data: number,
    }
}

export const minus = (number) => ({
        type: 'minus',
        data: number,
    })

export const reset = {type: 'reload'}