import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { useContext } from "react";

import "./Header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";

const Headers = () => {
  const { user, logOut, auth, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut(auth)
      .then((result) => {
        console.log(result);
        toast.warning("Log Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // loader
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5 pb-2">
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Navbar expand="md"  style={{ backgroundColor: "#1450a0" }}>
      <Container>
        <Navbar.Brand href="/">
        <h2 className="text-white">YogaTube</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Use the 'me-auto' class on the first Nav component to push the links to the left */}
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Instructor">
            Instructor
            </NavLink>
            <NavLink className="nav-link" to="/Classes">
            Classes
            </NavLink>

            <div className="all-btn">
              {user ? (
                <div className="imgBtn">
                  <NavLink className="nav-link" to={`/Dashboard`}>
                  Dashboard
                  </NavLink>

                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="logo"
                      className="pro-image "
                      title={user.displayName}
                    />
                  ) : (
                    <h6 className="text-white  me-5 mt-2 pt-1">
                      {user.displayName}
                    </h6>
                  )}

                  <NavLink
                    className="nav-link bg-danger text-white text-center rounded text-decoration-none"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </NavLink>
                </div>
              ) : (
                <div className="logReg d-flex">
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>

                  <NavLink className="nav-link" to="/register">
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;
