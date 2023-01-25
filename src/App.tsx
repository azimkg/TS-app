import React from "react";
import ContextProvider from "./components/context/context";
import Routing from "./Routing";

const App = () => {
  return (
    <ContextProvider>
      <Routing />
    </ContextProvider>
  );
};

export default App;
