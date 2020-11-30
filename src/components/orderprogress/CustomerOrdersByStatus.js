import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Text, Tooltip, XAxis, YAxis } from "recharts";
import axios from 'axios';
import buildURL from "../Utils";
import { diagramWidth } from "../../Settings";
import { snackbarQueue } from "../../snackbarQueue";

// const data = [
//     {
//         "name": "Page A",
//         "uv": 4000,
//     },
//     {
//         "name": "Page B",
//         "uv": 3000,
//     },
//     {
//         "name": "Page C",
//         "uv": 2000,
//     },
//     {
//         "name": "Page D",
//         "uv": 2780,
//     },
//     {
//         "name": "Page E",
//         "uv": 1890,
//     },
//     {
//         "name": "Page F",
//         "uv": 2390,
//     },
//     {
//         "name": "Page G",
//         "uv": 3490,
//     }
// ]



const CustomerOrdersByStatus = ({showOrders}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("Effectful");
        getStatusCounts();

    }, []);

    async function getStatusCounts() {
        let url = buildURL("orderstatus", "LABO");
        console.log(url);
        try {
            const data = await axios.get(url);
            if (data != null) {
                console.log("status_counts:");
                console.log(data.data.status_counts);
                setData(data.data.status_counts.map(e => ({name: e.status, uv: e.count})));
            }
        }
        catch (err) {
            console.log(err);
            snackbarQueue.notify({title: "asdads"});
            // setError(err.message);
        }
    }
    function handleBarClick(e) {
        console.log("clicked bar!");
        console.log(e);
        console.log("active label: " + e.activeLabel);
        showOrders(e.activeLabel);
    }
    return <>
        <Text textAnchor="middle">Customer Orders By Status</Text>
        <BarChart width={diagramWidth} height={250} data={data} onClick={handleBarClick}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    </>;
}

export default CustomerOrdersByStatus;