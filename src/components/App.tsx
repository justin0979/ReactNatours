import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { About } from "&sections/About";
import { Features } from "&sections/Features";
import { Tours } from "&sections/Tours";
import { Stories } from "&sections/Stories/Stories";
import { Booking } from "&sections/Booking";
import { Footer } from "&components/Footer";

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
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </Router>
  );
};
