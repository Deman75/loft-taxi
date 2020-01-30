import React, { memo } from "react";
import propTypes from "prop-types";

import "./Login.css";

import { ContextLogin } from "../../store/context/Context";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0)
  },
  submit: {
    margin: theme.spacing(3, 0, 0)
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
    const user = {
      login: inputLogin.current.value,
      pass: inputPass.current.value
    };

    if (user.login && user.pass) {
      login();
      props.setPage("map");
    }
    return;
  };

  const handleClickSignup = e => {
    e.preventDefault();
    props.setActiveForm("signup");
  };

  return (
    <div className="login">
      <Typography component="h1" variant="h4">
        Войти
      </Typography>
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
          <Grid item xs>
            <InputLabel htmlFor="component-simple">
              Имя пользователя*
            </InputLabel>
            <Input
              inputRef={inputLogin}
              type="email"
              id="email"
              fullWidth
              // validate
            />
          </Grid>
          <Grid item xs>
            <InputLabel htmlFor="component-simple">Пароль*</InputLabel>
            <Input
              inputRef={inputPass}
              type="password"
              id="password"
              fullWidth
            />
          </Grid>
          <Button
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
  setActiveForm: propTypes.func.isRequired,
  setPage: propTypes.func.isRequired
};

export default memo(Login);
