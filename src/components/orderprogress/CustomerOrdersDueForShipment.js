import { Bar, BarChart, CartesianGrid, Legend, Text, Tooltip, XAxis, YAxis } from "recharts";
import { diagramWidth } from "../../Settings";
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
const CustomerOrdersDueForShipment = () => {

    return <>
        <Text textAnchor="middle">Customer Orders Due For Shipment (TO DO)</Text>
        <BarChart width={diagramWidth} height={250} data={data} onClick={() => notify("Not implemented yet!")}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#909090" />
        </BarChart>
    </>
}

export default CustomerOrdersDueForShipment;
