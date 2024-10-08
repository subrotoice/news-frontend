import { useLoaderData } from "react-router-dom";
import { News } from "../components/HomePageMiddleNews";
import NewsDetailsCard from "../components/NewsDetailsCard";
import RightSideBar from "../components/RightSideBar";

const NewsCategories = () => {
  const allNewsOfaCertainCategory = useLoaderData() as News[];

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          {allNewsOfaCertainCategory.map((singleNews) => (
            <NewsDetailsCard key={singleNews._id} newsDetails={singleNews} />
          ))}
        </div>
        <div className="col-span-1 p-4 shadow-md">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategories;
