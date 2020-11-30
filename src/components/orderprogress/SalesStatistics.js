import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Text, Tooltip, XAxis, YAxis } from "recharts";
import { diagramWidth } from "../../Settings";
import buildURL from "../Utils";
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
const SalesStatistics = () => {
    // const [data, setData] = useState([]);
    useEffect(() => {
        console.log("EFFECT");
        getOrderStatus();
    }, []);

    async function getOrderStatus() {
        let url = buildURL("orderstatus", "LABO");
        try {
            const data = await axios.get(url);
            if (data != null) {
                console.log("hERERERE")
                console.log(data.data.status_counts);
                // setData(data.data.status_counts);

                // setUserGroups(data.data.status_counts);
            }
            else {
                console.log("NO USER GROUP GFOUnd")
            }
        }
        catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }
    function handleBarClick(e) {
        console.log("clicked bar!");
        console.log(e);
    }
    return <>
        <Text textAnchor="middle">Sales Statistics</Text>
        <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
    </>
}

export default SalesStatistics;
