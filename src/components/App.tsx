import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "&components/Navigation";
import { Header } from "./Header";
import { About } from "&sections/About";
import { Features } from "&sections/Features";
import { Tours } from "&sections/Tours";
import { Stories } from "&sections/Stories/Stories";
import { Booking } from "&sections/Booking";
import { Footer } from "&components/Footer";
import { Popup } from "&components/Popup";

import { tourCards } from "&data/tourCards";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Popup />
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours cards={tourCards} />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </Router>
  );
};
