import { Alert } from 'react-bootstrap';
import './myAlert.css'
import { useState, useEffect } from 'react';

export default function myAlert () {
        
    const [welcome, setWelcome] = useState(true);

    useEffect(() => {
        setTimeout(() => { setWelcome(false) }, 3000)
        });    

        return (
        <>
        {welcome && 
        <div className='d-flex justify-content-center mt-4'>
            <Alert className='welcome-message d-flex flex-column align-items-center'>
                <span className='fs-6 mb-4'>my first react app</span>
                    <h1 className='text-uppercase'>Epibooks</h1>
            </Alert>
        </div>}
        </>
    )
}