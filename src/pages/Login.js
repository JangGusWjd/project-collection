// import "./Login.css";
import "../styles/Login.scss";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="LogIn">
      <div className="LogIn-container">
        <h1>Log In</h1>
        <form className="LogIn-form">
          <div className="id-input">
            <IoPersonSharp className="icon" />
            <input type="text" className="userId" placeholder="id" />
          </div>
          <div className="pw-input">
            <IoIosLock className="icon" />
            <input type="password" className="userPw" placeholder="password" />
          </div>
          <button class="loginBtn">로그인</button>
        </form>
        <p>아직 회원이 아니신가요?</p>
        <Link to="/register">
          <p>회원가입</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
