import '@rmwc/icon/styles';
// import '../customers/node_modules/@rmwc/icon/icon.css';
import { useState } from 'react';
import buildURL from '../Utils';
import axios from 'axios';

// const phonePattern = /^\+?[0-9()\- ]+$/;
// const phonePatternString = "^[+]?[0-9 \(\)\-]+";
const phonePatternString = "^[+]?[0-9 ()-]+$";
const phonePattern = new RegExp(phonePatternString);
const emailPatternString = "^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$";
const emailPattern = new RegExp(emailPatternString);

const { GridRow, GridCell, TextField, MenuSurfaceAnchor, Menu, MenuItem, Button } = require("rmwc")

const EmployeeDetails = ({ employee, setEmployee, employeeGroups }) => {
    const [name, setName] = useState(employee.name);
    const [openEmpGroups, setOpenEmpGroups] = useState(false);
    const [phone, setPhone] = useState(employee.phone ? employee.phone : "");
    const [email, setEmail] = useState(employee.email ? employee.email : "");
    const [empGroup, setEmpGroup] = useState(employee.employee_group);
    const [hasChanged, setHasChanged] = useState(false);

    console.log(employee);

    function enteredName(e) {
        let value = e.target.value;
        if (e.key === 'Enter') {
            console.log("entered name: " + value);
            setName(value);
        }
    }


    function clickedEmpgroup(g) {
        console.log("clicked emp group");
        console.log(g);
        // employee.employee_group_id = g.value;
        setEmpGroup(g.value);
        setHasChanged(g.value !== employee.employee_group_id);
        employee.employee_group = g.description;
        setOpenEmpGroups(false);
        // setEmployee(employee);
        console.log(employee);
    }

    function clickedEmpgroupField() {
        setOpenEmpGroups(true);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePhoneChange(e) {
        console.log("handlephonechg:")
        console.log(e);
        let value = e.target.value;
        let isPhoneValid = phonePattern.test(value);
        console.log("phone valid: " + isPhoneValid)
        setPhone(value);
        setHasChanged(value !== employee.phone);
    }

    function handleEmailChange(e) {
        console.log("handleemailchg:")
        console.log(e);
        let value = e.target.value;
        let isEmailValid = emailPattern.test(value);
        console.log("email valid: " + isEmailValid)
        setEmail(value);
        setHasChanged(value !== employee.email);
    }

    function saveButtonEnabled() {
        console.log("has changed:" + hasChanged);
        let isValid = allFieldsValid();
        console.log("isValid: " + isValid);
        let returnValue = hasChanged && isValid;
        console.log("saveButtonEnabled: " + returnValue);
        return returnValue;
    }
    function allFieldsValid() {
        // return emailValid && phoneValid;
        let valid = 
            (phone.length === 0 || phonePattern.test(phone))
            && (email.length === 0 || emailPattern.test(email))
            // && (empGroup !== employee.employee_group_id);
        console.log("allFieldsValid: " + valid);
        return valid;
    }

    const save = async () => {
        let url = buildURL("pers", employee.user);
        try {
            let data = {};
            if (phone !== employee.phone) {
                data.phone = phone;
            }
            if (email !== employee.email) {
                data.email = email;
            }
            if (empGroup !== employee.employee_group_id) {
                data.employee_group_id = empGroup;
            }
            let result = await axios.put(url, data);
            if (result != null) {
                console.log("result after put");
                console.log(result);
            }
            else {
                console.log("no result after put");
            }
        }
        catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    if (employee) {
        console.log("empgroup");
        console.log(employeeGroups);
        return (<div>
            <GridRow>
                <GridCell span={8}>
                    <TextField fullwidth value={name} onKeyDown={enteredName} onChange={handleNameChange}></TextField>
                </GridCell>
            </GridRow>
            <GridRow>
                <br />
            </GridRow>
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Login" value={employee.login} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="User" value={employee.user} readOnly />
                        </GridCell>
                        <GridCell span={2}>
                            <TextField outlined label="Employno" value={employee.number} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <GridRow>
                <br />
            </GridRow>
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Legal Entity" value={employee.legal_entity_id} readOnly />
                        </GridCell>
                        <GridCell span={8}>
                            <TextField fullwidth value={employee.legal_entity} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Organizational Unit" value={employee.org_unit_id} readOnly />
                        </GridCell>
                        <GridCell span={8}>
                            <TextField fullwidth value={employee.org_unit} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Department" value={employee.department_id} readOnly />
                        </GridCell>
                        <GridCell span={8}>
                            <TextField fullwidth value={employee.department} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Warehouse" value={employee.warehouse_id} readOnly />
                        </GridCell>
                        <GridCell span={8}>
                            <TextField fullwidth value={employee.warehouse} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Employment Group" value={empGroup} onClick={clickedEmpgroupField} readOnly />
                            <MenuSurfaceAnchor>
                                <Menu open={openEmpGroups} renderToPortal={true} onClose={() => setOpenEmpGroups(false)}>
                                    {employeeGroups.map(g => (
                                        <MenuItem key={g.value} onClick={() => clickedEmpgroup(g)}>{g.value} - {g.description}</MenuItem>
                                    ))}
                                </Menu>
                            </MenuSurfaceAnchor>

                        </GridCell>
                        <GridCell span={8}>
                            <TextField fullwidth value={employee.employee_group} readOnly />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="Phone" value={phone} onChange={handlePhoneChange} pattern={phonePatternString} />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <TextField outlined label="E-mail" value={email} onChange={handleEmailChange} pattern={emailPatternString} />
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
            <p />
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={2}>
                            <Button label="Save" disabled={!saveButtonEnabled()} onClick={save}></Button>
                        </GridCell>
                    </GridRow>
                </GridCell>
            </GridRow>
        </div>)
    }
    else {
        return (<div />)
    }
}

export default EmployeeDetails;