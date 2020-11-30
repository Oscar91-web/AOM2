import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Text, Tooltip, XAxis, YAxis } from "recharts";
import { diagramWidth } from "../../Settings";
import buildURL from "../Utils";
const datax = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
]
const HoldsExceptionsByShipDate = () => {
    const [data, setData] = useState([]);
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
                setData(data.data.status_counts);

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
        <Text textAnchor="middle">Holds / Exceptions By Ship Date</Text>
        <BarChart width={diagramWidth} height={250} data={data} onClick={handleBarClick}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    </>
}

export default HoldsExceptionsByShipDate;
