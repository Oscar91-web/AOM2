import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem, SimpleTopAppBar, TopAppBarFixedAdjust } from "rmwc";
import 'rmwc/dist/styles';
import './Menu.css';

const Menu = ({open, setOpen}) => {
    
    return <div>

   
    <Drawer dismissible open={open}>
        
            <DrawerHeader>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <DrawerTitle>AOM 2</DrawerTitle>
                </Link>
                <DrawerSubtitle>Next generation</DrawerSubtitle>
            </DrawerHeader>
            <DrawerAppContent style={{ minHeight: '15rem', padding: '1rem' }}>
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
            </DrawerAppContent>
        </Drawer>
        
      
        
</div>
}

export default Menu;
