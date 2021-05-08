import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "./elements/Menu";
import useStyles from "./hooks/styles";

function App() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <CssBaseline />
        <Menu />
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Router>
                    <Switch>
                        <Route path="/example">
                            <Dashboard />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
        </main>
    </div>
  );
}

export default App;
