import React, { useState, useEffect, useMemo } from "react";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { processData } from "@/utils/monthlyDataGenerator";
// import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { parse, getYear } from 'date-fns';
import moment from 'moment';


import Select from "react-select";

ChartJS.register(Tooltip, Legend);







const filterChartDataByYear = (chartData, year) => {
  return chartData.filter((item) => {
    try {
      const dateObject = parseInt(moment(item.created_date).format('YYYY'), 10);
      return dateObject === year;
    } catch (error) {
      return false;
    }
  });
};


const TotalCustomers = ({ title, chartData }) => {



  const [chartArray, setChartArray] = useState([]);
  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const yearOptions = years.map((year) => ({ value: year, label: year }));
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };




  useEffect(() => {
    const filteredArray = filterChartDataByYear(chartData, currentYear);
    
    const fff = processData(filteredArray);
   
    setChartArray((prevChartArray) => fff);
  }, []);

  const labels = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const handleChange = (selectedOption) => {
    const yearToFilter = selectedOption.value;
 
    const filteredArray = filterChartDataByYear(chartData, yearToFilter);

    console.log(filteredArray ,"filteredArray")

    let ddvv = processData(filteredArray);

    setChartArray(ddvv);
    setSelectedYear(yearToFilter);
  };

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: chartArray.map((item) => item.app + item.referredCustomers),
        backgroundColor: "#81C784",
      },
    ],
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 position_relative">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="db_btn_chart">
            <Select
              id="yearSelect"
              options={yearOptions}
              value={selectedOption}
              onChange={handleChange}
              placeholder="This year"
            />
          </div>
        </div>

        <div className=" justify_content_center align_item_center pb_12">
          <div className="db_chart_bar">
            <Bar data={data} options={options} width={100} height={311} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomers;
