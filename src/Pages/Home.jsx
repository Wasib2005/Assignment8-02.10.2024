import { useLoaderData, useNavigation } from "react-router-dom";

import Banners from "../Comp/BannerComp/Banners";
import HomeBooks from "../Comp/HomeBook/HomeBooks";
import Loader from "../Comp/Loader";

const Home = () => {
  const booksData = useLoaderData();
  const navigation = useNavigation()

  if (navigation.state === "loading"){
    return(
      <Loader/>
    )
  }

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
