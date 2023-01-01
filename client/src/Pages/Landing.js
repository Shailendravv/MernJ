import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              deserunt, dignissimos neque doloremque quaerat facilis cupiditate
              reprehenderit aut repudiandae dolores iste! Maiores laudantium
              aliquid enim, doloribus deserunt quae esse sed.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="Job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
