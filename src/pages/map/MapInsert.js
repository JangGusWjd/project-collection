import "./styles/MapInsert.scss";

const MapInsert = () => {
  return (
    <div>
      <h1>장소 추가하기</h1>
      <form>
        <input type="text" />
        <button>추가</button>
      </form>
      <div className="place">
        <ul>
          <li>Naver</li>
          <li>KaKao</li>
          <li>Line</li>
          <li>Coupang</li>
          <li>Woowa Bros.</li>
        </ul>
      </div>
    </div>
  );
};

export default MapInsert;
