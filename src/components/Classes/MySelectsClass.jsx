import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MySelectsClass = ({toy}) => {
    if (!toy) {
        return null; // or handle the case when toy is not defined
    }

    const {
        name,
        _id,
        price,
        instructor,
        availableSeats
      } = toy;
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price: {price}<br />
                    Instructor: {instructor}<br />
                    Seats Left: {availableSeats}
                </Card.Text>
                <Button variant="danger" onClick={() => onDelete(_id)}>Delete</Button>{' '}
                <Button variant="success" onClick={() => onPay(_id)}>Pay</Button>
            </Card.Body>
        </Card>
    );
};

export default MySelectsClass;
