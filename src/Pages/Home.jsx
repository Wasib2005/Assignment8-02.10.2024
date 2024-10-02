import { useLoaderData } from "react-router-dom";

import Banners from "../Comp/BannerComp/Banners";
import HomeBooks from "../Comp/HomeBook/HomeBooks";

const Home = () => {
  const booksData = useLoaderData();
  return (
    <div>
      <div>
        <Banners booksData={booksData} />
      </div>
      <div>
        <HomeBooks bookData={booksData}/>
      </div>
    </div>
  );
};

export default Home;
