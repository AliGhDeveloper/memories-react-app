import { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions";
import { Form, Button } from 'react-bootstrap';

function MyForm({ setCurrentId, currentId }){
    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null);
    useEffect(() => {
        if( post ) setData(post)
    }, [post])
    const dispatch = useDispatch();
    const [ data, setData ] = useState({
     title: '', author: '', tags: '', message: '', selectedFile: ''   
    })
    const submitHandle = (e) => {
        e.preventDefault();
        if( currentId ){
            dispatch(updatePost(currentId, data ))
        }else {
            dispatch(createPost( data ))
        }
        clear()
    };
    
    const clear = () => {
        setCurrentId(null);
        setData({ title: '', author: '', tags: '', message: '', selectedFile: '' })
    }
    return(
        <div className="form">
            <form onSubmit={submitHandle}>
                <Form.Group>
                    <Form.Control value={data.title} type="text" name="title" placeholder="title.." onChange={(e)=> setData({...data, title: e.target.value})}></Form.Control>
                    <Form.Control value={data.message} type="text" name="message" placeholder="message.." onChange={(e)=> setData({...data, message: e.target.value})}></Form.Control>
                    <Form.Control value={data.tags} type="text" name="tags" placeholder="tags: exp newyear,japan,holiday" onChange={(e)=> setData({...data, tags: e.target.value})}></Form.Control>
                </Form.Group>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={(obj) => setData({...data, selectedFile: obj.base64})}
                />
                <Button type="submit">save</Button>
            </form>
        </div>
    )
}

export default MyForm;