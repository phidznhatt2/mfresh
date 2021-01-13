import React from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Header, Sidebar } from "./components/layout";

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setShowSidebar((pre) => !pre);
  };

  return (
    <>
      <Router>
        <Header toggle={toggleSidebar} />
        <Sidebar
          show={showSidebar}
          closeSidebar={() => setShowSidebar(false)}
        />
      </Router>
    </>
  );
}

export default App;
