import "../../styles/Instagram.scss";
import { useState } from "react";

const comments = [
  {
    id: 1,
    userId: "lotte_garden",
    comment: "내년 트리도 기대해주세요~",
  },
  {
    id: 2,
    userId: "happy_christmas1225",
    comment: "꺄><",
  },
  {
    id: 3,
    userId: "santa_claus",
    comment: "잠실 Good! ㅋㅋㅋㅋㅋ사람 많았어?",
  },
];

const Instagram = (props) => {
  let [like, setLike] = useState(150);
  const onClickLike = () => {
    setLike(like++);
  };

  const showComment = (item) => {
    return (
      <li key={item.id}>
        <h5>{item.userId}</h5>
        <p>{item.comment}</p>
      </li>
    );
  };

  const commentList = comments.map((item) => showComment(item));

  return (
    <div id="instagram-container">
      <div className="instagram-post">
        <div className="instagram-post-header">
          <img src="../img/profile.jpg" alt="profile-img" />
          <div className="instagram-writer">
            <h5>{props.name}</h5>
            <span>{props.place}</span>
          </div>
          <img src="../icon/more_horiz.svg" alt="more_horiz" />
        </div>
        <img src="../img/upload.jpg" alt="게시글" className="upload-img" />
        <nav className="reaction-zip">
          <div className="reaction">
            <div className="heart-change" onClick={onClickLike}>
              <img
                src="../icon/heart.svg"
                alt="좋아요"
                className="heart-outline"
                onClick={onClickLike}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png"
                alt="focus-like"
                className="heart-focus"
                onClick={onClickLike}
              />
            </div>
            <img src="../icon/chat.svg" alt="댓글" />
            <img src="../icon/send.svg" alt="공유" />
          </div>
          <img src="../icon/bookmark.svg" alt="bookmark" />
        </nav>
        <section className="comment-zip">
          <div className="likes">
            <img src="../img/profile.jpg" alt="profile img" />
            <div>
              <h5>{props.name}</h5>
              <p>
                님 외 <strong>{like}명</strong>이 좋아합니다.
              </p>
            </div>
          </div>
          <div className="content">
            <h5>{props.name}</h5>
            <p>크리스마스 잠실 샤롯데월드</p>
            <p>...더 보기</p>
          </div>
          <span>댓글 모두 보기</span>
          <ul>{commentList}</ul>
          <span>1일전</span>
        </section>
        <footer>
          <input type="text" placeholder="댓글 달기..." />
          <button>게시</button>
        </footer>
      </div>
    </div>
  );
};

export default Instagram;
