import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./containers/Details/Details";
import Display from './containers/Display/display';
import AppBar from "./components/AppBar/AppBar";

const App: React.FC = () => {
    return (
        <>
            <div>
                <AppBar />
            </div>
      <Display />
      <Routes>
        <Route path="/shows/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
