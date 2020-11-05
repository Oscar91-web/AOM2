import logo from './logo.svg';
import './App.css';
import WebFont from 'webfontloader';
import Employees from './components/employees/Employees';

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  return (
    <div className="App">
      <div>

      </div>
      <Employees>123</Employees>
      
    </div>
  );
}

export default App;
