import "../../styles/Qna.scss";
import { IoMdAddCircleOutline } from "react-icons/io";

const Qna = () => {
  return (
    <div className="qna">
      {/* <section className="qna-container"> */}
      <h2>Q & A</h2>
      <span>If you hava any questions, please leave them.</span>
      <form className="qna-form">
        <input type="text" placeholder="Question" />
        <IoMdAddCircleOutline className="add-question-button" />
      </form>
      {/* </section> */}
    </div>
  );
};

export default Qna;
