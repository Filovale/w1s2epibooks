import './main.css'
import { Container, Row, Col, Card} from 'react-bootstrap';
import jsonData from '../../data/horror.json';

export default function main ({ img, title }) { 

    return (
        <>
            <Container className='my-4'>
                <Row>
                    {jsonData.map((book) => {
                        return (
                           <Col sm={6} md={3} lg={3} className='g-4'>
                            <Card className='h-100 cursor-hover border-color'>
                                <Card.Img src={book.img} className='card-image'/>
                                <Card.Body className="p-2">
                                    <Card.Title className='fs-6 text-center ellipsis'>{book.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>  
                        )                         
                    })}
                </Row>
            </Container>  
        </>
    )
}