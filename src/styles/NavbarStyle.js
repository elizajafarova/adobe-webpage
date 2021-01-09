const styles = (theme) => ({
  root: {
    width: "100%",
    marginBottom: 0,
  },
  toolbar: {
    minHeight: "30px",
  },
  crumbs: {
    marginLeft: "65em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "9rem"
    }
  },
  navlink: {
    marginRight: "7px",
    textDecoration: "none",
    listStyle: "none",
    color: "black",
  },
  navlink2: {
    textDecoration: "none",
    listStyle: "none",
    color: "black",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
});
export default styles;
