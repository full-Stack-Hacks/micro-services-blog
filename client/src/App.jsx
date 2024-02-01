import { useState, useEffect } from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import './App.css'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('http://localhost:4000/posts')
        const data = await res.json()

        setPosts(Object.values(data))
      } catch (error) {
        console.error(error.message)
      }
    }

    getPosts()
  }, [])

  const createPost = async (text) => {
    try {
      const res = await fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: text }) // Corrected to match expected server-side field
      });
  
      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }
  
      const data = await res.json(); // Correctly parse the JSON response

      const newPosts = Object.values(data)
      
      setPosts(newPosts)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <PostForm createPost={createPost} />
      <Posts posts={posts} />
    </>
  )
}

export default App
