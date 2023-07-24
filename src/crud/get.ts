import { client } from "../client"
import { handleError } from "../error"
import { Post } from "../models/post"

export const getDemo = async () => {
    try {
        const response = await client.get('?_limit=10')
        const posts: Post[] = response.data
        return posts
    } catch (err: unknown) {
        handleError(err)
        return []
    }
}
