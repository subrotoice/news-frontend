import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { News } from "../components/HomePageMiddleNews";
import Navbar from "../components/Navbar";
import NewsDetailsCard from "../components/NewsDetailsCard";
import RightSideBar from "../components/RightSideBar";

const NewsDetails = () => {
  const newsDetails = useLoaderData() as News;

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <NewsDetailsCard newsDetails={newsDetails} />
        <div className="col-span-1 p-4 shadow-md">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
