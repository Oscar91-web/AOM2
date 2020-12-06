import { TextField } from "rmwc";

const BoxItem = ({label, value, bgColor, salesMan, showOrderLines }) => {
    function onClick() {
        showOrderLines({salesman: salesMan});
    }
    return <>
        <TextField label={label} value={value} readOnly style={{ backgroundColor: `${bgColor}`, marginBottom: "50px"}} onClick={onClick}></TextField>
    </>
}

export default BoxItem;
