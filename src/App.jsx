// import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/img/logo.png'
// import './App.css'
// import AppTitle from './components/AppTitle'
// import AddTask from './components/AddTask'
// import Tasks from './components/Tasks'

// function App() {
//   const [allTask, setAllTask] = useState([])

//   const deleteTask = (id)=>{
//     setAllTask(allTask.filter((task)=>{ return task.id !== id}))
//   }
//   const updateTask = (data)=>{
//     setAllTask(allTask?.map((task)=>{
//       if(task.id === data.id) {return  { ...task, isFlag: !data.isFlag }} else return task
//     }))

//   }

//   function getStorage() {
//     const storedList = localStorage.getItem('myList');
//     return storedList ? JSON.parse(storedList) : [];
//   }

//     useEffect(() => {
//       const myList = getStorage();
//      setAllTask(myList)
//       console.log(myList);

//     }, []);

//   return (
//     <div className="container">
//     <main>
//        <AppTitle/>

//         <AddTask setAllTask={setAllTask} allTask={allTask}/>
//         <Tasks allTask={allTask} deleteTask={deleteTask} updateTask={updateTask}/>
//     </main>
//   </div>
//   )
// }

// export default App

import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/img/logo.png";
import "./App.css";
import AppTitle from "./components/AppTitle";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <main>
        <AppTitle />

        <AddTask />
        <Tasks />
      </main>
    </div>
  );
}

export default App;
