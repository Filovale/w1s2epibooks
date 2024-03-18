import './main.css'
import { Container, Row, Form } from 'react-bootstrap';
import jsonData from '../../data/horror.json';
import SingleBook from './SingleBook';
import { useState } from 'react';

export default function Main ({ img, title }) { 

    const [inputName, setInputName] = useState("");

   
    const searchResult = jsonData.filter((element) => {
        return element.title.toLowerCase().includes(inputName.toLowerCase())
    });


    return (
        <>
        <Container className='my-4'> 

          
            <Form.Control className= "input-field my-4"
            type="text" value={inputName} id="inputSearch"
            placeholder="Find title..."
            onChange={(e) => setInputName(e.target.value)}/>

            <Row>
                {searchResult.map((book) => (
                    <SingleBook key={book.asin} image={book.img} title={book.title} price={`${book.price} dollar`}/>
                ))}
            </Row>

        </Container>  
        </>
    )
}