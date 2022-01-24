import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import LogImg from "../images/github-cat.png";
import { FaGithubAlt } from "react-icons/fa";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  // Prev login design

  // return (
  //   <Wrapper>
  //     <div className="container">
  //       <img src={loginImg}></img>
  //       <h1>Github User</h1>
  //       <button className="btn" onClick={() => loginWithRedirect()}>
  //         Log in / sign up
  //       </button>
  //     </div>
  //   </Wrapper>
  // );

  return (
    <Wrapper>
      <div className="container">
        <div className="head-land">
          <div class="icon-holder">
            <FaGithubAlt className="icon" />
            <h2>GITHUB USERS</h2>
          </div>
          <button className="btn" onClick={() => loginWithRedirect()}>
            Login / Sign Up
          </button>
        </div>
        <div className="center-pg">
          <div className="left-half">
            <h3>Home for All Github Data</h3>
            <p>The place to get all your important needed from Github</p>
            <button className="btn" onClick={() => loginWithRedirect()}>
              Login / Sign Up
            </button>
          </div>
          <img className="right-half" src={LogImg}></img>
        </div>
      </div>
    </Wrapper>
  );
};
// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   .container {
//     width: 90vw;
//     max-width: 600px;
//     text-align: center;
//   }
//   img {
//     margin-bottom: 2rem;
//   }
//   h1 {
//     margin-bottom: 1.5rem;
//   }
// `;
const Wrapper = styled.section`
  min-height: 100vh;
  .head-land {
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
  }
  .icon-holder {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-bottom: 10px;
    font-size: 20px;
  }
  h2 {
    font-size: 15px;
    margin-left: 10px;
  }
  .center-pg {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: var(--clr-dark-navy);
    align-items: center;
  }
  .left-half {
    flex: 1;
    text-align: center;
  }
  .right-half {
    width: 50%;
    object-fit: contain;
  }
  @media screen and (max-width: 600px) {
    .center-pg {
      display: block;
      margin: auto;
      padding-top: 5rem;
    }
    .left-half {
      width: 100%;
      margin-bottom: 50px;
    }
    .right-half {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
export default Login;
