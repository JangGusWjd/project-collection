// import { useEffect } from "react";

// const { kakao } = window;

// const Map = () => {
//   useEffect(() => {
//     const container = document.getElementById("map");
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     const map = new kakao.maps.Map(container, options);
//   }, []);

//   return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
// };

// export default Map;

// import MapInsert from "./MapInsert";
import MapShow from "./MapShow";
import MapItem from "./MapItem";
// import "./styles/Map.scss";
import { useState } from "react";

const Map = () => {
  // const [place, setPlace] = useState([
  //   { id: 1, placeName: "네이버", position: 1111 },
  //   { id: 2, placeName: "카카오", position: 1111 },
  //   { id: 3, placeName: "라인", position: 1111 },
  //   { id: 4, placeName: "쿠팡", position: 1111 },
  //   { id: 5, placeName: "배민", position: 1111 },
  // ]);
  return (
    <div className="Map-Container">
      <div>
        <h1>추억의 장소를 저장하세요.</h1>
      </div>
      {/* <MapInsert /> */}
      <button>네이버</button>
      <button>카카오</button>
      <MapShow />
    </div>
  );
};

export default Map;
