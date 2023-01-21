// import "./Register.css";
import "../styles/Register.scss";

const Register = () => {
  return (
    <div className="Register">
      <div className="Register-container">
        <h1>회원가입</h1>
        <form className="Register-form">
          <span>이름</span>
          <input className="register-input" type="text" placeholder="이름" />
          <span>아이디</span>
          <input className="register-input" type="text" placeholder="아이디" />
          <span>비밀번호</span>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호"
          />
          <span>비밀번호 확인</span>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호 확인"
          />
          <span>이메일</span>
          <input className="register-input" type="email" placeholder="이메일" />
          <button className="registerBtn">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
