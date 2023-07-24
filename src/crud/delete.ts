import { client } from "../client"
import { handleError } from "../error"

export const deleteDemo = async (id: string) => {
    try {
        await client.delete(`${id}`)
    } catch (err: unknown) {
        handleError(err)
    }
}
