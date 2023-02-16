import "../../styles/Qna.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";

const Qna = () => {
  const [qusetions, setQuestion] = useState([
    { id: 1, question: "What is React?" },
    { id: 2, question: "How to use React?" },
  ]);

  const submitQuestion = () => {
    setQuestion();
  };

  return (
    <div className="qna">
      {/* <section className="qna-container"> */}
      <h2>Q & A</h2>
      <span>If you hava any questions, please leave them.</span>
      <form className="qna-form" onSubmit={submitQuestion}>
        <input type="text" placeholder="Question" />
        <IoMdAddCircleOutline className="add-question-button" />
      </form>
      {/* input form submit하면 아래 qna 등록 기능 추가 */}
      {/* </section> */}
    </div>
  );
};

export default Qna;
