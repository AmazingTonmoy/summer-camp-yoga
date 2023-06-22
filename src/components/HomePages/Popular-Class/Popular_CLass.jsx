import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

const Popular_CLass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        // Fetch list of approved classes from backend API
        axios.get('https://yoga-school-server-ochre.vercel.app/popularClass')
          .then(response => {
            setClasses(response.data);
          })
          .catch(error => {
            console.error('Error fetching popular classes:', error);
          });
      }, []);
   
      return (
        <div className='container'>
            <h1 className='text-center'>Popular Class</h1>

            <Row className='mt-5'>
                {
                    classes.map(classImage => (
                    <Col md={4} key={classImage._id}>
                        <Card className='mt-3'>

                        <Card.Img variant="top" style={{ height: '400px' }} src={classImage.image} alt={classImage.name} />
                        <Card.Body>
                        <Card.Title> Enrolled Students: {classImage.enrolledStudents}</Card.Title>
                        </Card.Body>
                        </Card>
                        
                        
                    </Col>
                    ))

                }
            </Row>


            
        </div>
    );
};

export default Popular_CLass;