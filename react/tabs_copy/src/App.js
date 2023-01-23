import logo from './logo.svg';
import './App.scss';
import { useState } from "react";
import { TabWrapper } from "./components/TabWrapper"

function App() {
  const [tabs, setTabs] = useState([
    {
      name: "tab 1",
      message: "This is the content for tab 1",
      isSelected: true
    },
    {
      name: "tab 2",
      message: "This is the content for tab 2",
      isSelected: false
    },
    {
      name: "tab 3",
      message: "This is the content for tab 3",
      isSelected: false
    },
  ])
  return (
    <div className="App">
      <TabWrapper tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;
