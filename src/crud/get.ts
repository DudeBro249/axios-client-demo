import { client } from "../client"
import { handleError } from "../error"
import { Post } from "../models/post"

export const getPosts = async (limit: number) => {
    try {
        const response = await client.get(`?_limit=${limit}`)
        const posts: Post[] = response.data
        return posts
    } catch (err: unknown) {
        handleError(err)
        return []
    }
}
