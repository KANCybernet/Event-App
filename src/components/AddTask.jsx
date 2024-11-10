// import React, { useState,useEffect } from 'react'

// const AddTask = ({setAllTask,allTask}) => {
//     const [task, setTask] = useState(' ')

//     const handleAddTask = (e)=>{
//         e.preventDefault()
//         const taskObj = {
//             id:  allTask.length === 0 ? 1 : allTask.length + 1,
//             msg:task,
//             isFlag: false
//         }
//         setAllTask([...allTask,taskObj])
//         setTask(' ')
//         localStorage.setItem('myList',JSON.stringify(allTask))
        
//     }
 
//   return (
//     <>
//       <div className="form">
//             <form onSubmit={handleAddTask}>
//                 <input type="text" placeholder="Enter Todo..." value={task} onChange={(e)=> setTask(e.target.value)}/>
//                 <button type='submit'>
//                 <span>Add</span>
//                 </button>
//             </form>
//         </div></>
//   )
// }

// export default AddTask


import React, { useState,useEffect } from 'react'

import { useContext } from 'react'
import { taskContext } from '../context/taskContext'
const AddTask = () => {
  const {allTask,setAllTask} = useContext(taskContext)
    const [task, setTask] = useState(' ')
console.log(task)
   
     const handleAddTask = (e)=>{
        e.preventDefault()
        const taskObj = {
            id:  allTask.length === 0 ? 1 : allTask.length + 1,
            msg:task,
            isFlag: false
        }
        setAllTask([...allTask,taskObj])
        setTask(' ')
        localStorage.setItem('myList',JSON.stringify(allTask))
        
    }
  return (
    <>
      <div className="form">
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Enter Todo..." value={task} onChange={(e)=> setTask(e.target.value)}/>
                <button type='submit'>
                <span>Add</span>
                </button>
            </form>
        </div></>
  )
}

export default AddTask