import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
import { GridRow, GridCell, TextField } from 'rmwc';

const OrderDetails = ({ customer }) => {

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
                            <TextField outlined label="Customer" value={customer.customer_number} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Bill" value={customer.bill} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Language" value={customer.language} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="ref" value={customer.ref} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Salesman" value={customer.salesman} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Name" value={customer.name} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Street" value={customer.street} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="City" value={customer.city} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Country" value={customer.country} readOnly />
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

export default OrderDetails;