import React from "react";
import { Button } from "antd";
import "./App.less";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, Chrome Extension!</h1>
      <Button type="primary">Click me</Button>
    </div>
  );
};

export default App;
