import { Grid, GridCell, Portal } from 'rmwc';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Employees from './components/employees/Employee';
import 'rmwc/dist/styles'
import Menu from './components/menu/Menu';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  return (
    <>
    <Router>
      <Grid align="left">
        <GridCell align="top" span={3}><Menu></Menu></GridCell>
        <GridCell align="top" span={9}>
          <Switch>
            <Route path='/employees' component={Employees} />
            <Route path='/test1' >
              <div>test1</div>
            </Route>
          </Switch>
        </GridCell>
      </Grid>
    </Router>
    <Portal /> 
    </>
  );
}

export default App;

/*
Hämta från pers, men försiktigt med Routern...
*/
