import { TextField } from 'rmwc';
import 'rmwc/dist/styles';
import EmployeeDetails from './EmployeeDetails';
import EmployeeList from './EmployeeList';
import EmployeeSearch from './EmployeeSearch';
import EmployeeTab from './EmployeeTab';
const Employees = () => {
    return <div>
    <EmployeeTab></EmployeeTab>
    {/* <EmployeeList></EmployeeList>
    <EmployeeSearch></EmployeeSearch> */}
    <EmployeeDetails></EmployeeDetails>
    </div>
}
export default Employees;