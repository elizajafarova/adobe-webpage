import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyle";
import { ThemeContext } from "./ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color={isDarkMode ? "default" : "transparent"}
        >
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h8" color="inherit">
              Adobe
            </Typography>
            <Switch onChange={toggleTheme} />
            <Breadcrumbs aria-label="breadcrumb" className={classes.crumbs}>
              <Link to="/" className={classes.navlink}>
                Home
              </Link>
              <Link to="/contact" className={classes.navlink2}>
                Contact
              </Link>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
