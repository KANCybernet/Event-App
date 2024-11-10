import React from 'react'
import { useContext } from 'react'
import { taskContext } from '../context/taskContext'

const Task = ({task}) => {
  const {setAllTask,allTask} = useContext(taskContext)
  const deleteTask = (id)=>{
       setAllTask(allTask.filter((task)=>{ return task.id !== id}))
      }
      const updateTask = (data)=>{
            setAllTask(allTask?.map((task)=>{
              if(task.id === data.id) {return  { ...task, isFlag: !data.isFlag }} else return task
            }))
        
          }
  return (
<> <li>
                <input type="checkbox" style={{width: "25px", height:"25px"}} onClick={()=>updateTask(task)}/>
                <b className={task.isFlag ? 'completed' : ''}>{task.msg}</b>
                <button onClick={()=>deleteTask(task.id)}>
                    <span>X</span>
                </button>
            </li></>  )
}

export default Task