import "../../styles/Faq.scss";
import { useState } from "react";

const qnaList = [
  {
    question: "Virtual Dom은 무엇인가요?",
    answer:
      "Virtual DOM은 애플리케이션의 UI를 구성하는 HTML 엘리먼트를 메모리 내에서 구현한 것이다. 컴포넌트가 다시 렌더링될 때, virtual DOM은 업데이트할 요소의 목록을 만들기 위해 기존의 DOM 모델에서 변경되는 사항을 비교한다. DOM 전체를 다시 렌더링할 필요 없이 실제 DOM에 필요한 최소한만 변경하여 효율성이 높다는 것이 큰 장점이다.",
  },
  {
    question: "JSX는 무엇인가요?",
    answer:
      "JSX는 HTML처럼 보이는 코드를 작성할 수 있게 해주는 자바스크립트 문법의 확장이다. JSX는 자바스크립트 함수 호출 방식으로 컴파일되어 컴포넌트에 대한 마크업을 만들 수 있는 더 좋은 방법을 제공한다.",
  },
  {
    question: "state와 props의 차이는 무엇인가요?",
    answer:
      "props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이다. props는 수정될 수 없으며 표시되거나 다른 값을 계산하는데만 사용된다. state는 컴포넌트의 생명 주기 동안 수정될 수 있는 내부 데이터로, 다시 렌더링해도 유지된다.",
  },
  {
    question: "왜 state를 직접 변경하지 않고 setState를 이용하나요?",
    answer:
      "만약 컴포넌트의 state를 직접 변경하려고 시도한다면, 리액트는 컴포넌트를 다시 렌더링해야 하는지 알 수 있는 방법이 없다. setState() 메소드를 사용하면 리액트는 컴포넌트의 UI를 업데이트할 수 있다.",
  },
  {
    question: "컴포넌트 기반 아키텍쳐는 무엇인가?",
    answer:
      "리액트에서 컴포넌트는 애플리케이션 UI 구축의 기반이다. 컴포넌트 기반 시스템이 구축되면, 각각의 개별적인 구성 요소들은 재사용이 가능하며 서로 독립적으로 존재한다. 즉 구성 요소 간 서로 의존하지 않으며 애플리케이션의 UI 개발이 용이해진다.",
  },
];

const Faq = () => {
  const [showList, setShowList] = useState(qnaList);
  const [visible, setVisible] = useState(qnaList);

  const getQna = (item, index) => {
    return (
      <div className="faq-info" key={index}>
        <div
          className="question"
          onClick={() => {
            let tmpCard = visible;
            tmpCard[index].show = !tmpCard[index].show;
            setVisible([...tmpCard]);
          }}
        >
          <h3>{item.question}</h3>
        </div>
        <div className={qnaList[index].show ? "answer-show" : "answer-none"}>
          <p>{item.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="faq">
      {/* <section className="faq-container"> */}
      <h2>FAQ</h2>
      <span>Most frequent questions and answers</span>
      {showList.map((item, index) => getQna(item, index))}
      {/* </section> */}
    </div>
  );
};

export default Faq;
