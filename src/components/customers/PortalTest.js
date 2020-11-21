import React, { useState } from 'react';
import { Menu, MenuItem, MenuSurfaceAnchor, TextField } from 'rmwc';

function PortalTest() {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    // const searchEmps = async (url) => {
    //     console.log(url);
    //     try {
    //         const data = await axios.get(url);
    //         if (data != null) {
    //             console.log(data.data.people);
    //             setEmployees(data.data.people);
    //             // setProducts(data.data.products);
    //         }
    //     }
    //     catch (err) {
    //         console.log(err)
    //         // setError(err.message);
    //     }
    // }
    const handleChange = (e) => {
        let value = e.target.value;
        console.log("change: " + value);
        setValue(value);
        setOptions(value.split(""));
        // if (value.length > 2) {
        //     searchEmps(API_URL + "/?limit=5&q=" + value);
        // }
        // else {
        //     setEmployees([]);
        // }
    }

    return (
        <>
            {/* <div
                style={{
                    marginBottom: '5rem',
                    height: '3.5rem',
                    overflow: 'hidden'
                }}
            > */}
                <TextField icon="search" label="Search employees" value={value} onChange={handleChange}/>
                <MenuSurfaceAnchor>
                    <Menu open renderToPortal={true}>
                        {options.map(o => (
                            <MenuItem key={o}>{o}</MenuItem>
                        ))}
                    </Menu>

                </MenuSurfaceAnchor>
            {/* </div> */}
        </>
    );
}

export default PortalTest;
