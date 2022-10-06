import React from 'react';
import MyList from './MyList';
import './App.css';


function App() {
  const toDoList = [
    "Sleep for Days",
    "Grade a Thousand Papers",
    "Drink Mulled Cider"
  ];
  return (
    <div>
      <MyList theList={toDoList} />
    </div>
  );
}

export default App;
