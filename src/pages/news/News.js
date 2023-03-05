import { Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";

const News = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default News;
