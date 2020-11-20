import { Drawer, DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem, Portal, SimpleTopAppBar, TopAppBarFixedAdjust } from "rmwc";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Employees from './components/employees/Employee';
import 'rmwc/dist/styles'
import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  const [mobile, setMobile] = useState(false);
  const mediaQuery = "(max-width: 700px)";

  const mql = window.matchMedia(mediaQuery);

  useEffect(() => {
    mql.addEventListener("change", () => {
      let m = window.matchMedia(mediaQuery).matches;
      setMobile(m);
    });
  }, []);

  const [open, setOpen] = useState(true);

  return (
    <>

      <SimpleTopAppBar
        title="AOM 2"
        navigationIcon
        onNav={() => setOpen(!open)}
        actionItems={[
          {
            icon: 'file_download',
            onClick: () => console.log("downloading...")
          },
          { icon: 'print', onClick: () => console.log('Do Something') },
          { icon: 'bookmark', onClick: () => console.log('Do Something') }
        ]}
      />
      <TopAppBarFixedAdjust />
      <Router>
        <Drawer modal={mobile} dismissible={!mobile} open={open} onClose={() => setOpen(false)}>
          <DrawerHeader>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <DrawerTitle>AOM 2</DrawerTitle>
            </Link>
            <DrawerSubtitle>Next generation</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent style={{ minHeight: '15rem', padding: '1rem' }}>
            <List>
              <ListItem>
                <Link to="/employees" style={{ color: 'inherit', textDecoration: 'inherit' }}>Employees</Link>
              </ListItem>
              <ListItem>
                <Link to="/test1" style={{ color: 'inherit', textDecoration: 'inherit' }}>Test 1</Link>
              </ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
          <Switch>
            <Route path='/employees' component={Employees} />
            <Route path='/test1' >
              <div>test1</div>
            </Route>
          </Switch>
        </DrawerAppContent>
      </Router>
      <Portal />
    </>
  );
}

export default App;

/*
Hämta från pers, men försiktigt med Routern..
*/
