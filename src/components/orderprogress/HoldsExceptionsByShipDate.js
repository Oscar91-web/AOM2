import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Text, Tooltip, XAxis, YAxis } from "recharts";
import { notify } from "../../snackbarQueue";

/* TODO: fake */

const data = [
    {
        "name": "19-aug",
        "uv": 50,
    },
    {
        "name": "20-aug",
        "uv": 61,
    },
    {
        "name": "21-aug",
        "uv": 23,
    },
    {
        "name": "22-aug",
        "uv": 66,
    },
    {
        "name": "23-aug",
        "uv": 59,
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
const HoldsAndExceptionsByShipDate = ({ diagramWidth }) => {

    return <>
        <Text textAnchor="middle">Holds and Exceptions (TO DO)</Text>
        <ResponsiveContainer width="100%" height="93%">
            <BarChart width={diagramWidth} height={250} data={data} onClick={() => notify("Not implemented yet!")}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#c00000" />
            </BarChart>
        </ResponsiveContainer>
    </>
}

export default HoldsAndExceptionsByShipDate;
