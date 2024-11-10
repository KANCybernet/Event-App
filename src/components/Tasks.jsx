import React from 'react'
import Task from './Task'
import { useContext } from 'react'
import { taskContext } from '../context/taskContext'

const Tasks = () => {

  const {allTask} = useContext(taskContext)
  return (
<><div>
        <ul>
            
            {
                allTask.map((val,i) =>{
                    return(
                        <Task task={val}/>
                    )
                })
            }
        </ul>
        </div></>  )
}

export default Tasks