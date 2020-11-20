import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, DrawerAppContent, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle, List, ListItem, SimpleTopAppBar, TopAppBarFixedAdjust } from "rmwc";
import 'rmwc/dist/styles';
import './Menu.css';

const Menu = ({ open, setOpen }) => {

    const [mobile, setMobile] = useState(false);
    const mediaQuery = "(max-width: 700px)";

    const mql = window.matchMedia(mediaQuery);

    useEffect(() => {
        mql.addEventListener("change", () => {
            let m = window.matchMedia(mediaQuery).matches;
            setMobile(m);
        });
    }, []);

    return <>
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
            DrawerAppContent is an optional component that will resize
            content when the dismissible drawer is open and closed. It
            must be placed directly after the Drawer component.
                </DrawerAppContent>
    </>
}

export default Menu;
