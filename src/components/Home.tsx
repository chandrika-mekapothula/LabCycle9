import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPosts } from '../api/api'
import type { Post } from '../types/posts.type'
const Home = () => {
    const [postData, setPostData] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const navigate = useNavigate();
    const postDetails = async () => {
        try {
            const data = await getPosts();
            setPostData(data)
        } catch (e) {
            setError("something went wrong!!!")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        postDetails();
    }, [])
    return (
        <>
            <div>Home</div>
            <Link to='/about'>About</Link>
            {/* <button onClick={() => navigate('/user')}>User</button> */}
            {/* {
                    users.map((user) => (
                        <button onClick={() => navigate(`/user/${user.id}`)}>{user.name}</button>
                    ))
                } */}
            <div style={{display:'flex',flexDirection:'column'}}>
                {
                    loading ? ("Loading Data") :
                        error ? (
                            <h2>{error}</h2>
                        ) :
                            (
                                postData.map((post, id) => (
                                    <button onClick={() => navigate(`/post/${post.id}`)}>{post.title}</button>
                                ))
                            )
                }
            </div>
        </>
    )
}

export default Home