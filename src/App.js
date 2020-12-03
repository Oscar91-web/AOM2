import { Drawer, DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem, Portal, SimpleTopAppBar, SnackbarQueue, TextField, ThemeProvider, TopAppBarFixedAdjust } from "rmwc";
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
import OrderLinesListDataTable from './components/orderlines/OrderLinesListDataTable';
import HoldsAndExceptions from "./components/holdandexceptions/HoldAndExceptions";
import { get } from "./components/Utils";
import { diagramWidthDesktop, diagramWidthMobile } from "./Settings";

WebFont.load({
  google: {
    families: ['Roboto:300,500,700', 'Material Icons']
  }
});

function App() {
  const [mobile, setMobile] = useState(false);
  const mediaQuery = "(max-width: 700px)";
  const [title, setTitle] = useState("AOM2");
  const [user, setUser] = useState("");
  const [salesMan, setSalesMan] = useState(null);
  const [diagramWidth, setDiagramWidth] = useState(diagramWidthDesktop);

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    mql.addEventListener("change", () => {
      let m = window.matchMedia(mediaQuery).matches;
      setMobile(m);
      setDiagramWidth((m) ? diagramWidthMobile : diagramWidthDesktop);
    });
  }, []);

  const [open, setOpen] = useState(true);

  const keyDown = (e) => {
    let value = e.target.value;
    if (e.key === 'Enter') {
      get("pers", value, null, null, (obj) => {
        if (obj.number) {
          setSalesMan(obj.number);
          // setActiveTab(0);
        }
        else {
          setUser("");
          setSalesMan(null);
        }
      });
    }
  }

  const clicked = () => {
    console.log("clicked!");
    setUser("");
    setSalesMan(null);
  }

  const setTitleAndMaybeClose = (t) => {
    if (mobile) {
      setOpen(false);
    }
    setTitle(t);
  }

  let loginContent =
    <TextField value={user} label="User" onChange={(e) => setUser(e.target.value)} onKeyDown={keyDown} onClick={() => clicked()} placeholder="Login..." invalid={!salesMan} />;
  let params = { order_number: 100107 }
  return (
<ThemeProvider
  options={{
    primary: 'red',
    secondary: 'blue'
  }}
>      <SimpleTopAppBar
        endContent={loginContent}
        title={title}
        navigationIcon
        onNav={() => setOpen(!open)}
        // actionItems={[
        //   {
        //     icon: 'file_download',
        //     onClick: () => console.log("downloading...")
        //   },
        //   { icon: 'print', onClick: () => console.log('Do Something') },
        //   { icon: 'bookmark', onClick: () => console.log('Do Something') },
          // { icon: 'search', label: 'mylabel', onClick: () => console.log("kaka") }
        // ]}
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
              <Link to="/employees" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitleAndMaybeClose("Employees")}><ListItem>Employees</ListItem></Link>
              <Link to="/customers" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitleAndMaybeClose("Customers")}><ListItem>Customers</ListItem></Link>
              <Link to="/orders" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitleAndMaybeClose("Orders")}><ListItem>Orders</ListItem></Link>
              <Link to="/orderProgress" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitleAndMaybeClose("Order Progress Dashboard")}><ListItem>Order Progress</ListItem></Link>
              <Link to="/holdsandexceptions" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => setTitleAndMaybeClose("Holds and Exceptions Dashboard")}><ListItem>Holds and Exceptions</ListItem></Link>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
          <Switch>
            <Route path='/employees' component={Employees} />
            <Route path='/customers' component={Customers} />
            <Route path='/orders' component={Orders} />
            <Route path='/orderProgress'>
              <DashBoard salesMan={salesMan} diagramWidth={diagramWidth} />
            </Route>
            <Route path='/holdsandexceptions' component={HoldsAndExceptions} />
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
      <OrderLinesListDataTable params={params} />
    </ThemeProvider>
  );
}

export default App;
