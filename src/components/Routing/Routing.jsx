import React from "react";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

import "./Routing.css";

function Routing() {
  const items = [
    { title: "Маршрут 1" },
    { title: "Маршрут 2" },
    { title: "Маршрут 3" },
    { title: "Маршрут 4" }
  ];

  const defaultProps = {
    options: items,
    getOptionLabel: option => option.title
  };

  const useStyles = makeStyles(theme => ({
    margin: {
      marginBottom: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  const handeClick = e => {
    console.log("Вызвать такси");
  };

  //MuiSvgIcon-root Нужно этому классу добавить borderLeft

  return (
    <Paper elevation={0} style={{ padding: "10px 36px 36px", width: "490px" }}>
      <Autocomplete
        {...defaultProps}
        id="from"
        debug
        className={classes.margin}
        renderInput={params => (
          <TextField {...params} label="Откуда" margin="normal" fullWidth />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="to"
        className={classes.margin}
        debug
        renderInput={params => (
          <TextField {...params} label="Куда" margin="normal" fullWidth />
        )}
      />
      <Button // focus определен в loft-taxi-mui-theme
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "30px" }}
        onClick={handeClick}
      >
        Вызвать такси
      </Button>
    </Paper>
  );
}

export default Routing;
