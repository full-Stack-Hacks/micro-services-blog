import {useState} from 'react'

const CommentForm = ({postId}) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            const res = await fetch(`http://localhost:4001/posts/${postId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: text})
            })

            if(!res.ok) {
                throw new Error('Server said fuck...')
            }

            
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="Comment">Comment</label>
            <input type="text" onChange={handleChange} value={text}/>
            <input type="submit" />
        </form>
    )
}

export default CommentForm