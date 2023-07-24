import { client } from "../client"
import { handleError } from "../error"
import { PostInformation } from "../models/post"

export const postDemo = async (postInformation?: PostInformation) => {
    try {
        const response: { id: string } = await client.post(
            '',
            postInformation ?? {
                title: 'My Post Title',
                body: 'This is the body of the post.'
            }
        )

        return response.id
    } catch (err: unknown) {
        handleError(err)
        return ''
    }
}
