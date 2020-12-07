import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Text, Tooltip, XAxis, YAxis } from "recharts";
import { get } from "../Utils";

const CustomerOrdersByStatus = ({ showOrders, salesMan, diagramWidth }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // getStatusCounts();
        if (salesMan) {
            get("orderstatus", salesMan, null, "status_counts", setData);
        }
        else {
            setData([]);
        }

    }, [salesMan]);


    function handleBarClick(e) {
        showOrders(e.activeLabel);
    }

    return <>
        <Text textAnchor="middle">Customer Orders By Status</Text>
        <ResponsiveContainer width="100%" height="93%">
            <BarChart width={diagramWidth} height={250} data={data} onClick={handleBarClick}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </>;
}

export default CustomerOrdersByStatus;