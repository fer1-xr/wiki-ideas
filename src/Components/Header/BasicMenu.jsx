import * as React from "react";

//Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// React Router Dom
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const menuItems = ["Main page", "Explore", "About", "Contact"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "black" }}
      >
        Menu
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              <Link style={{textDecoration:"none", color:"black"}} to={`/${item.replace(/\s/g, "").toLowerCase()}`} > 
              {item}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
