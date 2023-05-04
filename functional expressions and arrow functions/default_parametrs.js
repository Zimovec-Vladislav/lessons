const myPost = {
    header: 'News',
    text: "Сегодня прилетело три ветолета с раннеными рашистами."
}

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Vladislav',
}

console.log(newPost(myPost))
console.log(newPost(firstPost))
