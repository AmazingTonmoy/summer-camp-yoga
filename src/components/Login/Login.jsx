import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsGoogle,BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  document.title = "ToysRush | Login";
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const { signIn, googleLogIn, auth, googleProvider } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // initialize react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // define submit handler function
  const onSubmit = (data) => {
    console.log(data);
    setSuccess("");
    setError("");

    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError(`Email Address Not Found`);
        } else {
          setError("Wrong password.Try again");
        }
      });
  };

  //   google log in
  const handleGoogleSignIn = () => {
    googleLogIn(auth, googleProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div style={{backgroundImage: `url(https://wallpapers.com/images/hd/yoga-background-2rmnmb16t7q2lj98.jpg)`,backgroundSize: '85%',backgroundPosition:'bottom'}}>
      <div className=" h-100  p-0">
        <Container className="p-4 ">
          <Row className="justify-content-lg-center ">
            <Col
              md={6}
              className="border border-3 border-white rounded py-4 text-white"
            >
              <h2 className="text-center mb-3 ">Login</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email address</Form.Label>
                  <input
                    {...register("email", { required: true })}
                    className="form-control mb-3 fw-bold"
                    type="email"
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <p className="text-danger fw-bold">Email is required</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Password</Form.Label>
                  <div className="input-group mb-3">
                    <input
                      {...register("password", { required: true })}
                      className="form-control fw-bold"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                    <Button
                      variant="outline-none"
                      onClick={handleShowPassword}
                      className="password-toggle-btn bg-white text-dark border border-0"
                    >
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-danger fw-bold">Password is required</p>
                  )}
                </Form.Group>

                <Button
                  style={{ backgroundColor: "green", border: "none" }}
                  type="submit"
                  className=" mb-3"
                >
                  Login
                </Button>
                <p className="text-warning fw-bold text-center">{error}</p>
                <p className="mt-4 text-center">
                  Don't have an account yet?
                  <Link className="text-white px-1" to="/register">
                    Sign Up
                  </Link>
                </p>
                <p className="text-center mb-0">or</p>
              </Form>

              <Button
                onClick={handleGoogleSignIn}
                variant="success"
                size="lg"
                className="d-block mt-4 w-100"
              >
                <BsGoogle /> Continue With Google       
                 </Button>
        </Col>
      </Row>
    </Container>
  </div>
</div>
);
};

export default Login;