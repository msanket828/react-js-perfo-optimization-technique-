import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Count from "./components/Count/Count";
import Header from "./components/Header/Header";

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] =useState(25000);  

  const handleIncrementAge=useCallback(()=> {
    setAge(age + 5);
  },[age]);
  

  const handleIncrementSalary=useCallback(()=> {
    setSalary(salary + 5000);
  },[salary]);



  return (
    <div className="App">
      <Header />
      <Count text="Age" value={age} />
      <Button type="button" onClick={handleIncrementAge}>Increment Age</Button>
      <Count text="salary" value={salary} />
      <Button type="button" onClick={handleIncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default App;
