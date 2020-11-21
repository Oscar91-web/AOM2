import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
import { useState } from 'react';
import buildURL from '../Utils';
import axios from 'axios';

// const phonePattern = /^\+?[0-9()\- ]+$/;
// const phonePatternString = "^[+]?[0-9 \(\)\-]+";

import { GridRow, GridCell, TextField, MenuSurfaceAnchor, Menu, MenuItem, Button } from 'rmwc';

const CustomerDetails = ({ customer, setCustomer }) => {

    console.log(customer);
/*
{
"customer_number": "50006",
"bill": "50006",
"language": "XXX",
"ref": null,
"salesman": "50",
"name": "External temp. sell-to cust",
"name2": null,
"street": "Address",
"city": "CITY",
"country": "SE"
},
*/
    if (customer) {
        return (<div>
            <GridRow>
                <GridCell span={8}>
                    <TextField fullwidth value={customer.name}></TextField>
                </GridCell>
            </GridRow>
            <GridRow>
                <br />
            </GridRow>
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Login" value={customer.customer_number} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <GridRow>
                <br />
            </GridRow>
        </div>)
    }
    else {
        return (<div />)
    }
}

export default CustomerDetails;