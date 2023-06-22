import { Link } from "react-router-dom";
import errorImg from '../../assets/Images/yoga-error.jpg'



const ErrorPage = () => {
  document.title = "YogaTube | 404 Error!";
  return (
    <div className="container-full page-container   vh-100">
      <div className="text-center">
        <img className="w-75 btn-error" src={errorImg} alt="" />
      </div>

      <div className="text-center text-success mt-4">
        <Link
          to="/"
          className="btn btn-dark px-5  py-3 font-weight-bold rounded-pill fw-bold"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
