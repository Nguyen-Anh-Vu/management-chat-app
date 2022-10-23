// recft_clsx_module_scss
import clsx from 'clsx';
import styles from './Components.module.scss'     //file scss cùng cấp
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';


import { drawerWidth } from '../../src/config/app.constant';

import Link from 'next/link';
import { MenuOpts } from '../../src/route-options';
import { SubMenuOpts } from '../../src/route-options';
import { getIconByName } from '../elements/AppIcon';

export const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
 }));
 
const openedMixin = (theme: Theme): CSSObject => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
 });
 
 const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
     width: `calc(${theme.spacing(8)} + 1px)`,
   },
 });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
   ({ theme, open }) => ({
     width: drawerWidth,
     flexShrink: 0,
     whiteSpace: 'nowrap',
     boxSizing: 'border-box',
     ...(open && {
       ...openedMixin(theme),
       '& .MuiDrawer-paper': openedMixin(theme),
     }),
     ...(!open && {
       ...closedMixin(theme),
       '& .MuiDrawer-paper': closedMixin(theme),
     }),
   }),
);
 
type MenuPropType = {
   open: boolean;
   handleDrawerClose: () => void;
 }
function Menu(props: MenuPropType) {

   const theme = useTheme();

   const { open, handleDrawerClose } = props;

   return (
      <div className={clsx(styles.component_Menu)}>
         <Drawer variant="permanent" open={open}>
            <DrawerHeader>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
               </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
               {MenuOpts.map((menuItem, index) => (
                  <Link key={menuItem.id} href={menuItem.path} >
                     <ListItem disablePadding sx={{ display: 'block' }}>
                        
               
                           <ListItemButton
                              sx={{
                                 minHeight: 48,
                                 justifyContent: open ? 'initial' : 'center',
                                 px: 2.5,
                              }}
                           >
                              <ListItemIcon
                                 sx={{
                                 minWidth: 0,
                                 mr: open ? 3 : 'auto',
                                 justifyContent: 'center',
                                 }}
                              >
                                 {getIconByName(menuItem.icon)}
                              </ListItemIcon>
                              <ListItemText primary={menuItem.title} sx={{ opacity: open ? 1 : 0 }} />
                           </ListItemButton>
                     </ListItem>
                  </Link>
               ))}
            </List>
            <Divider />
            <List>
               {SubMenuOpts.map((menuItem, index) => (
                  <Link key={menuItem.id} href={menuItem.path} >
                     <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                           sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              px: 2.5,
                           }}
                        >
                           <ListItemIcon
                              sx={{
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                              }}
                           >
                              {getIconByName(menuItem.icon)}
                           </ListItemIcon>
                           <ListItemText primary={menuItem.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                     </ListItem>
                  </Link>
               ))}
            </List>
         </Drawer>
      </div>
   )
}
export default Menu


