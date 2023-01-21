import Qna from "./Qna";
import Faq from "./Faq";
import "../../styles/Board.scss";

const Board = () => {
  return (
    <div className="board-container">
      <Qna />
      <Faq />
    </div>
  );
};

export default Board;
