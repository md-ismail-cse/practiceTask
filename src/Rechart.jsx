import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
      "leads": "1-25",
      "NLCD": 2400
    },
    {
      "leads": "26-50",
      "NLCD": 1398
    },
    {
      "leads": "51-75",
      "NLCD": 9800
    },
    {
      "leads": "76-100",
      "NLCD": 3908
    },
    {
      "leads": "101-125",
      "NLCD": 4800
    },
    {
      "leads": "126-150",
      "NLCD": 3800
    },
    {
      "leads": "151-175",
      "NLCD": 4300
    },
    {
      "leads": "176-200",
      "NLCD": 4300
    },
    {
      "leads": "201-225",
      "NLCD": 4300
    },
    {
      "leads": "226-250",
      "NLCD": 4300
    },
  ]

const Rechart = () => {

    const [posts, setPosts] = useState([]);

    const [filtreData, setFiltreData] = useState([]);
  
    useEffect(() => {
        const fatchPosts = async () => {
          const { data } = await axios.get("https://erp.seopage1.net/api/leads");
          const newData = data.data.filter((curData) => {
            return (
              curData.deal_status === 0 
            );
          });
          setPosts(newData);
        };
        fatchPosts();
      }, []);

      console.log(posts.length)

  return (
    <section className="rechart">
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="leads" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="NLCD" fill="#8884d8" />
        </BarChart>
    </section>
  );
};

export default Rechart;