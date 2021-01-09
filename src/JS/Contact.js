import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ContactStyle";
import { LanguageContext } from "./LanguageContext";

const words = {
  azerbaijan: {
    email: "E-mail ünvanı",
    password: "Şifrə",
    rememberMe: "Yadda saxla",
    signIn: "Daxil ol",
  },
  english: {
    email: "E-mail address",
    password: "Password",
    rememberMe: "Rememeber Me",
    signIn: "Sign in",
  },
};

class Contact extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, password, rememberMe, signIn } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="azerbaijan">Azerbaijan</MenuItem>
            <MenuItem value="english">English</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullwidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={rememberMe}
            />
            <Button
              type="submit"
              className={classes.submit}
              variant="contained"
              color="primary"
              fullWidth
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Contact);
