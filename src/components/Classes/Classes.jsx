import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const [selectedClassId, setSelectedClassId] = useState('');

  useEffect(() => {
    // Fetch list of approved classes from backend API
    axios.get('https://yoga-school-server-ochre.vercel.app/class')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Error fetching approved classes:', error);
      });
  }, []);

  const handleSelectClass = (classId) => {
    // Handle selecting a class
    if (!user) {
      toast.warning("Please log in before selecting a course.");
      return;
    }
  
    const selectedClass = classes.find(classItem => classItem._id === classId);

    

  
    if (!selectedClass) {
      console.error(`Class with ID ${classId} not found.`);
      return;
    }
  
    if (selectedClass.availableSeats === 0) {
      toast.warning("This course is already full.");
      return;
    }
    
  
    fetch("http://localhost:5000/selects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify( selectedClass ), // include both selectedClass and email in the request body
    })
    // , email: user.email
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Class Selected Successful");
        setSelectedClassId(classId); // set selectedClassId to the id of the selected class
      })
      .catch((error) => {
        console.error('Error selecting class:', error);
        toast.error("Failed to select class. Please try again later.");
      });
  };
  
    



  


  return (
    <div className='container mt-5'>
    <Row>
      {classes.map((classItem) =>  (
        <Col md={4} key={classItem._id}>
          <Card
            style={{ 
              backgroundColor: classItem.availableSeats === 0 ? 'red' : 'white',
              marginBottom: '1rem'
            }}
          >
            <Card.Img variant="top" style={{ height: '400px' }} src={classItem.image} alt={classItem.name} />
            <Card.Body>
              <Card.Title>{classItem.name}</Card.Title>
              <Card.Text>
                Instructor: {classItem.instructor}<br/>
                Available seats: {classItem.availableSeats}<br/>
                Price: ${classItem.price}
              
                
              </Card.Text>
              
              <Button 
  variant="primary"
  onClick={() => handleSelectClass(classItem._id)}
  disabled={classItem.availableSeats === 0 || selectedClassId === classItem._id 
    // || user.role === 'admin' || user.role === 'instructor'
  }
>
  Select
</Button>

              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Classes;
