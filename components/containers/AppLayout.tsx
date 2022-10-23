// recft_clsx_module_scss
import clsx from 'clsx';
import styles from './Components.module.scss'     //file scss cùng cấp
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';

import { drawerWidth } from '../../src/config/app.constant';
import Header from '../containers/Header'
import Menu, { DrawerHeader } from '../containers/Menu'; //bên component Menu component Menu là export default còn DrawerHeader chỉ là export, nên Menu sẽ để ở ngoài, còn DrawerHeader để bên trong {}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
   open?: boolean;
 }>(({ theme, open }) => ({
   flexGrow: 1,
   padding: theme.spacing(3),
   transition: theme.transitions.create('margin', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   marginLeft: `-${drawerWidth}px`,
   ...(open && {
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
     marginLeft: 0,
   }),
 }));

type AppLyoutPropType = {
   children: React.ReactNode,
}

function AppLayout(props: AppLyoutPropType) {

   const {children } = props

   const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
     setOpen(true);
   };
 
   const handleDrawerClose = () => {
     setOpen(false);
   };


   return (
      <div className={clsx(styles.component_AppLayout)}>
         <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={ handleDrawerOpen} />
            <Menu open={open} handleDrawerClose={handleDrawerClose} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
               <DrawerHeader />
               {children}
            </Box>
         </Box>
      </div>
   )
}
export default AppLayout