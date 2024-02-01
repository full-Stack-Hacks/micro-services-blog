import {useEffect, useState} from 'react'

const Comments = ({postId}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            console.log(postId)
            try {
                const res = await fetch(`http://localhost:4001/posts/${postId}/comments`)
                const data = await res.json()
                setComments(data)
            } catch (error) {
                console.error(error.message)
            }
        }

        getComments()
    }, [])

    return comments.map((comment) => (
        <p>{comment.content}</p>
    ))
}

export default Comments