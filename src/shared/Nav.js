import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AppsIcon from "@material-ui/icons/Apps";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from '@material-ui/icons/Layers';
import SchoolIcon from '@material-ui/icons/School';
import GodknowsCLogo from "../static/images/mylogoC.png";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#b3b8cd"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  menuItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const Nav = ({ children }) => {
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(null);
  
  const ToggleDrawer = () => {
    if (drawerOpen) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={ToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <img src={GodknowsCLogo} alt="Logo" width="200" height="55" />
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          open={drawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          style={{ zIndex: 1099 }}
        >
          <div className={classes.toolbar} />
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon component="div">
                  <AppsIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="About Me" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/education");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <SchoolIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Education" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/certifications");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <LayersIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Certifications" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/skills");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <BarChartIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Skills" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/portfolio");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <BusinessCenterIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Projects" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/contact");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <AssignmentIndIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Contact Me" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon component="div">
                  <AppsIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="About Me" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/education");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <SchoolIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Education" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/certifications");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Certifications" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/skills");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <BarChartIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Skills" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/portfolio");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon component="div">
                  <BusinessCenterIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Projects" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setDrawerOpen(false);
              history.push("/contact");
            }}
          >
            <div className={classes.menuItemContainer}>
              <div>
                <ListItemIcon>
                  <AssignmentIndIcon style={{ color: "#231e39" }} />
                </ListItemIcon>
              </div>
              <div>
                <ListItemText primary="Contact Me" style={{ color: "#231e39" }} />
              </div>
            </div>
          </MenuItem>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Nav;
