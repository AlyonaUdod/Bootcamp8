export const findPosts = (blog, text) => ({
    type: 'findPosts',
    arr: blog,
    value: text,
})

export const cleanPaint = () => ({
    type: 'cleanPaint',
})
