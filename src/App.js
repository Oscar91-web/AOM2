import { Grid, GridCell, Portal, SimpleTopAppBar, TopAppBarFixedAdjust } from 'rmwc';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Employees from './components/employees/Employee';
import 'rmwc/dist/styles'
import Menu from './components/menu/Menu';
import Mobile from './components/menu/Mobile';
import WebFont from 'webfontloader';
import { useState } from 'react';

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
    
    <Router>
    <SimpleTopAppBar
        title="test"
        navigationIcon
        onNav={() => setOpen(!open)}
        actionItems={[
            {
                icon: 'file_download',
                onClick: () => console.log('Do Something')
            },
            { icon: 'print', onClick: () => console.log('Do Something') },
            { icon: 'bookmark', onClick: () => console.log('Do Something') }
        ]}
    />
    <TopAppBarFixedAdjust />
    <Menu open={open} setOpen={setOpen}></Menu>
          <Switch>
            <Route path='/employees' component={Employees} />
            <Route path='/test1' >
              <div>test1</div>
            </Route>
          </Switch>
    </Router>
    <Portal /> 
    </>
  );
}

export default App;

/*
Hämta från pers, men försiktigt med Routern..
*/
