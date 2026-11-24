import axios from "axios"
import type { Post } from "../types/posts.type"
const apiURL = 'https://jsonplaceholder.typicode.com/posts'
export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(apiURL)
    return response.data
}
export const getPostById = async (id: string): Promise<Post> => {
    const response = await axios.get<Post>(`${apiURL}/${id}`)
    return response.data
}