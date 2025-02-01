import Header from "./components/Header";
import MainSection from "./components/MainSection";

import "./styles/App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div id="MainContainer">
      <Header />
      <br />
      <>
        <MainSection />
      </>

      <Footer />
    </div>
  );
}

export default App;

// App.get
// express API which holds the data I have Header
// Activating the button requests the data from the API

// 1. First focus on the get request
// 2. check boarding pass app for get the data
