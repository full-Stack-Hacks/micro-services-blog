import {useState} from 'react'

const PostForm = ({createPost}) => {

    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(text)
        createPost(text)
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text} />
            <input type="submit"/>
        </form>
    )
}

export default PostForm