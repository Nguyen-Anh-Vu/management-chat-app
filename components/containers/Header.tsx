// recft_clsx_module_scss
import clsx from 'clsx';
import styles from './Components.module.scss'     //file scss cùng cấp
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from '../../src/config/app.constant';

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}
 
const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
 })<AppBarProps>(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
     marginLeft: drawerWidth,
     width: `calc(100% - ${drawerWidth}px)`,
     transition: theme.transitions.create(['width', 'margin'], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),
   }),
 }));

type HeaderPropType = {
   open: boolean;
   handleDrawerOpen: () => void;
 }

function Header(props: HeaderPropType) {

   const { open, handleDrawerOpen } = props;

   return (
      <div className={clsx(styles.component_Random)}>

         <AppBar position="fixed" open={open}>
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               sx={{
               marginRight: 5,
               ...(open && { display: 'none' }),
               }}
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
               Management App
            </Typography>
         </Toolbar>
         </AppBar>
      </div>
   )
}
export default Header