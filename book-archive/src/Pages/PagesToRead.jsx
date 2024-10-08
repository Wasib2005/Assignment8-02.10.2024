import { useEffect, useState } from "react";
import { takeFromLS } from "../CommonFile/LocalStorage";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PagesToRead = () => {
  const books = useLoaderData();
  const [watchListBookId, setWatchListBookId] = useState([]);
  const [watchListBookObj, setWatchListBookObj] = useState([]);

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`value: ${value}`}</text>
    );
  };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  useEffect(() => {
    setWatchListBookId(takeFromLS("watchListBookId"));
  }, []);

  useEffect(() => {
    const storedWatchList = takeFromLS("watchListBookId");
    if (storedWatchList) {
      setWatchListBookId(storedWatchList);
      const tempBooks = books.filter((book) =>
        storedWatchList.includes(book.isbn13)
      );
      setWatchListBookObj(tempBooks);
    }
  }, []);

  return (
    <div className="grid justify-center mt-20">
      <h1
        className={`text-center text-2xl font-bold mb-16  ${
          watchListBookId.length === 1 && watchListBookId.includes(null)
            ? ""
            : "hidden"
        }`}
      >
        No book listed in your Watchlist
      </h1>
      <div>
        <BarChart width={600} height={300} data={watchListBookObj}>
          <XAxis dataKey="name" tick='name' />
          <YAxis />
          <Bar
            dataKey="totalPages"
            label={renderCustomBarLabel}
            fill="#8884d8"
            shape={<TriangleBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
