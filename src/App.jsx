import React from "react";
import ConverterForm from "./Components/ConverterForm";

const App = () => {
  return (
    <div className="p-10 rounded-lg main">
      <h2 className="mb-10 text-2xl font-bold tracking-wider text-center text-white">
        Currency Converter
      </h2>
      <ConverterForm />
    </div>
  );
};

export default App;
