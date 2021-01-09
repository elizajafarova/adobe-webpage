import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      width: "100%",
      minHeight: "650px",
    };
    return <div className="page" style={styles}>{this.props.children}</div>;
  }
}
