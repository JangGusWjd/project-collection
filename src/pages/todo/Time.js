import { useState, useEffect } from "react";
import "./todo-styles/Time.scss";

const Time = () => {
  const [clock, setClock] = useState("--시 --분 --초");

  useEffect(() => {
    let Timer = setInterval(() => {
      const time = new Date();
      const hours = String(time.getHours()).padStart(2, "0");
      const minute = String(time.getMinutes()).padStart(2, "0");
      const seconds = String(time.getSeconds()).padStart(2, "0");
      setClock(`${hours}시 ${minute}분 ${seconds}초`);
    }, 1000);

    return () => {
      clearInterval(Timer); //현재 진행되고 있는 함수의 진행을 멈춤
    };
  }, []);

  let date = new Date();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  let dayOfWeek = week[date.getDay()];

  return (
    <div className="Time-Container">
      <h3>{clock}</h3>
      <h4>
        {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}.{dayOfWeek}
      </h4>
    </div>
  );
};

export default Time;
