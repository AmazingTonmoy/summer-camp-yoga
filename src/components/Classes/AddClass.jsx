import { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddClass = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const instructor = form.instructor.value;
        const email = form.email.value;
       
        const price = parseFloat(form.price.value);
        const instructorImg = user.photoURL
       
        const availableSeats = parseFloat(form.availableSeats.value);
        const enrolledStudents = Math.floor(Math.random() * 101);
      
        const addNewToy = {
          name,
          image,
          instructor,
          email,
          price,
          availableSeats,
          enrolledStudents,
          instructorImg
          
          
        };
    
        console.log(addNewToy);
    
        // Send POST request to backend API with toy data
        fetch("https://yoga-school-server-ochre.vercel.app/class", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addNewToy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("toy added Successful");
            form.reset();
          });
      };
    return (
        <div 
        // style={{ backgroundImage: `url(${bg})` }}
        >
      <div className="bg-dark h-100 opacity-75 pb-5 pt-5">
        <Card
          onSubmit={handleAddToy}
          className="mx-auto mt-0 mb-0 text-white bg-dark fw-bold"
        >
          <Card.Header className="text-center ">
            <h3>Add Toy</h3>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="toy-name">
                <Form.Label>Class Name:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="text"
                  name="name"
                  placeholder="Enter class name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="picture-url">
                <Form.Label>Picture URL:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="url"
                  name="image"
                  placeholder="Enter picture URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="seller-name">
                <Form.Label>Instructor Name:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="text"
                  name="instructor"
                  value={user ? user.displayName : ""}
                  placeholder="Enter seller name"
                />
              </Form.Group>

              <Form.Group controlId="seller-email">
                <Form.Label>Instructor Email:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="email"
                  name="email"
                  value={user ? user.email : ""}
                  placeholder="Your email"
                  required
                />
              </Form.Group>

              

              <Form.Group controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  required
                />
              </Form.Group>

              

              <Form.Group controlId="quantity">
                <Form.Label>Available seats:</Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="number"
                  name="availableSeats"
                  placeholder="Enter available Seats"
                  required
                />
              </Form.Group>

             

              <Button variant="danger" type="submit" className="mt-2">
                Add Class
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
    )
};

export default AddClass;