import CommentForm from './CommentForm'
import Comments from './Comments'


const Posts = ({posts}) => {
    return posts.map((post) => {
        return <>
            <h1>{post.title}</h1>
            <CommentForm postId={post.id}/>
            <Comments postId={post.id}/>
        </>
    })
}

export default Posts
