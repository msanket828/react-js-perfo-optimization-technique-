import { useState } from "react";
import "./App.css";
import Count from "./components/Count/Count";
import Header from "./components/Header/Header";

function App() {
  const [age, setAge] = useState(25);

  return (
    <div className="App">
      <Header />
      <Count text="Age" value={age} />
      
    </div>
  );
}

export default App;
