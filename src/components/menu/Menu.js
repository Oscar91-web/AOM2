import React, { } from "react";
import { Link } from "react-router-dom";
import { Drawer, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem } from "rmwc";
import 'rmwc/dist/styles'

const Menu = () => {
    return <Drawer>
        <DrawerHeader>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <DrawerTitle>AOM 2</DrawerTitle>
            </Link>
            <DrawerSubtitle>Next generation</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
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
}

export default Menu;
