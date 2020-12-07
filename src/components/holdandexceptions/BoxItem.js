import { TextField } from "rmwc";

const BoxItem = ({label, value, bgColor, salesMan, showHoldLines }) => {
    function onClick() {
        showHoldLines({salesman: salesMan, hold_value: label});
    }
    return <>
        <TextField label={label} value={value} readOnly style={{ backgroundColor: `${bgColor}`, marginBottom: "10px"}} onClick={onClick}></TextField>
    </>
}

export default BoxItem;
