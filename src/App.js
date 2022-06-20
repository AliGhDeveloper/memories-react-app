import AppBar from './components/Appbar/AppBar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './redux/actions';
import { Container, Row, Col } from 'react-bootstrap';


function App(){
    const [ currentId, setCurrentId ] = useState(null)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return(
        <Container>
            <AppBar />
            <Row className="row">
                <Col className="col-lg-8">
                    <Posts postsList={ posts } setCurrentId={ setCurrentId }/>
                </Col>
                <Col className="col-lg-4">
                    <Form setCurrentId={ setCurrentId }currentId={ currentId } />
                </Col>
            </Row>
        </Container>
    )
}

export default App;