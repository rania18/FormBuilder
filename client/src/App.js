import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Home from "./components/Home";
import ListForm from "./components/ListForm";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getForm, createForm } from "./actions/form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Grow in>
          <Container>
            <Grid>
              <Grid
                container
                className={classes.mainContainer}
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={10}>
                  <Home />
                </Grid>
                <Grid item xl={12} sm={10}>
                  <ListForm />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    </Router>
  );
}

export default App;
