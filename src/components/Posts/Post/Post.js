import './styles.css';
import edite from '../../../images/more.png';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../redux/actions'
import { Card, Button} from 'react-bootstrap';

export default function Post({data, setCurrentId}){
    const dispatch = useDispatch()
    return(
        <Card  style={{ width: '18rem', position: 'relative', boxShadow: '1px 1px 3px'}}>
            <img src={edite} onClick={ () => setCurrentId(data._id)} className="edit-icon"/>
            <Card.Img variant="top" src={ data.selectedFile } />
            <Card.Body>
                <Card.Title>{ data.title }</Card.Title>
                <Card.Text>
                    { data.message }
                </Card.Text>
                <Card.Footer className="d-flex justify-content-between">
                    <div><Button variant="primary" onClick={() => dispatch(likePost(data._id))}>like</Button>&nbsp;<span>{ data.numOfLikes }</span></div>
                    <Button variant="danger" onClick={() => dispatch(deletePost(data._id))}>Delete</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}