import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {useNavigate } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PaymentIcon from '@mui/icons-material/Payment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate= useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'#AB274F',}}
>
        <Toolbar>
          <IconButton
            color="#AB274F"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: 'none', marginLeft :'0px' }) }}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"  style={{fontFamily: 'cursive' , textAlign:'center'}}>
            DocStop
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={() => handleMenuItemClick('/')}>
            <ListItemIcon>
              <HomeIcon  />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/profile')}>
            <ListItemIcon >
              <PersonIcon  />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/appointments')}>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/records')}>
            <ListItemIcon>
              <MedicalServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Records" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/payments')}>
            <ListItemIcon >
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/feedback')}>
            <ListItemIcon >
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>
        </List>
      </Drawer>
      
    </div>
  );
}

export default Sidenav;

