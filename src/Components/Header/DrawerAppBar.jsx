import React, {useLayoutEffect, useState} from 'react'


//react router dom
import {Link} from "react-router-dom"

//React router
import { useLocation } from 'react-router';

//MUI MATERIAL
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

//Components
import BasicMenu from "./BasicMenu";
import AddBasicMenu from "./AddBasicMenu";
import Asynchronous from "./Asynchronous";
import SearchBar from "./SearchBar";

//Hooks
import useMobile from "./../../Hooks/useMobile";

const drawerWidth = 240;
const navItems = ["Main page", "Explore", "About", "Contact"];

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#F5F5F5",
    },
  },
});

function DrawerAppBar(props) {
  const isMobile = useMobile();
  const [isInHome, setisInHome] = useState(false);
  const { window } = props;
  const location = useLocation()
  const {pathname}= location;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const logoUrl = "https://i.ibb.co/WfM2Rf0/favicon-32x32.png";

  useLayoutEffect(() => {
    if(pathname=="/mainpage"){
     setisInHome(true)
    }else{
     setisInHome(false)
    }
    if(pathname=="/explore"){
     setisInHome(true)
    }else{
     setisInHome(false)
    }
    return ()=>{}
   },[pathname])


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            fontWeight: "bold",
          }}
        >
          Wiki<span style={{ color: "#a1cdf1" }}>Ideas</span>
          <img style={{ marginLeft: "10px" }} src={logoUrl} alt="32x32"></img>
        </div>
      </Typography>

      {isMobile ? (
        <>
          <Divider />
          <List sx={{ textAlign: "center" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
              <Link style={{textDecoration:"none", color:"black"}} to={`/createarticle`}>
                <ListItemText sx={{ textAlign:"center", ml:8.5}} >New Article</ListItemText>
              </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : (
        <></>
      )}

      <Divider />
      {isMobile?(<>   
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link style={{textDecoration:"none", color:"black"}} to={`/${item.replace(/\s/g, "").toLowerCase()}`}>
              <ListItemText primary={item} sx={{ textAlign:"center", ml:2}} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </>):(<></>)}
      <Divider/>
  {/*Aquí va la lista de categorias */}

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" color="secondary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "visible" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                mt: 1,
                mr: 1,
              }}
            >
              <img src={logoUrl} alt="logo32x32"></img>
            </Typography>
              {isInHome?(
              <></>
                ):(
              <SearchBar sx={{ flexgrow: 1 }} />      
              )}
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: 3 }}>
              <AddBasicMenu />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: 3 }}>
              <BasicMenu />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "visible", sm: "visible" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}></Box>
      </Box>
    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
