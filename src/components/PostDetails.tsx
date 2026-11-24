import React, { useEffect, useState } from 'react'
import type { Post } from '../types/posts.type'
import { getPostById } from '../api/api'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const [postData, setPostData] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const { id } = useParams<{ id: string }>();

  const postDetails = async () => {
    try {
      const data = await getPostById(id!);
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
      {
        loading ? ("Loading Data") :
          error ? (
            <h2>{error}</h2>
          ) :
            (
              postData ? (
                <>
                  <h1>{postData.id}: {postData.title}</h1>
                  <p>{postData.body}</p>
                </>
              ) : null
            )
      }
    </>

  )
}

export default PostDetails