import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  document.title = "YogaTube| Sign Up";

  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, confirm, photoURL } = data;

    let errorMessages = [];

    if (password !== confirm) {
      errorMessages.push("Passwords do not match");
    } else if (password.length < 6) {
      errorMessages.push("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      errorMessages.push("Password must contain at least one capital letter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorMessages.push("Password must contain at least one special character");
    }

    setError(errorMessages.join(". "));

    if (errorMessages.length > 0) {
      return;
    }

    createUser(name, email, password, photoURL)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: name, photoURL: photoURL });
      })
      .then((result) => {
        console.log("User profile updated successfully");
        toast.info("Registration completed");
        toast.success("Login Success");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setError("The email address is already in use by another account.");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div style={{backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/008/071/640/original/graphics-image-drawing-yoga-female-with-sunrise-and-mountain-landscape-background-concept-exercise-for-health-benefits-on-the-morning-free-vector.jpg)`,backgroundSize:'cover'}}>
      <div className=" p-0">
        <Container className="p-4">
          <Row className="justify-content-lg-center">
            <Col
              md={6}
              className="border border-3 border-warring rounded py-2  text-white"
            >
              <h2 className="text-center mb-2 mt-2">Sign Up</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-danger">This field is required</p>
                  )}
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="mt-2 fw-bold">Email</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-danger">This field is required</p>
                  )}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label className="mt-2 fw-bold">Password</Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className="text-danger">This field is required</p>
                  )}
                </Form.Group>

                <Form.Group controlId="confirm">
                  <Form.Label className="mt-2 fw-bold">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    className="fw-bold"
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    {...register("confirm", { required: true })}
                  />
                  {errors.confirm && (
                    <p className="text-danger">This field is required</p>
                  )}
                </Form.Group>

                <Form.Group controlId="photoURL">
                <Form.Label className="mt-2 fw-bold">Photo URL</Form.Label>
              <Form.Control
                className="fw-bold"
                type="text"
                name="photoURL"
                placeholder="Enter Photo URL"
                {...register("photoURL")}
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="mt-3">
              Sign Up
            </Button>
          </Form>
          <p className="text-danger">{error}</p>
          <p className="mt-4 text-center  ">
            Already have an account?{" "}
            <Link className="text-white fw-bold" to="/login">
              Login
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  </div>
</div>
);
};

export default SignUp;