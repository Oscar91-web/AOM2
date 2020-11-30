import { Drawer, DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem, Portal, SimpleTopAppBar, SnackbarQueue, TopAppBarFixedAdjust } from "rmwc";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Employees from './components/employees/Employee';
import Customers from './components/customers/Customers';
import 'rmwc/dist/styles'
import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';
import DashBoard from "./components/orderprogress/DashBoard";
import Orders from "./components/orders/Orders";
import { snackbarQueue } from "./snackbarQueue";

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  const [mobile, setMobile] = useState(false);
  const mediaQuery = "(max-width: 700px)";
  const [title, setTitle] = useState("AOM2");

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
        title={title}
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
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("AOM2")}>
          <DrawerHeader>
            
              <DrawerTitle>AOM 2</DrawerTitle>
            
            <DrawerSubtitle>Next generation</DrawerSubtitle>
          </DrawerHeader>
          </Link>
          <DrawerContent style={{ minHeight: '15rem', padding: '1rem' }}>
            <List>
              
                <Link to="/employees" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Employees")}><ListItem>Employees</ListItem></Link>
                <Link to="/customers" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Customers")}><ListItem>Customers</ListItem></Link>
                <Link to="/orders" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Orders")}><ListItem>Orders</ListItem></Link>
                <Link to="/chart1" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Chart1")}><ListItem>Chart1</ListItem></Link>
                <Link to="/orderProgress" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Chart2")}><ListItem>Order Progress Dashboard</ListItem></Link>
                <Link to="/test1" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitle("Test1")}><ListItem>Test 1 </ListItem></Link>
             
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
          <Switch>
            <Route path='/employees' component={Employees} />
            <Route path='/test1s' />
            <Route path='/customers' component={Customers} />
            <Route path='/orders' component={Orders} />

            <Route path='/orderProgress' component={DashBoard} />
          </Switch>
        </DrawerAppContent>
      </Router>
      <Portal />
      <SnackbarQueue
        messages={snackbarQueue.messages} leading
        // You can also pass default options to pass to your notifications
        // ie, make them all leading, stacked, etc
        // leading
        // stacked
      />
    </>
  );
}

export default App;

/*
Hämta från pers, men försiktigt med Routern..
*/
