const styles = (theme) => ({
    main: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up("sm")]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
        theme.spacing.unit * 3
      }px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      marginTop: theme.spacing.unit * 3,
      width: "100%",
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });
  
  export default styles;
  