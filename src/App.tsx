import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Project } from "./containers/project/Project";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Project />
      </Container>
    </>
  );
};

export default App;
