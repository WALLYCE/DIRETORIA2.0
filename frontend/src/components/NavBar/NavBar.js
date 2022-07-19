import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Routes, Route, useRouterMatch} from 'react-router-dom';
import Vendas from '../../pages/Vendas/Vendas';
import Cidades from '../../pages/Cidades/Cidades'
import Vendedores from '../../pages/Vendedores/Vendedores';
import Home from '../../pages/Home/Home';
import ErroProcedimento from '../../pages/erro_procedimento/erro_procedimento';
import Projetos from '../../pages/Projetos/Projetos';
import Contratos from '../../pages/Contratos/Contratos';
import Setor_Venda from '../../pages/Setores_Vendas/Setor_Venda';
import Reincidencia_OS from '../../pages/Reincidencia_OS/Reincidencia_OS'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { DrawerContext } from '../../context/DrawerContext';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StoreIcon from '@mui/icons-material/Store';
import Forward5Icon from '@mui/icons-material/Forward5';
import Button from '@mui/material/Button';
import {AuthContext} from '../../context/AuthContext'
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Retiradas from '../../pages/Retiradas/Retiradas';
import Clientes_Inadimplentes from '../../pages/Clientes_Inadimplentes/Clientes_Inadimplentes2'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import Ex_Clientes_Prospecto from '../../pages/Ex_Clientes_Prospecto/Ex_Clientes_Prospecto'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Tecnicos from '../../pages/Tecnicos/Tecnicos';
import GppBadIcon from '@mui/icons-material/GppBad';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Hdtvs from '../../pages/hdtvs/hdtvs';
import Ligacoes from '../../pages/Ligacoes/Ligacoes'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
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
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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

export default function NavBar() {
  const theme = useTheme();
  
  const {open, setOpen}= React.useContext(DrawerContext);

  const {logout}= React.useContext(AuthContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const bg = {
    background: 'linear-gradient(to right, #ED3237, rgb(97, 60, 128) )'
  }
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{background: 'rgb(97, 60, 128)'}} position="fixed" open={open} >
        <Toolbar >
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Button color="inherit" onClick={logout}>Sair</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} onMouseOver={()=>{setOpen(true)}} onMouseOut={()=>{setOpen(false)}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
{/*         <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/home' onClick={handleDrawerClose}
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
                 <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={'Dasboard'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}


            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/cidades' onClick={handleDrawerClose}
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
                 <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary={'Cidades'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/vendas' onClick={handleDrawerClose}
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
                 <SellIcon/>
                </ListItemIcon>
                <ListItemText primary={'Vendas'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/contratos' onClick={handleDrawerClose}
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
                 <HistoryEduIcon/>
                </ListItemIcon>
                <ListItemText primary={'Renovações de Contrato'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/vendedores' onClick={handleDrawerClose}
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
                 <PermIdentityIcon/>
                </ListItemIcon>
                <ListItemText primary={'Vendedores'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/setor_vendas' onClick={handleDrawerClose}
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
                 <StoreIcon/>
                </ListItemIcon>
                <ListItemText primary={'Vendas/Setor'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

{/* 
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/ligacoes' onClick={handleDrawerClose}
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
                 <PhoneForwardedIcon/>
                </ListItemIcon>
                <ListItemText primary={'Ligações'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}
            
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/hdtvs' onClick={handleDrawerClose}
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
                 <LiveTvIcon/>
                </ListItemIcon>
                <ListItemText primary={'HDTVS'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>      




            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/ex_clientes_prospecto' onClick={handleDrawerClose}
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
                 <DirectionsWalkIcon/>
                </ListItemIcon>
                <ListItemText primary={'Ex-Clientes'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/reincidencia_os' onClick={handleDrawerClose}
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
                 <Forward5Icon/>
                </ListItemIcon>
                <ListItemText primary={'Reincidência/O.S'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/tecnicos' onClick={handleDrawerClose}
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
                 <EngineeringIcon/>
                </ListItemIcon>
                <ListItemText primary={'Técnicos'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/retiradas' onClick={handleDrawerClose}
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
                 <RouterOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={'Retiradas ONUS'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/erro_procedimento' onClick={handleDrawerClose}
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
                 <GppBadIcon/>
                </ListItemIcon>
                <ListItemText primary={'Erro de Procedimento'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <Divider></Divider>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/clientes_inadimplentes' onClick={handleDrawerClose}
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
                 <MoneyOffIcon/>
                </ListItemIcon>
                <ListItemText primary={'Inadimplentes'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>

    



            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} to='/projetos' onClick={handleDrawerClose}
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
                 <ArchitectureIcon/>
                </ListItemIcon>
                <ListItemText primary={'Projetos'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/vendas' element={<Vendas/>}></Route>
          <Route path="/contratos" element={<Contratos/>}></Route>
          <Route path="/vendedores" element={<Vendedores/>}></Route>
          <Route path="/setor_vendas" element={<Setor_Venda/>}></Route>
          <Route path="/reincidencia_os" element={<Reincidencia_OS/>}></Route>
          <Route path="/clientes_inadimplentes" element={<Clientes_Inadimplentes/>}></Route>
          <Route path="/ex_clientes_prospecto" element={<Ex_Clientes_Prospecto/>}></Route>
          <Route path="/cidades" element={<Cidades/>}></Route>
          <Route path="/retiradas" element={<Retiradas/>}></Route>
          <Route path="/projetos" element={<Projetos/>}></Route>
          <Route path="/tecnicos" element={<Tecnicos/>}></Route>
          <Route path="/erro_procedimento" element={<ErroProcedimento/>}></Route>
          <Route path="/hdtvs" element={<Hdtvs/>}></Route>
          <Route path="/ligacoes" element={<Ligacoes/>}></Route>
        </Routes>   
      </Box>
    </Box>   
   
  );
}
