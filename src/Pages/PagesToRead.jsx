
import { BarChart } from "@mui/x-charts/BarChart";
import { useLoaderData } from "react-router-dom";
const PagesToRead = () => {
  const bookData = useLoaderData();
  const chartSetting = {
    xAxis: [
      {
        label: "rainfall (mm)",
      },
    ],
    height: 700,
    
  };
  return (
    <div>
    <BarChart
      dataset={bookData}
      yAxis={[{ scaleType: 'band', dataKey: 'name' }] }
      series={[{ dataKey: 'totalPages', label: 'Books Pages',  }]}
      layout="horizontal"
      {...chartSetting}
      borderRadius={40}
    />
    </div>
  );
};

export default PagesToRead;
