import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";
import HomePage from "./modules/home";

interface Props {}

export function App({}: Props) {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}
