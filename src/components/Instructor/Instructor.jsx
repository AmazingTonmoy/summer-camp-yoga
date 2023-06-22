import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Instructor = () => {
   const [mans, setMans] = useState([]);
    useEffect(() => {
         
          const url = `https://yoga-school-server-ochre.vercel.app/class`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => setMans(data))
            .catch((error) => console.error(error));
        
      }, []);

    return (
        <Container className='mt-5 mb-3'>
            <h1 className='text-center'>Our Insrtactor</h1>
            <hr />
            <Row xs={1} md={2} lg={3} className="g-4">
                {mans.map((man) => (
                    <Col key={man._id}>
                        <Card>
                            <Card.Img  variant="top" src={man.instructorImg} alt={man.name} style={{ height: "300px", }} />
                            <Card.Body>
                                <Card.Title>{man.name}</Card.Title>
                                <Card.Text>Email: {man.email}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Instructor;
