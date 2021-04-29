import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Card from "./components/UI/Card";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card className="expenses">
        <TodoItem />
      </Card>
    </div>
  );
}

export default App;
