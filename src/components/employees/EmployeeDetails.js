import '@rmwc/icon/styles';
import { useState } from 'react';
import buildURL from '../Utils';
import axios from 'axios';

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

    function enteredName(e) {
        let value = e.target.value;
        if (e.key === 'Enter') {
            setName(value);
        }
    }

    function clickedEmpgroup(g) {
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
        let value = e.target.value;
        // let isPhoneValid = phonePattern.test(value);
        setPhone(value);
        setHasChanged(value !== employee.phone);
    }

    function handleEmailChange(e) {
        let value = e.target.value;
        // let isEmailValid = emailPattern.test(value);
        setEmail(value);
        setHasChanged(value !== employee.email);
    }

    function saveButtonEnabled() {
        let isValid = allFieldsValid();
        let returnValue = hasChanged && isValid;
        return returnValue;
    }

    function allFieldsValid() {
        let valid = 
            (phone.length === 0 || phonePattern.test(phone))
            && (email.length === 0 || emailPattern.test(email))
            // && (empGroup !== employee.employee_group_id);
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