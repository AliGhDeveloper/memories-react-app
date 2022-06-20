import './styles.css';
import Post from './Post/Post';


function Posts({ setCurrentId, postsList}){
    const posts = postsList

    return(
        <div className="px-3 py-3 posts">
            {
                posts.map( post => {
                    return <Post setCurrentId={ setCurrentId } key={post._id} data={post} />
                })
            }
        </div>
    )
}

export default Posts;