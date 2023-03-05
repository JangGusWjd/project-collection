import { useParams } from "react-router-dom";
import NewsList from "./NewsList";
import NewsCategories from "./NewsCategories";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <NewsCategories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
