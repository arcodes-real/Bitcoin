import React from "react";
import Topbar from "./Components/Topbar";
import Countdown from "./Components/Countdown";
import Card from "./Components/Card";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  const targetDate = '2024-04-18T00:00:00'
  return (
    <>
      <Topbar />
      <Countdown targetDate = {targetDate} />
      <Card />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
