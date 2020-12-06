import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Text, Tooltip, XAxis, YAxis } from "recharts";
import { notify } from "../../snackbarQueue";

/* TODO: fake */

const data = [
    {
        "name": "19-aug",
        "uv": 598,
    },
    {
        "name": "20-aug",
        "uv": 437,
    },
    {
        "name": "21-aug",
        "uv": 174,
    },
    {
        "name": "22-aug",
        "uv": 281,
    },
    {
        "name": "23-aug",
        "uv": 212,
    },
    {
        "name": "24-aug",
        "uv": 0,
    },
    {
        "name": "25-aug",
        "uv": 27,
    },

]
const CustomerOrdersDueForShipment = ({ diagramWidth }) => {

    return <>
        <Text textAnchor="middle">Customer Orders Due For Shipment (TO DO)</Text>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart width={diagramWidth} height={250} data={data} onClick={() => notify("Not implemented yet!")}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#909090" />
            </BarChart>
        </ResponsiveContainer>
    </>
}

export default CustomerOrdersDueForShipment;
