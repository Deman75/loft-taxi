import React, { memo } from "react";
import propTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import "./Login.css";

import { ContextLogin } from "../../store/context/Context";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0)
  },
  submit: {
    margin: theme.spacing(5, 0, 0)
  },
  grid: {
    marginRight: "10px"
  }
}));

function Login(props) {
  const { login } = React.useContext(ContextLogin);
  const classes = useStyles();

  const inputLogin = React.useRef(null);
  const inputPass = React.useRef(null);

  const handleClickSubmit = e => {
    e.preventDefault();
  };

  const handleClickSignup = e => {
    e.preventDefault();
    props.setActiveForm("signup");
  };

  return (
    <div className="login">
      <h1 style={{ marginLeft: "-2px", marginBottom: "1rem" }}>Войти</h1>
      <form className={classes.form} noValidate>
        <Grid container>
          <Grid item className={classes.grid}>
            Новый пользователь?
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={handleClickSignup}>
              {"Зарегистрируйтесь"}
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <TextField
            inputRef={inputLogin}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputRef={inputPass}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            margin="normal"
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClickSubmit}
            className={classes.submit}
          >
            Войти
          </Button>
        </Grid>
      </form>
    </div>
  );
}

Login.propTypes = {
  setActiveForm: propTypes.func.isRequired
};

export default memo(Login);
