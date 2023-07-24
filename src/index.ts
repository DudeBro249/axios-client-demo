import { deletePost } from "./crud/delete"
import { getPosts } from "./crud/get"
import { postOne } from "./crud/post"

const main = async () => {

    console.log('---------------GET REQUEST------------------')
    const posts = await getPosts(10)
    const firstPost = posts[0]

    console.log('Got one post:')
    console.log(firstPost)
    console.log();

    console.log('---------------POST REQUEST------------------')
    const createdID = await postOne()
    console.log(`The ID of the created post is: ${createdID}\n`)

    console.log('---------------DELETE REQUEST------------------')
    await deletePost(firstPost.id.toString())
    console.log(`Deleted post with ID: ${firstPost.id}`)
    
}

main()
