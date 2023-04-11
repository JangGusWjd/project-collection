//장소 위도, 경도 등 위치를 카카오 맵에서 불러옴
import { useEffect } from "react";
import { MapData } from "./MapData";

const { kakao } = window;

const MapShow = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    // 장소 위치 저장
    const options = {
      center: new kakao.maps.LatLng(37.359357, 127.1048),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    MapData.forEach((el) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });
    });
  }, []);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
};

export default MapShow;
