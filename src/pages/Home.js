import "../styles/Home.scss";
import { FaGithub, FaBloggerB } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="Home">
      <div className="profile-container">
        <div className="profile-img">
          <img src="img/profile.jpg" alt="profile img" />
        </div>
        <div className="profile-info">
          <h1>장현정</h1>
          <h5>JANG HYEON JEONG</h5>
          <h2>Frontend Developer</h2>
          <p>
            새로운 기술 변화에 두려워하지 않는 개발자 장현정입니다. 배운 것을
            기록하고 계속해서 발전하려고 노력중입니다.
          </p>
          <ul className="address-zip">
            <li>
              <FaGithub />
              <span>Github: https://github.com/JangGusWjd</span>
            </li>
            <li>
              <MdEmail />
              <span>E-mail: jjanghj3624@gmail.com</span>
            </li>
            <li>
              <FaBloggerB />
              <span>Tistory Blog: https://itguswjd.tistory.com/</span>
            </li>
          </ul>
        </div>
        <div className="profile-skill">
          <h2>SKILLS</h2>
          <ul className="skill-zip">
            <li>
              <img src="img/html.png" alt="html img" />
              <p>HTML</p>
            </li>
            <li>
              <img src="img/css.png" alt="css img" />
              <p>CSS</p>
            </li>
            <li>
              <img src="img/js.png" alt="js img" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="img/react.png" alt="react img" />
              <p>React JS</p>
            </li>
            <li>
              <img src="img/scss.png" alt="scss img" />
              <p>SCSS</p>
            </li>
            <li>
              <img src="img/ts.png" alt="typescript img" />
              <p>TypeScript</p>
            </li>
            <li>
              <img src="img/Java.png" alt="java img" />
              <p>Java</p>
            </li>
          </ul>
        </div>
        <div className="profile-awards">
          <h2>AWARDS</h2>
          <ul>
            <li>수상내역 1</li>
            <li>수상내역 2</li>
            <li>수상내역 3</li>
            <li>수상내역 4</li>
            <li>수상내역 5</li>
            <li>수상내역 6</li>
          </ul>
        </div>
        <div className="profile-activity">
          <h2>ACTIVITY</h2>
          <ul>
            <li>2020 단국대학교 소프트웨어학과 입학</li>
            <li>2022 단국대학교 중앙동아리 Aegis 준회원</li>
            <li>2022 프론트엔드 스터디장</li>
            <li>2023 단국대학교 멋쟁이사자처럼 11기 운영진</li>
            <li>2023 DEVOCEAN YOUNG 2기</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
