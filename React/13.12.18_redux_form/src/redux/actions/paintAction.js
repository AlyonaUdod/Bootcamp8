export const filterComplete = (tasks) => ({
    type: 'filterComplete',
    arr: tasks,
})

export const filterNonComplete = (tasks) => ({
    type: 'filterNonComplete',
    arr: tasks,
})

export const cleanPaint = () => ({
    type: 'cleanPaint',
})
