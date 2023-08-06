// App.jsx
import React from "react";
import accountindata from "./Components/accountindata";
import Accoundind from "./Components/Accoundind";

const App = () => {
  return (
    <div>
      <Accoundind items={accountindata} />
    </div>
  );
};

export default App;
