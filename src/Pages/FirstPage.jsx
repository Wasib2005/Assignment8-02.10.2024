import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const FirstPage = () => {
  return (
    <div>
      <Nav />
      <div className="ml-6 mr-6 min-w-[640px] min-h-[calc(100vh-(48px+373px))]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default FirstPage;
