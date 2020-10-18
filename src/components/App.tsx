import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { About } from "./sections/About";

interface Content {
  h1: string;
  text: string;
  reference: string;
  refDesc: string;
}

const componentContent: Content = {
  h1: "With Typescript",
  text: "This works",
  reference:
    "https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d",
  refDesc:
    "This article has config file examples...like a much longer tsconfig.json",
};

export const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <main>
        <About />
      </main>
    </Router>
  );
};