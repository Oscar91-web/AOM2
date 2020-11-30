import { TextField } from "rmwc";

const BoxItem = ({label, value, bgColor, }) => {
    return <>
        <TextField label={label} value={value} readOnly style={{ backgroundColor: `${bgColor}`, marginBottom: "50px"}}></TextField>
    </>
}

export default BoxItem;
