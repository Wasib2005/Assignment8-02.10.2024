import PropTypes from "prop-types";
import Banner from "./Banner";

const Banners = ({ booksData }) => {
  return (
    <div className="flex justify-center">
      <div className="carousel rounded-box m-auto min-w-[640px] border">
        {booksData.map((book, i) => (
          <Banner book={book} key={i} />
        ))}
      </div>
    </div>
  );
};

Banners.propTypes = {
  booksData: PropTypes.array,
};

export default Banners;
